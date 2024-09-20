// My JS code for task 3


const changeh1Tag = document.querySelector("#changeh1Tag");
const h1Element = document.querySelector("#h1Element");

changeh1Tag.addEventListener(
    "click",
    function (event) {
        h1Element.textContent= "GoodBye World";
    }
    );
