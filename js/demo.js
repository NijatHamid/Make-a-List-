var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//var removeItem = document.getElementById('')

//form submit
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup', filterItems);
document.querySelector('#main').style.backgroundColor = '#f4f4f4';

function addItem(e){
    e.preventDefault();
    //get input 
    var newItem= document.getElementById('item').value;
    //create new element
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));
    //create delete
    var deleteBtn = document.createElement('button');
    //add class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
    itemList.appendChild(li);

}

//remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

}

//filter
function filterItems(e){
    //convert to the lower case
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display ='block';
    } else{
        item.style.display= 'none';
        }
    });
}

