const WeaponFactory = require("../WeaponFactory");

// @ponicode
describe("WeaponFactory.Camo.toggleCompletion", () => {
  let inst2;

  beforeEach(() => {
    inst2 = new WeaponFactory.Camo("");
  });

  test("0", () => {
    let result = inst2.toggleCompletion();
    expect(result).toMatchSnapshot();
  });
});
