

let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let input = document.querySelector("input");
let addButton = document.querySelector("#enter");
function createLi(event){
	let li = document.createElement("li");
		li.textContent = input.value;
		ul.append(li)
		
		let button = document.createElement("button");
    	button.textContent = "delete";
    	li.append(button);
		li.addEventListener("click",function(){
			li.classList.toggle("done");
		})
    	button.addEventListener("click", function (event) {
      	let clickedButton = event.target;
      	clickedButton.parentNode.remove();
		
		});
	input.value = ""
}
function addTodoButton() {
	if(input.value.length > 0){
		createLi();
	}
}
function addTodoKeyPress(e) {
	if(input.value.length > 0 && e.key === "Enter"){
	
	createLi(e);	
}
}
addButton.addEventListener("click", addTodoButton);
input.addEventListener("keypress", addTodoKeyPress);



 for(let i = 0; i < lis.length; i++) {
	
	let button = document.createElement("button");
	button.textContent = "delete";
	lis[i].addEventListener("click",function(){
		lis[i].classList.toggle("done")
	})
 	lis[i].append(button);
 	button.addEventListener("click", function(event){
		let clickedButton = event.target;
		clickedButton.parentNode.remove();
	})
 }


