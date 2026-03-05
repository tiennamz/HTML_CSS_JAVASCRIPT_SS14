//DOM

// element: các thẻ
// cách truy xuất


console.log(document);

let item_01=document.getElementById("item_01")
console.log(item_01);
let ul=document.getElementById("list")
console.log(ul);

let listItemElement= document.getElementsByClassName("item_02")
console.log(listItemElement);

for(let i=0;i< listItemElement.length;i++){
    console.log(listItemElement[i].innerText);
}


let divElement=document.getElementsByTagName("div")

let firstElement=document.querySelector("#item_01")
console.log(firstElement);

let secondElement=document.querySelectorAll(".item_02")
console.log(secondElement);

let list = document.getElementById("list")

console.log(list.innerText);
console.log(list.innerHTML);
console.log(list.textContent);



