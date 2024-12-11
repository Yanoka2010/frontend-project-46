import { stylish } from './stylish.js';
import { createDiff } from '../utils.js';

const format = (data1, data2) => {
  const diff = createDiff(data1, data2);
  return stylish(diff);
};

export default format;