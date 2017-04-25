//shoppingCard
var shoppingCard = [];

var string = document.getElementById('string').innerHTML;
var size = document.getElementById('size').value;
var price;

var addBtn = document.getElementById('addItem');

var addItem = function() {
    var newItem = {
        name: string,
        size: size
    }

    shoppingCard.push(newItem);

    console.log(shoppingCard);
}

addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addItem();
});



