/* ================== Model ================== */

var cats = [
	    { name: "Art Cat", imgSrc: "img/artCat.gif", clickCount: ko.observable(0) },
	    { name: "Baker Cat", imgSrc: "img/bakerCat.gif", clickCount: ko.observable(0) },
	    { name: "Coffee Cat", imgSrc: "img/coffeeCat.gif", clickCount: ko.observable(0) },
	    { name: "Gangnam Cat", imgSrc: "img/gangnamCat.gif", clickCount: ko.observable(0) },
	    { name: "Pok\'e Cat", imgSrc: "img/pokeCat.gif", clickCount: ko.observable(0) },
	    { name: "R2D Cat", imgSrc: "img/starwarsCat.gif", clickCount: ko.observable(0) },
	    { name: "Sushi Cat", imgSrc: "img/sushiCat.gif", clickCount: ko.observable(0) }
];

/* ================== ViewModel ================== */

var ViewModel = function() {
  // Allow for access to ViewModel within Fx
  var self = this;

  // Assign initial Current Cat to first cat in list
  self.currentCat = ko.observable(cats[0]);

  // Set Current Cat on-click
  self.setCat = function(clickedCat) {
    self.currentCat(clickedCat);

    console.log(self.currentCat().name + ' picked');
  };

  // Click Counter
  self.clickCounter = function() {
    var currentVal = self.currentCat().clickCount();
    if (currentVal % 100 === 0 && currentVal !== 0) {
      window.alert('That\'s ' + currentVal + ' clicks!');
      currentVal ++;
      self.currentCat().clickCount(currentVal);
      } else {
        currentVal ++;
        self.currentCat().clickCount(currentVal);
      }
    console.log(self.currentCat().name + ' clicked ' + currentVal + ' time(s)!');
  };


};
ko.applyBindings(new ViewModel());
