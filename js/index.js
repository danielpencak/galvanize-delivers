(function() {
  'use strict';
  const $tbody = $('tbody');
  const $tdSubtotal = $('#subtotal');
  const $tdTax = $('#tax');
  const $tdTotal = $('#total');

  (function() {
    $('.button-collapse').sideNav();
  })();

  const totalCalculation = function(currentSub, itemPrice) {
    const currentSubtotalNumb = parseFloat((currentSub).slice(1));
    const newSubtotal = currentSubtotalNumb + itemPrice;
    const newTax = newSubtotal * 0.093;
    const newTotal = newTax + newSubtotal;

    $tdSubtotal.text(`$${newSubtotal.toFixed(2)}`);
    $tdTax.text(`$${newTax.toFixed(2)}`);
    $tdTotal.text(`$${newTotal.toFixed(2)}`);
  };

  $('#menu').on('click', 'a', (event) => {
    // DOM Element Creation and Traversal
    const $tr = $('<tr>');
    const $tdFood = $('<td>');
    const $tdPrice = $('<td>');
    const $cardAction = $(event.target).parent('.card-action');
    const $cardContent = $cardAction.prev('.card-content');
    const food = $cardContent.children('.food').text();
    const price = $cardContent.children('.price').text();

    // Subtotal, Tax, and Total Calculations
    const currentSubtotal = $tdSubtotal.text();
    const newPriceNumb = parseFloat((price).slice(1));

    totalCalculation(currentSubtotal, newPriceNumb);

    // Appending Table
    $tr.append($tdFood.text(food));
    $tr.append($tdPrice.text(price));
    $tdPrice.addClass('right-align');
    $tr.append($tdPrice);
    $tbody.append($tr);
  });
})();
