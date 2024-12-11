import path from 'node:path';
import fs from 'node:fs';
import yaml from 'js-yaml';

export function parseJSONData(fileData) {
  return JSON.parse(fileData);
}

export function parseYAMLData(fileData) {
  return yaml.load(fileData);
}

export function parseFile(filepath) {
  const absPath = path.resolve(filepath);
  const fileData = fs.readFileSync(absPath, 'utf-8');
  if (absPath.includes('.json')) {
    return parseJSONData(fileData);
  } if (absPath.includes('.yaml') || absPath.includes('.yml')) {
    return parseYAMLData(fileData);
  }
  return null;
}
