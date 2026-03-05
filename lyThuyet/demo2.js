console.log("Hello World");
let idUpdate=0
let toDos=[
    {id:0, name: "Chơi game", isDone: true},
    {id:1, name: "Nghe nhạc", isDone: false},
    {id:2, name: "Xem phim", isDone: true},
]

// CRUD
// Read: Đọc hết dữ liệu ra HTML
const renderData=()=>{
    // lấy element thẻ cha chứa dữ liệu
    let listElement=document.getElementsByClassName("listMenu")[0]
    // clear dữ liệu cũ
    listElement.innerHTML=""
    toDos.forEach((el)=>{
        // createElement: tạo ra thẻ mới trong HTML
        let itemElement= document.createElement("li")
        itemElement.innerHTML=`${el.name}
                                <button onclick="handleGetUpdateToDo(${el.id})">Chỉnh sửa</button>
                                <button onclick="deleteToDo(${el.id})">Xóa</button>`
        // appendChild: Thêm con vào cha
        listElement.appendChild(itemElement)
    })
}   
renderData()

// Create: thêm công việc
let idorigin=2
const handleAddToDo=()=>{
    idorigin++
    let inputElement=document.getElementById("input")
    let newName=inputElement.value;

    newToDo={
        id: idorigin,
        name: newName,
        isDone:false

    }
    toDos.push(newToDo)
    renderData()
    inputElement.value=""
}


// Event Sự kiện
let buttonAddElement=document.getElementById("addButton")
let buttonUpdateElement=document.getElementById("updateButton")
buttonAddElement.addEventListener("click", handleAddToDo)
// enter
    let inputElement=document.getElementById("input")
inputElement.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        handleAddToDo()
    }
})

// update
const handleGetUpdateToDo=(idToDo)=>{
    idUpdate=idToDo
    let todoUpdate=toDos.find((el)=>{
        return el.id==idToDo
    })    
    inputElement.value=todoUpdate.name
    // .focus()
    inputElement.focus()
    buttonAddElement.style.display="none"
    buttonUpdateElement.style.display="inline"

}
const handleChangeDataUpdate=()=>{
    let inputElement=document.getElementById("input")
    let newName=inputElement.value;
    let indexToDo=toDos.findIndex((el)=>{
        return el.id== idUpdate
    })
    toDos[indexToDo].name=newName;
    renderData();
    inputElement.value="";
    buttonAddElement.style.display= "inline";   
    buttonUpdateElement.style.display= "none";
}

buttonUpdateElement.addEventListener("click", handleChangeDataUpdate)

// delete
const deleteToDo=(idToDo)=>{
    let indexDel=toDos.findIndex((el)=>{
        return el.id===idToDo
    })
    if(confirm(`Bạn có chắc muốn xóa không`)){
        toDos.splice(indexDel,1)
        renderData()
    }
}