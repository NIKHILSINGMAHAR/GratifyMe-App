//## create three variables for all three class in(   "   "   )
// several actions are being performed to interact with the HTML document using the Document Object Model (DOM):
const notesContainer = document.querySelector(".notes-container");
// This line selects the HTML element with the class "notes-container" and stores it in the variable notesContainer.
const createBtn = document.querySelector(".btn");
// this is  used when you want to add an event listener to the button or perform some action when the button is clicked.
let notes = document.querySelectorAll(".input-box");
//if we create many <p> </p > in html with class 'input box' ,queryselectorall collect all the <p> tag content in notes var. 
// This line selects all HTML elements with the class "input-box" and stores them in the variable notes.
//  querySelectorAll returns a NodeList, which is a collection of elements that match the specified CSS selector
// querySelectorAll:It is used to select multiple elements from the DOM that match a specified CSS selector.



//## to see the save data from the browser on page:
function showNotes() {
    notesContainer.innerHTML =localStorage.getItem("notes");
    //  This property allows you to set or get the HTML content (including child elements and text) of an element.
    // the content that was previously saved in the localStorage under the key "notes" is 
    // now set as the HTML content of the notesContainer element.
}

showNotes();


//## to save the data on the browser:
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
    // 1.The localStorage object is a built-in feature of web browsers that allows web developers
    //  to store key-value pairs locally within the user's web browser
    // 2..setItem("notes", notesContainer.innerHTML): This method is used to store data in the localStorage.
        //    notes": This is the key used to identify the data being stored
        // notesContainer.innerHTML: This is the value that will be stored in localStorage. In this case,
        //  it is the entire HTML content (including child elements and text) of the notesContainer element converted to a string.
}

// ## working after clicking the notes button: 

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    // This line creates a new <p> element and stores it in the variable inputBox.
    let img = document.createElement("img");
    // his line creates a new <img> element and stores it in the variable img.
    inputBox.className = "input-box";
    // This is equivalent to adding the CSS class "input-box" to the <p> element.
    inputBox.setAttribute("contenteditable", "true");
    // This makes the <p> element editable, allowing users to type and edit text inside it.
    img.src = "delete.png";
    // This specifies the image file that will be displayed when the <img> element is rendered on the page.
    notesContainer.appendChild(inputBox).appendChild(img);
    // 1.it means upper inputbox display inside the notesconatiner box,,appendChild(img) means that upper di gyi image delete wali 
    // show hogi inside the p tag ya input box.  
    // 2.By chaining these two appendChild calls together, both the inputBox element and the img 
    // element are successfully added to the DOM inside the notesContainer element.
    //  3.any content or changes made within the inputBox element will be reflected within the notesContainer on the webpage.
})

// ## for  working deleting:
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG")
    //  it checks if the clicked element is an <img> element.
    {
        e.target.parentElement.remove();
    //  1. If the clicked element is an < img > element, this line removes its parent element from the DOM.
    //   In this case, the parent element of the < img > is the < p > element with the class "input-box".

    // 2.So, when a user clicks on an image inside the notesContainer, the corresponding <p>
    //  element with the class "input-box" (which contains the image) will be removed from the DOM.
            updateStorage();
    }


    // for updating storage:

    else if(e.target.tagName == "P")
    {
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup=function()
            {
                updateStorage();
            }
            
        });


    }

})

// //  if we want new in note
document.addEventListener("keydown",event=>
{
    if(event.key==="Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
