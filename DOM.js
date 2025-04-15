/** Document object model(DOM) is an API(Application Programming interface) for manipulating HTML documents
 * The DOM provides functions that allow you to add,remove and modify parts of the document effectively.
 * ******The DOM represents an HTML document as a tree of nodes.
 * Any node in the document has relationships to other nodes in the DOM tree & it is same as described in the traditional family tree.
 *
 */ //console.dir(id/classname); To know the attributes of that element

/*********** Selecting elements in DOM
 * 1.getElementById("id"): returns an element object that represents an HTML element.
 * It will select the specified Id, if the id not exist it will return 'null', if more elements with same id it will return the first match element itself.
 * 
 * 2.getElementsByName("anyName"): will return the matching elements with given name.
 * If the given name not exist it will return an empty array. Eg:container, box etc., 
 * 
 * 3.getElementsByTagName("h1"): It will returns the elements of the given tag as an HTML collection 0r empty 
 * collection(if not found).
 * 
 * 4.getElementsByClassName("className"): method returns an array like of objects of the child elements
 * with a specified class name or empty collection(if not found).
 * Example: Accessing the child elemts by parent 
 * let cont = document.getElementById("container");
   let className = cont.getElementsByClassName("marker"); //Accessing using parent id reference
   
 * 5.querySelector(): method allows you to select the first element that matches one or more CSS selectors. 

   1. Example: To get the elements of parent node
   let parentElements = document.querySelector(".marker"); //Child class name
   parentElements.parentNode; //Get the parent elements
 
   2. Example: To get the elements of child node
   let childElements = document.querySelector(".container"); //parent class name
   childElements.childNodes;  //Get the child elements
   childElements.firstElementChild; //Get the first child element
   childElements.lastElementChild;  //Get the last child Element

   3. Example: To get the sibling elements
   let sibling = document.querySelector(".second"); //classname by we can get their siblings
   sibling.previousElementSibling; //Above sibling element
   sibling.nextElementSibling; //Below or next sibling element

   6. querySelectorAll(".container"): Which select all the elements with given name. 
 */

/*******************  Manipulating elements
 * 1.createElement(): method accepts an HTML tag name & returns a new node with element type.
 * 
 * 1. Example: To create an element with tag name
 *    let div = document.createElement("div");
      div.innerHTML = "<p>Welcome to India</p>"; //Adding the p tag as child in div
      div.id/class = "container";
      document.body.appendChild(div); //Presenting the element in screen

* 2.appendChild(): method is used to add a node to list of child nodes of a specific parent node. 

1. Example: Adding an list element to the existing menu

   let menu = document.getElementById("menu");
   let list = document.createElement("li");
   list.innerHTML = "Contact";
   menu.appendChild(list); //Adding an list element to the menu
   menu.cloneNode(true); //Copy of menu node
   menu.className / menu.className = "list-item"; //To give a classname to a particular element
   menu.classList.replace("container", "box") //Replacing the class name container with box

* 3.textContent: method is used to add the text or remove the existing text & read "hidden text". 
    innerText: is used to read the visible text only. 

  4.innerHTML: is used to add the text as a tag element to the parent node.
    Note: innerHTML is not recommended to use mostly for security purposes. So go with "innerText".
  
  5.parentNode.append(node1,node2,nodeN); //Insert elements to the last
    parentNode.prepend(node4); //Insert elements to the beginning

  6.parentNode.after(node1)
  7.parentclassname.insertAdjacentHTML("afterbegin/beforeend","text with tagname")
  8.parentclassname.removeChild(menu.lastElementChild/firstElementChild)
  
 */

/**************Manipulating Attributes methods
 * let inputBox = document.getElementById("username");
 * inputBox.attributes; // Give the attributes in that element
 *
 * 1. inputBox.getAttribute("type/placeholder"); //Give the value of the attribute
 * 2. inputBox.setAttribute("class","container"); //Setting the attribute class = "container"
 *
 * 3. inputBox.hasAttribute("id"); //Returns true if "id" attribute is present
 * 4. inputBox.removeAttribute("placeholder"); //Remove the placeholder attribute
 *
 * 5. inputBox.style.color = "red";
 *Note: Style property is used to set the inline styling to the element.
 * 6. inputBox.style.cssText += "width:200px;padding:10px";
 * 7. window.getComputedStyle(input); //To get all the properties of input
 *
 * 8. inputBox.classList.add('alternate'); //adding extra classname as alternate to the element
 * 9. inputBox.classList.remove('alternate'); //removing the alternate classname
 * 10. inputBox.classList.contains('alternate'); //It is checking if the alternate class is present or not: false
 * 11. inputBox.classList.toggle('alternate'); //To toggle between two classes
 */

/***********Navigation On page
 * 1. h1.parentNode; //To know the h1 parent  Note: parentNode is recommended to use
 *    h1.parentElement; //To know the h1 parent    ------------> Not recommended most to use
 * 2. div.childNodes; //To know the children of div   Note: Recommended to use childNodes
 *    div.children; //To know the children of div
 * 3. ul.childrenElementCount; //To know the count of li elements of ul
 *    ul.children[1].previousElementSibling; //To know the before element
 *    ul.children[1].nextElementSibling; // To know the next element
 *
 *    ul.children[1].previousSibling; //Recommended
 *    ul.children[1].nextSiblingl //Recommended
 */

/*******************  Event Handling
 * DOM Events are signals that something has occurred. (user input/actions)
 *
 ***Mouse/Pointer Events:
 *1. onclick: When an element is clicked. 
  2. onmouseenter: When mouse enters an element. 
  3. mouseover: When we over the button, it will fire
 /** 
  * Event Listeners:
 * addEventListener(): method add an event
 * Mouse: click event, dblclick event etc.,
 * btn.addEventListener('click', function(){ console.log(event.type)})
 * 
 * *****Keyboard Events: keyup, keydown, keypress
 * 
 */
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click Me!";
document.querySelector("body").append(input);
document.querySelector("body").append(btn);

input.placeholder = "username";
btn.setAttribute("id", "btn");

btn.style.backgroundColor = "blue";
btn.style.color = "white";

let h1 = document.createElement("h1");
h1.innerText = "DOM practice";
document.querySelector("body").append(h1);
h1.classList.add("bgm");

let para1 = document.createElement("p");
para1.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para1);

//Keyboard events ------> keyup, keydown, keypress etc.,
// let input2 = document.querySelector("input");
input2.addEventListener("keydown", function (event) {
  console.log(event); //KeyBoard event
  console.log(event.key); //a
  console.log(event.code); //keyA
  console.log("Key Pressed");
});

//form events  ------> submit, change, input
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); //By using preventDefault() it won't be redirected to that submitted page, it will stop the page
  let user = document.querySelector("#user");
  console.log(user.value);
  console.log("form submitted");
});
