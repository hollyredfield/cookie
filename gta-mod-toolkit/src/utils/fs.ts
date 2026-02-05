import fs from 'fs';
import path from 'path';

// I provide lightweight filesystem helpers used across the toolkit.
export async function readJson<T>(filePath: string): Promise<T> {
  const content = await fs.promises.readFile(filePath, 'utf8');
  return JSON.parse(content) as T;
}

// I resolve a path relative to the current working directory or absolute parts passed.
export function resolvePath(...parts: string[]): string {
  if (parts.length === 0) return process.cwd();
  return path.resolve(process.cwd(), ...parts);
}

// I join path segments without resolving to an absolute path.
export function joinPath(...parts: string[]): string {
  return path.join(...parts);
}
