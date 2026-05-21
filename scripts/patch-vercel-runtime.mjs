/**
 * patch-vercel-runtime.mjs
 *
 * @astrojs/vercel v7 hardcodes nodejs18.x, which Vercel no longer accepts
 * (Node 18 reached EOL April 2025). This script patches the generated
 * .vc-config.json to use nodejs20.x after every build.
 *
 * Run automatically via the "postbuild" npm script.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const functionsDir = join(__dirname, '../.vercel/output/functions');

function patchDir(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }

  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      patchDir(full);
    } else if (entry === '.vc-config.json') {
      const raw = JSON.parse(readFileSync(full, 'utf8'));
      if (raw.runtime === 'nodejs18.x') {
        raw.runtime = 'nodejs20.x';
        writeFileSync(full, JSON.stringify(raw, null, 2));
        console.log(`patched: ${full.replace(join(__dirname, '..'), '')}`);
      }
    }
  }
}

patchDir(functionsDir);
console.log('runtime patch done — nodejs18.x → nodejs20.x');
