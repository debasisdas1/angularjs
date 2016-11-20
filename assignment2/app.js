(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
AlreadyBoughtController.$inject = ['ShoppingListService'];

function ToBuyController(ShoppingListService) {
  var showList = this;
  showList.items = ShoppingListService.getShoppingItems();

  showList.removeAndBuyItem = function(itemIdex){
    var itemName = showList.items[itemIdex]["name"];
    var itemQuantity= showList.items[itemIdex]["quantity"];
    ShoppingListService.addItemToBought(itemName,itemQuantity);

    ShoppingListService.removeShoppingItem(itemIdex);

  };
}

function AlreadyBoughtController(ShoppingListService) {
  var showList = this;
  showList.items = ShoppingListService.getBoughtItems();
}



function ShoppingListService() {
  var service = this;

  var shoppingItems = [
    {
      name: "Milk",
      quantity: "2 bottles"
    },
    {
      name: "Donuts",
      quantity: "20 packs"
    },
    {
      name: "Cookies",
      quantity: "3 bags"
    },
    {
      name: "Chocolate",
      quantity: "5 packs"
    },
    {
      name: "Coke",
      quantity: "5 bottles"
    }
  ];

  var shoppedItems = [];

  service.getShoppingItems = function () {
    return shoppingItems;
  };

  service.removeShoppingItem = function (itemIdex) {
    shoppingItems.splice(itemIdex, 1);
  };

  service.getBoughtItems = function () {
    return shoppedItems;
  };

 service.addItemToBought = function(itemName,quantity){
   var item = {
        name: itemName,
        quantity: quantity
        };
        shoppedItems.push(item);
 };




}
})();
