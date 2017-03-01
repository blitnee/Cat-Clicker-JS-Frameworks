/* ================== Model ================== */

var cats = ko.observableArray([
	    { name: "Art Cat", imgSrc: "img/artCat.gif", clickCount: 0 },
	    { name: "Baker Cat", imgSrc: "img/bakerCat.gif", clickCount: 0 },
	    { name: "Coffee Cat", imgSrc: "img/coffeeCat.gif", clickCount: 0 },
	    { name: "Gangnam Cat", imgSrc: "img/gangnamCat.gif", clickCount: 0 },
	    { name: "Pok\'e Cat", imgSrc: "img/pokeCat.gif", clickCount: 0 },
	    { name: "R2D Cat", imgSrc: "img/starwarsCat.gif", clickCount: 0 },
	    { name: "Sushi Cat", imgSrc: "img/sushiCat.gif", clickCount: 0 }
]);

/* ================== ViewModel ================== */

var ViewModel = function() {

  // Allow for access to ViewModel within Fx
  var self = this;

  // Assign initial Current Cat
  this.currentCat = ko.observable(cats()[0]);

  // Set Current Cat on-click
  this.setCat = function(clickedCat) {
    console.log('cat picked');
    self.currentCat(clickedCat);
  };

  // Click Counter
  this.clickCounter = function() {

    if (self.currentCat().clickCount % 100 === 0 && self.currentCat().clickCount !== 0) {
      alert('That\'s ' + (self.currentCat().clickCount) + ' clicks!');

      self.currentCat().clickCount++;
      } else {
      self.currentCat().clickCount++;
      }



    console.log('cat clicked ' + self.currentCat().clickCount + ' time(s)!');
  };

};
ko.applyBindings(new ViewModel);