/**
 * Application Entrypoint for Production Platforms (Square Cloud, Hostinger, cPanel, Render, Railway, etc.)
 * Compatible with Node.js 22 and ES Modules ("type": "module").
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compiledServer = path.join(__dirname, 'dist', 'server.cjs');

if (fs.existsSync(compiledServer)) {
  await import('./dist/server.cjs');
} else {
  try {
    const { register } = await import('tsx/esm/api');
    register();
    await import('./server.ts');
  } catch (err) {
    console.error('[Startup Error] Neither dist/server.cjs nor server.ts could be started:', err);
    process.exit(1);
  }
}
