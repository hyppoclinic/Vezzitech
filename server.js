/**
 * Application Entrypoint for Production Platforms (Hostinger, Square Cloud, cPanel, Render, Railway, etc.)
 * Compatible with Node.js 22 and ES Modules ("type": "module").
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

// Automatically load .env if present in root
dotenv.config();

// Ensure NODE_ENV is set to production when running via server.js entrypoint
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compiledServer = path.join(__dirname, 'dist', 'server.cjs');

console.log(`[Hostinger/Production Boot] Node.js version: ${process.version}`);
console.log(`[Hostinger/Production Boot] Environment: ${process.env.NODE_ENV}`);
console.log(`[Hostinger/Production Boot] Assigned PORT: ${process.env.PORT || '3000 (default)'}`);

if (fs.existsSync(compiledServer)) {
  console.log('[Hostinger/Production Boot] Loading compiled production server: dist/server.cjs');
  await import('./dist/server.cjs');
} else {
  console.log('[Hostinger/Production Boot] dist/server.cjs not found, running tsx runner on server.ts');
  try {
    const { register } = await import('tsx/esm/api');
    register();
    await import('./server.ts');
  } catch (err) {
    console.error('[Startup Error] Neither dist/server.cjs nor server.ts could be started:', err);
    process.exit(1);
  }
}
