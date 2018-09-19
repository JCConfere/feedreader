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
        loadFeed(0, function() {
          done();
        })
      });


        /* Ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry
         * element within the .feed container.
         */
         it('has <= 1 feed when called', function() {
           let feed = document.querySelector('.feed')
           expect(feed.children.length > 0).has('.entry' > 0).toBe(true);
         })

        });

    /* A new test suite named "New Feed Selection" */
      describe('New Feed Selection', function() {
        let feed = document.querySelector('.feed').innerHTML;
        beforeEach(function(done) {
          loadFeed(1, function() {
            loadFeed(2, function() {
              done();
            });
          });
        });
        afterEach(function() {
          loadFeed(0);
        });

        /* Ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */

         it('changes content', function(done) {
           expect(feed).toBeDefined
           let feedTwo = document.querySelector('.feed');
           expect(feedTwo).toBeDefined();
           expect(feed).not.toEqual(feedTwo);
         });


      });

}());
