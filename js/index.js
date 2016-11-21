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
    $tdPrice.addClass('right-align').text(price);
    $tr.append($tdPrice);
    $tbody.append($tr);
  });

  $('.place').click(() => {
    if ($tdTotal.text() === '$0.00') {
      Materialize.toast('Please add an item to your order.', 4000, 'toast');
    }
    else if ($('#name').val() === '') {
      Materialize.toast('Please add your name.', 4000, 'toast');
    }
    else if ($('#phone_number').val() === '') {
      Materialize.toast('Please add a phone number.', 4000, 'toast');
    }
    else if ($('#address').val() === '') {
      Materialize.toast('Please add an address.', 4000, 'toast');
    }
    else {
      Materialize.toast('Your order has been placed.', 4000, 'toast');
    }
  });
})();
