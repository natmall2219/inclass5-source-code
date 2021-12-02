// ADD NEW ITEM TO END OF LIST
function appendEndOfList(){
    var newFood = document.createElement('li');
    var textnode = document.createTextNode("cream");
    node.appendChild(textnode);
    document.getElementById("header").appendChild(node);


}

// ADD NEW ITEM START OF LIST
function appendStartOfList() {
    var newItem = document.createElement('li');
    var textnode = document.createTextNode("kale");
    newItem.appendChild(textnode);
  
    var list = document.getElementById("header");
    list.insertBefore(newItem, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
function addClassCool(){
var list = document.querySelector('li');
var i;
for (i = 0; i < list.length; i++) {
    list[i].className = 'cool';
}
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
function addNumberOfItems(){
var itemList = document.querySelectorAll('li');
var header = document.querySelector('h2');
var newListHeader = header.firstChild.nodeValue + '<span' + itemList.length + '<span>';
}