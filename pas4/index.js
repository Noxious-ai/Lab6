let evenCollection = document.querySelectorAll("tbody tr:nth-child(even)");
let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)");


let firstRow = document.querySelector("tbody tr:first-child");
let lastRow = document.querySelector("tbody tr:last-child");

// if (evenCollection && evenCollection.length > 0) {
//     for(let i = 0; i < evenCollection.length; i++) {
//         evenCollection[i].style.backgroundColor = "red";
//     }
// }

if (oddCollection && oddCollection.length > 0) {
    for(let i = 0; i < oddCollection.length; i++) {
        oddCollection[i].style.backgroundColor = "pink";
    }   
}

firstRow.style.backgroundColor = "blue";
lastRow.style.backgroundColor = "green";