// My JS code for task 3


const changeh1Tag = document.querySelector("#changeh1Tag");
const h1Element = document.querySelector("#h1Element");

// add an event to capture the order to change the text in h1

changeh1Tag.addEventListener(
    "click",
    function (event) {
        h1Element.textContent= "GoodBye World";
    }
    );
