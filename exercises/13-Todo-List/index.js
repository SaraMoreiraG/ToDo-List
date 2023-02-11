// Your code here
var ul = document.querySelector('ul');
var newTask = document.querySelector('input');

newTask.addEventListener("change", function(event){
    let newLi = document.createElement('li');
    newLi.innerHTML = `<span><i class="fa fa-trash"></i></span> ` + event.target.value;
    ul.appendChild(newLi);
    newLi.addEventListener("click", function(event){
        ul.removeChild(newLi); 
    });
});

let span = document.querySelectorAll('span');

span.forEach(element => element.addEventListener("click", function(event){
    var listItem = this.parentNode;
    ul.removeChild(listItem); 
}));