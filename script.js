// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'Ellie!';
}


function addFavoriteThings() {
  console.log('Called addFavortieThings()');
  let favortieThings = document.querySelector('#favthings');
  console.log(favortieThings);
  /*favortieThings.innerHTML=
  <li>sleeping</li>
  <li>sailing</li>
  <li>netflix</li>; */

let favethingsList = ["sleeping", "sailing", "netflix"];

for (let item of favethingsList){
  console.log('Crossing off' + item); 
  let li = document.createElement('li');
  li.innerText = item;
  favortieThings.appendChild(li);
}


/*
  const menu = document.querySelector('#favthings');


  let li = document.createElement('li');
  li.textContent = 'sailing';
  menu.appendChild(li);
  
  li = document.createElement('li');
  li.textContent = 'sleeping';
  menu.appendChild(li);

  li = document.createElement('li');
  li.textContent = 'netflix';
  menu.appendChild(li);
    
*/ 

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

function replaceImage() {
  console.log('Called replaceImage()');
  let image = document.querySelector ("#picture");
  console.log(image);
  image.setAttribute("src", "Dog.jpg");

  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
    console.log('Called changeCodeStatus()');
  let codeStatus = document.getElementById("codestatus");
  let newIMG = document.createElement('img');
  newIMG.setAttribute("src","Friends.gif");
   codeStatus.appendChild(newIMG);

  /*codeStatus.innerHTML = '<img src = "Friends.gif"'*/
 

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicke
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.
  
  //var nameValue = document.getElementById("fname").value;
  
  console.log(event.target);
  const formData = new FormData(event.target);
  console.log(formData);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);

  document.getElementById("firstname").innerHTML = formProps.fname;
  document.getElementById("lastname").innerHTML = formProps.lname;
  document.getElementById("chosencar").innerHTML = formProps.cars;
  document.getElementById("icecreamstatus").innerHTML = formProps.icecream;  
  console.log('Form submitted');

    
    }
  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values
});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
  let consoleLogButton = document.querySelector('#________');

// Log something when that button is clicked
  consoleLogButton.addEventListener('click', function() {
  console.log('Change this text if you want!');
  });

  let makeBlueButton = document.querySelector('#________');
  makeBlueButton.addEventListener('click', function() {
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
  });

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
  document.addeventListener('keydown', function() {
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
  });

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

// Your code goes here

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */
  let secondsDiv = document.querySelector("#seconds");
  let counter =0;
  let timerId = setInterval(() => {
    counter++;
    secondsDiv.innerHTML=counter;
   }, 1000);

  let displayDiv = document.querySelector("#delayedDisplay")
  
  setTimeout(() => {  
    displayDiv.innerHTML = "FIVE SECONDS HAS PASSED"; 
    clearInterval(timerId);
  } , 5,000)


// Your code goes here

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here
