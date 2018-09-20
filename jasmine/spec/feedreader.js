// iife function
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* makes sure that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url defined', function() {
           for(let feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function() {
           for(let name of allFeeds) {
             expect(name.name).toBeDefined();
             expect(name.name.length).not.toBe(0);
           }
         })
    });


    /* A new test suite named "The menu" */

    describe('The menu', function() {
      const body = document.querySelector('body');
      const menu = document.querySelector('.menu-icon-link');

        /*
         * Ensures the menu element is hidden by default.
         */
         it('menu hidden', function() {
           expect(body.classList.contains('menu-hidden')).toBe(true);
         });

         /* Ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('menu toggles', function() {
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
          });
        });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, done);
      });



        /* Ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry
         * element within the .feed container.
         */
         it('has <= 1 feed when called', function() {

           expect($('.feed .entry').length).toBeGreaterThan(0);
         })

        });

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      let feedOne,
          feedTwo;

      beforeEach(function(done) {
        loadFeed(0, function() {
          feedOne = document.querySelector('.feed').innerHTML;
          loadFeed(1, function() {
            feedTwo = document.querySelector('.feed').innerHTML;
            done();
          });
        });
      });

      it('content changes when new feed loads', function() {
        expect(feedOne).toBeDefined();
        expect(feedTwo).toBeDefined();
        expect(feedOne).not.toBe(feedTwo);
      });
    });

}());
