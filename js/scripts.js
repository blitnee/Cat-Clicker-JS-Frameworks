/* ================== Model ================== */

var model = {

   currentCat: null,
   cats: [
      {
         name : 'cat1',
         imgSrc : 'img/cat.png',
         clickCount : 0
      },
      {
         name : 'cat2',
         imgSrc : 'img/cat.png',
         clickCount : 0
      },
      {
         name : 'cat3',
         imgSrc : 'img/cat.png',
         clickCount : 0
      },
      {
         name : 'cat4',
         imgSrc : 'img/cat.png',
         clickCount : 0
      },
      {
         name : 'cat5',
         imgSrc : 'img/cat.png',
         clickCount : 0
      }
   ]

};


/* ================== Controller ================== */

var controller = {

   init: function() {
      // Initialize first cat
      console.log('cat loop reached');
      model.currentCat = model.cats[0];

      // Render Views
      catListView.init();
      catClickView.init();
   },

   getCurrentCat: function() {
      return model.currentCat;
   },

   getCats: function() {
      return model.cats;
   },

   // set the current cat to ...?
   setCurrentCat: function(cat) {
      model.currentCat = cat;
   },

   // increments click counter for current cat
   incrementCounter: function() {
      model.currentCat.clickCount++;
      catClickView.render();
   }
};

/* ================== Cat Click View ================== */
//working
var catClickView = {

   init: function() {
      // Store pointers to DOM elements
      this.catElem = document.getElementById('cat');
      this.catNameElem = document.getElementById('cat__name');
      this.catImageElem = document.getElementById('cat__img');
      this.countElem = document.getElementById('cat__count');

      // On-Click invrement the current cat's counter
      this.catImageElem.addEventListener('click', function() {
         controller.incrementCounter();
      });

      // Render view, Update DOM elements
      this.render();
   },

   render: function() {
      // Update DOM elements with values of current cat
      var currentCat = controller.getCurrentCat();
      this.countElem.textContent = currentCat.clickCount;
      this.catNameElem.textContent = currentCat.name;
      this.catImageElem.src = currentCat.imgSrc;
   }
};


/* ================== Cat List View ================== */

var catListView = {

   init: function() {
      // Store DOM element
      this.catListElem = document.getElementById('cat__list');

      // Render view, update DOM
      this.render();
      console.log('catlistrendered');
   },

   render: function() {
      var cat, elem, i;

      // Get cats array
      var cats = controller.getCats();

      // Clear cat list
      this.catListElem.innerHTML = '';

      // Cat Loop
      for (i = 0; i < cats.length; i++) {
         // Cat currently looping over
         cat = cats[i];

         // make new cat list item and set text
         elem = document.createElement('li');
         elem.textContent = cat.name;

         //
         elem.addEventListener('click', (function (catCopy) {
            return function() {
               controller.setCurrentCat(catCopy);
               catClickView.render();
            };
         })(cat));

         // finally, add the element to the list
         this.catListElem.appendChild(elem);
      }
   }
};

// initialize document
controller.init();

