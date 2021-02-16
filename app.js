//delgetstei ajillah controller //ehnii controller
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();
//sanhuutei ajillah controller //2dahi controller
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Exprense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();
//programmiin holbogch controller //3dahi controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1. Oruulah ogodloliig delgetsees olj avna.
    console.log(uiController.getInput());
    //2. olj avsan ogodluudee sanhuugiin controllert damjuulj tend hadgalna
    //3. Olj avsan ogodluudee web deeree tohiroh hesegt ni gargana
    //4. tosviig tootsoolno.
    //5.Etsesiin uldegdel tootsoog delgetsend gargana
  };
  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();
    document.querySelector(".add__btn").addEventListener("click", function () {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Application started......");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
