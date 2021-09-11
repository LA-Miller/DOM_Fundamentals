//  ! getElementById()
const header = document.getElementById('header');
console.log(header);

header.style.color = "green";
header.innerText = "Hello World";

//  ! getElementsByClassName()
const errorList = document.getElementsByClassName('error-list');
console.log(errorList);

errorList[1].innerText = "I changed error 2";

// Example 1 looping
for (let i = 0; i < errorList.length; i++) {
    errorList[i].style.color = "red";
}

// Example 2 looping
for (error of errorList) {
    error.style.color = "blue";
}

// Example 3 Looping forEach //! CAN NOT DO
// errorList.forEach(error) => (error.style.color = "purple"); 

// ! getElementsByTagName() (for anything betweeen <> tags)
const tags = document.getElementsByTagName("p");
console.log(tags);

tags[0].innerText = "The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!";

const listItems = document.getElementsByTagName("li");
console.log(listItems);

// listItems[0].style.fontStyle = "italic";
// listItems[1].style.fontStyle = "italic";

// for(let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontStyle = "italic";
// }

// ! querySelector() - only reports first match
// const headerQuery = document.querySelector("h1");
const headerQuery = document.querySelector("#header");
console.log(headerQuery);

// const errorListQuery = document.querySelector(".error-list");
const errorListQuery = document.querySelector("li");
console.log(errorListQuery);

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)");
console.log(errorList2);

// ! querySelectorAll()
const headerTags = document.querySelectorAll('h1');
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach(h =>{
    h.style.color="blue";
})

const listItems2 = document.querySelectorAll(".error-list");
listItems2.forEach(li =>{
    li.style.fontStyle="italic";
})






