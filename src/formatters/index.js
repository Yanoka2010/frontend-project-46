import { stylish } from './stylish.js';
import { plain } from './plain.js';
import { createDiff } from '../utils.js';

const format = (data1, data2, formatter) => {
    const diff = createDiff(data1, data2);
    switch (formatter) {
      case 'plain':
        return plain(diff).trim();
      default:
        return stylish(diff);
    }
  };

export default format;