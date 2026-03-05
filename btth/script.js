const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000 },
    { id: 6, name: "Dưa Hấu", price: 60000 }
];
// Chức năng 2: Thêm vào giỏ hàng (Event Handling)
// - Bắt sự kiện `click` vào các nút "Mua ngay".
// - Khi click, lấy thông tin sản phẩm đó.
// - Tạo một thẻ `<li>` mới chứa tên sản phẩm và giá tiền.
// - Thêm thẻ `<li>` đó vào trong `#cart-list`.
// - Lưu ý: Xóa dòng "Giỏ hàng đang trống" nếu có.
    const totalPrice=()=>{
        let numberCart=document.getElementsByClassName("cart-item-price").length
        document.getElementById("total-price").textContent = `Số sản phẩm: ${numberCart}`
        let total=0
        let h3=document.getElementById("total-price")
        for(let i=0;i<numberCart;i++){
            total+= +document.getElementsByClassName("cart-item-price")[i].innerText
            h3.innerText=`${(total*1000).toLocaleString("vi-VN")} VND`
        }
    }

    const addItemIntoCart=(idBuy)=>{
        let cartList=document.getElementById("cart-list")
        let liCart=document.createElement("li")
        let indexAddCart=products.findIndex((el)=>{
            return el.id==idBuy
        })
        // span tên
        let spanElement=document.createElement("span")
        spanElement.innerHTML=`<span class="cart-item-name">${products[indexAddCart].name}</span>`
        liCart.appendChild(spanElement)
        // div bọc giá và nút
        let divElement=document.createElement("div")
        // span giá
        let spanPice=document.createElement("span")
        spanPice.innerHTML=`<span class="cart-item-price">${products[indexAddCart].price.toLocaleString("vi-VN")}</span>`
 
        divElement.appendChild(spanPice)
        // nút
        let buttonCart=document.createElement("button")
        buttonCart.innerHTML=`<button class="btn-remove">X</button>`
        divElement.appendChild(buttonCart)
        liCart.appendChild(divElement)
        cartList.appendChild(liCart)
        totalPrice()
    }
    products.forEach((el,index)=>{
        let button=document.getElementsByClassName("btn-add")[index]           
        button.setAttribute("onclick", `addItemIntoCart(${el.id})`)
        button.setAttribute("id", `btn-add-${el.id}`)
        button.textContent = "Thêm vào giỏ"
        
    })




    

