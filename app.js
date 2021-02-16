//delgetstei ajillah controller
var uiController = (function () {})();
//sanhuutei ajillah controller
var financeController = (function () {})();
//programmiin holbogch controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1. Oruulah ogodloliig delgetsees olj avna.
    console.log("delgetsees ogodoloo avah heseg");
    //2. olj avsan ogodluudee sanhuugiin controllert damjuulj tend hadgalna
    //3. Olj avsan ogodluudee web deeree tohiroh hesegt ni gargana
    //4. tosviig tootsoolno.
    //5.Etsesiin uldegdel tootsoog delgetsend gargana
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
    } else console.log("oor tovch darsan baina: " + event.keyCode);
  });
})(uiController, financeController);
