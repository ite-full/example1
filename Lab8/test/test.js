// JavaScript Document test.js
// First Module with two set of test
module('Selecting', {
     setup: function() {
       this.topLis = $('#selected-plays > li.horizontal');
     }
});


test('Child Selector', function() {
     expect(1);
     equal(this.topLis.length, 3,
       'Top LIs have horizontal class');
   });
test('Attribute Selectors', function() {
     expect(2);
     ok(this.topLis.find('.mailto').length == 1, 'a.mailto');
     equal(this.topLis.find('.pdflink').length, 1, 'a.pdflink');
});


// Second Module
module('Ajax');
// To add Test Sets for this module
