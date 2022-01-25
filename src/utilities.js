export function checkEveryStatus(arr, type, status) {
  return arr.every(function (item) {
    return item[type] === status;
  });
}
