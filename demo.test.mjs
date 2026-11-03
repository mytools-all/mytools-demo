import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

test('all five demo actions use declared host capabilities', async () => {
  const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
  const manifest = JSON.parse(readFileSync(new URL('./plugin.json', import.meta.url), 'utf8'));
  const controls = Object.fromEntries(['output', 'copy', 'read', 'open', 'path', 'apps'].map(id => [id, {}]));
  const calls = [];
  runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1], {
    document: {getElementById: id => controls[id]},
    window: {mytools: {call: async (id, args) => { calls.push({id, args}); return 'fixture'; }}},
  }, {timeout: 1000});
  for (const id of ['copy', 'read', 'open', 'path', 'apps']) await controls[id].onclick();
  assert.deepEqual(calls.map(call => call.id), ['clipboard.write', 'clipboard.read', 'shell.open', 'system.path', 'app.list']);
  for (const call of calls) assert.ok(manifest.capabilities.includes(call.id));
  assert.equal(calls[0].args.text, 'hello from mytools-demo');
  assert.equal(calls[3].args.name, 'home');
});
