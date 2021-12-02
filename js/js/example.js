//Natalie Mallon
//GUI In-class5
//11/4/21
// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];
var lastItem = document.createElement('li');
var creamNodeText = document.createTextNode('cream');
lastItem.appendChild(creamNodeText);
list.appendChild(lastItem);
//creates the sixth element in the list and adds it to the end of the list as a text node. 

// ADD NEW ITEM START OF LIST
var list = document.getElementsByTagName('ul')[0];
var FirstItem = document.createElement('li');
var textFirst = document.createTextNode('kale');
FirstItem.appendChild(textFirst);
list.insertBefore(FirstItem, list.firstChild);
//inserts kale as the first item on the list 

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var FinalGroceryList = document.querySelectorAll('li');
for(var index = 0; index < FinalGroceryList.length; index++)
{
    FinalGroceryList[index].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var FinalGroceryList = document.querySelectorAll('li');
var listHeader = document.querySelector('h2');
var newHeader = listHeader.firstChild.nodeValue + '<span>' + FinalGroceryList.length + '</span>';
header.innerHTML = newHeader; 
//selects and manipulates the h2 from the css file to place the count of the list items as a header feature,
//designated to overwrite the old header. 