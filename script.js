// window.onload = function () {
//   var button = document.getElementById("addnewlist");
//   button.onclick = addItem;
// };

function addItem() {
  let textInput = document.getElementById("namelist"); //getting text input
  let text = textInput.value; //getting value of text input element

  //   CHANGE COLORS DOSNT WORK YET
  //   if (document.getElementById("radio2").checked) {
  //     document.getElementById("lista").style.backgroundColor = "#8bff7a";
  //   }
  //   if (document.getElementById("radio3").checked) {
  //     document.getElementById("lista").style.backgroundColor = "#7ad6ff";
  //   }
  //   if (document.getElementById("radio4").checked) {
  //     document.getElementById("lista").style.backgroundColor = "#f25858";
  //   }
  //   if (document.getElementById("radio5").checked) {
  //     document.getElementById("lista").style.backgroundColor = "#b9b9b9";
  //   }

  let right = document.getElementById("right"); //getting element <ul> to add element to
  let div = document.createElement("div"); //creating li element to add

  div.id = "lista";
  div.innerHTML = `<div class="title">
  <p>${text}</p>
  <span><button type="reset">delete</button></span>
</div>
<div class="addnew">
  <label for="listitem">Task:</label>
  <input type="text" id="listitem" />
  <input type="submit" value="Add" onclick="addTask()"/>
</div>
<div class="tasks-list">
  <ul id="taskownia">
  </ul>
</div>`;

  if (right.childElementCount == 0) {
    //using if/else statement to add items to top of list
    right.appendChild(div); // will add if count of ul children is 0 otherwise add before first item
  } else {
    right.insertBefore(div, right.firstChild);
  }
}

function addTask() {
  let textInput = document.getElementById("listitem"); //getting text input
  let text = textInput.value; //getting value of text input element

  let ul = document.getElementById("taskownia"); //getting element <ul> to add element to
  let li = document.createElement("li"); //creating li element to add
  li.innerHTML = text; //inserting text into newly created <li> element
  li.onclick = function () {
    this.parentNode.removeChild(this);
  };
  if (ul.childElementCount == 0) {
    //using if/else statement to add items to top of list
    ul.appendChild(li); // will add if count of ul children is 0 otherwise add before first item
  } else {
    ul.insertBefore(li, ul.firstChild);
  }
}
