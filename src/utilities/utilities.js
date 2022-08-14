import weapons from "../data/atomic/weapons/index";

// Function to update the localStorage data for new weapons in the game
export const updateLocalData = (data) => {
  let updatedDate = { ...data[0] };

  Object.keys(weapons).forEach((weaponType) => {
    if (weapons[weaponType].length !== updatedDate[weaponType].length) {
      let weaponGroup = weapons[weaponType];

      for (const weapon of weaponGroup) {
        if (!updatedDate[weaponType].find((o) => o.name === weapon.name)) {
          updatedDate[weaponType].push(weapon);
        }
      }
    }
  });
  localStorage.setItem("Atomic", JSON.stringify(updatedDate));
  window.location.reload();
};

// Function to reset the localStorage data back to its original state
export const resetLocalData = () => {
  localStorage.removeItem("Atomic");
  localStorage.setItem("Atomic", JSON.stringify(weapons));
  window.location.reload();
};
