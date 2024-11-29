import _ from 'lodash';

export default function genDiff(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = new Set([...keys1, ...keys2]);
  const sortedKeys = _.sortBy([...keys]);
  const result = sortedKeys.map((key) => {
    if (keys1.includes(key) && (keys2.includes(key))) {
      if (obj1[key] === obj2[key]) {
        return `    ${key}: ${obj1[key]}`;
      }
      return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
    }
    if (keys1.includes(key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    if (keys2.includes(key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    return '';
  });
  return `{\n${result.join('\n')}\n}`;
}
