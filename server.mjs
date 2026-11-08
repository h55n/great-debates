import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('public');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };

http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname.includes('\0')) throw new Error('Invalid path');
  } catch {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }

  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) {
    res.writeHead(403);
    res.end();
    return;
  }
  let target = file;
  try {
    if (!fs.existsSync(target) || fs.statSync(target).isDirectory()) target = path.join(root, 'index.html');
  } catch {
    res.writeHead(500);
    res.end('Unable to read asset');
    return;
  }
  res.setHeader('Content-Type', types[path.extname(target)] || 'application/octet-stream');
  const stream = fs.createReadStream(target);
  stream.on('error', () => {
    if (!res.headersSent) {
      res.writeHead(500);
      res.end('Unable to read asset');
    } else {
      res.destroy();
    }
  });
  stream.pipe(res);
}).listen(process.env.PORT || 4173, '0.0.0.0');
