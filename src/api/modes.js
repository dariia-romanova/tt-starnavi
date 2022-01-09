/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const URL = 'https://demo1030918.mockable.io/';

function convertToArray(obj) {
  const arr = [];

  for (const key in obj) {
    arr.push({
      mode: key,
      fieldSize: obj[key].field,
    });
  }

  return arr;
}

const getModes = () => (
  fetch(URL)
    .then((result) => result.json())
    .then((data) => convertToArray(data))
);

export default getModes;
