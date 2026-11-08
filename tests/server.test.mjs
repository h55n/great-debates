import assert from 'node:assert/strict';
import test from 'node:test';
import { spawn } from 'node:child_process';
import http from 'node:http';
import net from 'node:net';
import { setTimeout } from 'node:timers/promises';

async function start(t) {
  const probe = net.createServer();
  await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve));
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  const child = spawn(process.execPath, ['server.mjs'], { cwd: new URL('..', import.meta.url), env: { ...process.env, PORT: String(port) }, stdio: 'ignore' });
  t.after(() => child.kill());
  const get = (url) => new Promise((resolve, reject) => {
    const req = http.get({ hostname: '127.0.0.1', port, path: url }, res => {
      let body = ''; res.setEncoding('utf8'); res.on('data', x => body += x); res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('error', reject); req.setTimeout(2000, () => req.destroy(new Error('timeout')));
  });
  for (let i = 0; i < 100; i++) {
    try { await get('/'); return get; } catch { await setTimeout(20); }
  }
  throw new Error('server did not start');
}
test('malformed URL is rejected without terminating the server', async t => {
  const get = await start(t);
  assert.equal((await get('/%E0%A4%A')).status, 400);
  assert.equal((await get('/')).status, 200);
});
test('NUL path is rejected without terminating the server', async t => {
  const get = await start(t);
  assert.equal((await get('/%00')).status, 400);
  assert.equal((await get('/')).status, 200);
});
test('encoded parent-directory traversal is denied', async t => {
  const get = await start(t);
  assert.equal((await get('/..%2fserver.mjs')).status, 403);
});
test('static assets and SPA routes remain available', async t => {
  const get = await start(t);
  assert.equal((await get('/app.js')).status, 200);
  const response = await get('/debate/example');
  assert.equal(response.status, 200);
  assert.match(response.body, /<!doctype html/i);
});
