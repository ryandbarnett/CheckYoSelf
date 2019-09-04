// var addTaskButton= document.querySelector('.add-task-button');
// addTaskButton.addEventListener("click", addTask;
//
//
// function addTask() {
//   var itemText= document.querySelector('.item-input').value;
//   var tempItems= document.querySelector('.temp-items');
//   tempItems.insertAdjacentHTML('afterbegin', '<li> itemText </li>');
// }



var inputForm = document.querySelector('.user-input-form');

inputForm.addEventListener('click', function(event) {
  var itemText= document.querySelector('#item-input').value;
  var tempItems= document.querySelector('.temp-items');

  if (event.target.id ==='add-task-button') {
    console.log('if');
    tempItems.insertAdjacentHTML('afterbegin', '<li> itemText </li>');
    
  }
})













// for (var len = document.querySelector('temp-items')(length - 1; len >=0; --len) {
//     wrapper.insertBefore(myClass[len], wrapper.firstChild);
// }
