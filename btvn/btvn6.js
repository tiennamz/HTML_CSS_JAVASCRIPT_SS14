const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const sort=()=>{
    let result=products.toSorted((el1,el2)=>{
        return el1.price-el2.price
    })
    return result
}
let buttonIncrease=document.getElementById("sort-asc")
let buttonDecrease=document.getElementById("sort-desc")

let eventSort=(arrayProduct)=>{
    let ul=document.getElementById("product-list")
    ul.innerHTML=""
    arrayProduct.forEach((el)=>{
        let li=document.createElement("li")
        li.innerText=`${el.name} - ${el.price.toLocaleString("vi-VN")}`
        ul.appendChild(li)
    })
    
}
buttonIncrease.addEventListener("click",()=>{
    eventSort(sort())
})

buttonDecrease.addEventListener("click",()=>{
    eventSort(sort().toReversed())
})