/* ================== Model ================== */

var model = {
   currentCat: null,
   cats: [
      {
         name : 'Art Cat',
         imgSrc : 'img/artCat.gif',
         clickCount : 0
      },
      {
         name : 'Baker Cat',
         imgSrc : 'img/bakerCat.gif',
         clickCount : 0
      },
      {
         name : 'Coffee Cat',
         imgSrc : 'img/coffeeCat.gif',
         clickCount : 0
      },
      {
         name : 'Gangnam Cat',
         imgSrc : 'img/gangnamCat.gif',
         clickCount : 0
      },
      {
         name : 'Pok\'e Cat',
         imgSrc : 'img/pokeCat.gif',
         clickCount : 0
      },
      {
         name : 'R2D Cat',
         imgSrc : 'img/starwarsCat.gif',
         clickCount : 0
      },
      {
         name : 'Sushi Cat',
         imgSrc : 'img/sushiCat.gif',
         clickCount : 0
      }
   ]

};

/* ================== Controller ================== */

var controller = {

   init: function() {
      // Pull info from first cat at app start
      model.currentCat = model.cats[0];

      // Initialize views at app start
      catListView.init();
      catClickView.init();
   },

   // Called by catClick View
   getCurrentCat: function() {
      return model.currentCat;
   },

   // Called by catList View
   getCats: function() {
      return model.cats;
   },

   // Set the current cat to cat passed in, called by catList View
   setCurrentCat: function(cat) {
      model.currentCat = cat;
   },

   // Increments click counter for current cat
   clickCounter: function() {
      //make a 'var count' = model.currentCat.clickCount?
      // Click loop
      if (model.currentCat.clickCount % 100 === 0 && model.currentCat.clickCount !== 0) {
         catClickView.render();
         alert('That\'s ' + (model.currentCat.clickCount) + ' clicks!');
         // Add 1 to click count, called by catClick view
         model.currentCat.clickCount++;
      } else {
               model.currentCat.clickCount++;
               catClickView.render();
      }
   }
};

/* ================== Cat Click View ================== */

var catClickView = {

   init: function() {
      // Only called once
      // Store pointers to DOM elements
      this.catElem = document.getElementById('cat');
      this.catNameElem = document.getElementById('cat__name');
      this.catImageElem = document.getElementById('cat__img');
      this.countElem = document.getElementById('cat__count');

      // On-Click invrement the current cat's counter
      this.catImageElem.addEventListener('click', function() {
         controller.clickCounter();
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
   },

   render: function() {

      // Get cats array
      var cats = controller.getCats();

      // Cat Loop
      for (var i = 0; i < cats.length; i++) {
         // Cat currently looping over
         var cat = cats[i];

         // Make new cat list item and set text
         var elem = document.createElement('li');
         elem.textContent = ('*' + cat.name);

         /*
          *
          * Closure Trick!
          * When adding an event listener inside of a for-loop,
          * you must create an outer function, pass in the object,
          * then return the function that does the stuff you want
          * with the object
          *
          */
         elem.addEventListener('click', (function (catCopy) {
            return function() {
               controller.setCurrentCat(catCopy);
               catClickView.render();
            };
         })(cat));

         // Adds the element to the list of cats
         this.catListElem.appendChild(elem);
      }

   }

};

// initialize document
controller.init();

