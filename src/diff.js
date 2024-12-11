import { parseFile } from './parsers.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatter) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  if (data1 === null || data2 === null) {
    console.log('wrong extension of files or files are not exist');
    return false;
  }
  return format(data1, data2, formatter);
};

export default genDiff;
