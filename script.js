// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);


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
	// 	let li = document.createElement("li");
	// 	li.textContent = input.value;
	// 	ul.append(li)
		
	// 	let button = document.createElement("button");
    // 	button.textContent = "delete";
    // 	li.append(button);
	// 	li.addEventListener("click",function(){
	// 		li.classList.toggle("done");
	// 	})
    // 	button.addEventListener("click", function (event) {
    //   	let clickedButton = event.target;
    //   	clickedButton.parentNode.remove();
		
	// 	});
	// input.value = ""
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


// function addTodoButton() {
//   if (input.value.length > 0) {
//     let li = document.createElement("li");
//     li.textContent = input.value;
//     ul.append(li);

//     // Add a delete button to the new li element
//     let button = document.createElement("button");
//     button.textContent = "delete";
//     li.append(button);

//     button.addEventListener("click", function (event) {
//       let clickedButton = event.target;
//       clickedButton.parentNode.remove();
//     });

//     input.value = "";
//   }
// }

// addButton.addEventListener("click", addTodoButton);
//input.addEventListener("keypress", addTodoKeyPress);

// Add a delete button to each existing li element
// for (let i = 0; i < lis.length; i++) {
//   let button = document.createElement("button");
//   button.textContent = "delete";
//   lis[i].append(button);
//   button.addEventListener("click", function (event) {
//     let clickedButton = event.target;
//     clickedButton.parentNode.remove();
//   });
// }