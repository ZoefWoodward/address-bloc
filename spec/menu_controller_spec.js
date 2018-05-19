const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {

  beforeEach(() => {
    this.reminder = new MenuController();
  });

  describe("#remindMe()", () => {


     it("should return 'Learning is a life-long pursuit' when called", () => {
       expect(this.reminder.remindMe()).toBe("Learning is a life-long pursuit");
     });
   });
 });
 