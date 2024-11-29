#!/usr/bin/env node
import { Command } from 'commander';
import parseFile from '../src/parsers.js';
import genDiff from '../src/diff.js';

const program = new Command();

program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(parseFile(filepath1), parseFile(filepath2)));
  });

program.parse();
