export function map<T, K>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => K
) {
  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(callback(element, index, array));
  }

  return newArray;
}

Array.prototype.map;
