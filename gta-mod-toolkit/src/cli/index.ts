import path from 'path';
import { loadModInfo, validateModInfo } from '../core/mod';
import { resolvePath } from '../utils/fs';

// I implement a tiny CLI for inspecting and validating example mods.
async function main(): Promise<void> {
  const argv = process.argv.slice(2);
  const cmd = argv[0] || 'help';

  if (cmd === 'help' || cmd === '--help' || cmd === '-h') {
    console.log('Usage: <command> [modDir]');
    console.log('Commands:');
    console.log('  info [modDir]     Print modinfo.json for the mod');
    console.log('  validate [modDir] Validate modinfo.json and exit non-zero on errors');
    console.log('  help              Show this help');
    return;
  }

  const modDirArg = argv[1];
  const defaultExample = path.join(process.cwd(), 'mods', 'example-mod');
  const modDir = modDirArg ? resolvePath(modDirArg) : defaultExample;

  try {
    if (cmd === 'info') {
      const mi = await loadModInfo(modDir);
      console.log(JSON.stringify(mi, null, 2));
      return;
    }

    if (cmd === 'validate') {
      const mi = await loadModInfo(modDir);
      const errors = validateModInfo(mi);
      if (errors.length === 0) {
        console.log('OK');
        return;
      }
      console.error('Validation failed:');
      for (const e of errors) console.error('- ' + e);
      process.exitCode = 2;
      return;
    }

    console.error('Unknown command:', cmd);
    process.exitCode = 1;
  } catch (err: any) {
    console.error('Error:', err && err.message ? err.message : String(err));
    process.exitCode = 3;
  }
}

main();
