import path from 'path';
import { readJson } from '../utils/fs';

// I define the shape of a mod's metadata and helpers to load/validate it.
export interface ModInfo {
  name: string;
  version?: string;
  description?: string;
  author?: string;
  [key: string]: unknown;
}

// I load `modinfo.json` from the given directory and parse it.
export async function loadModInfo(dir: string): Promise<ModInfo> {
  const filePath = path.join(dir, 'modinfo.json');
  return await readJson<ModInfo>(filePath);
}

// I perform basic validation of the loaded mod info and return error messages.
export function validateModInfo(mi: ModInfo): string[] {
  const errors: string[] = [];
  if (!mi || typeof mi !== 'object') {
    errors.push('modinfo must be a JSON object');
    return errors;
  }
  if (!mi.name || typeof mi.name !== 'string') {
    errors.push('`name` is required and must be a string');
  }
  if (mi.version && typeof mi.version !== 'string') {
    errors.push('`version` must be a string when present');
  }
  return errors;
}
