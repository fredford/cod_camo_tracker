export function checkStatus(type, list) {
  return list.every(function (item) {
    return item[type] === true;
  });
}

function camoUpdater(weaponList, game) {
  var newData = JSON.parse(localStorage.getItem(game));

  weaponList.forEach(function (weapon) {
    weapon.camos.forEach(function (camo) {
      if (camo.current >= camo.total) {
      }
    });
  });
}

export function updateStatus(status, type, list, game) {
  var newData = JSON.parse(localStorage.getItem(game));

  list.forEach(function (item) {
    list[type] = status;
  });
}
