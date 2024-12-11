import { stylish } from './stylish.js';
import { plain } from './plain.js';
import { createDiff } from '../utils.js';
import json from './json.js';

const format = (data1, data2, formatter) => {
    const diff = createDiff(data1, data2);
    switch (formatter) {
      case 'plain':
        return plain(diff).trim();
      case 'json':
        return json(diff);
      default:
        return stylish(diff);
    }
  };

export default format;