/* eslint-disable no-restricted-syntax */
const URL = 'https://demo1030918.mockable.io/';

function convertToArray(obj) {
  const arr = [];

  // eslint-disable-next-line guard-for-in
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
