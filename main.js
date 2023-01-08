

let form = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul")



// add event listerner 
form.addEventListener("submit", saveTo)

// function call 
function saveTo(e){
    e.preventDefault()

// create a new element in the li 
    let newLi = document.createElement("li")
    newLi.innerText = input.value
    newLi.className = "list-group-item mb-2 rounded-0"
    ul.appendChild(newLi)



// delete btn create in the append chlid
    let delBtn = document.createElement("button")
    delBtn.innerText = "X"
    delBtn.className = "btn btn-danger btn-sm rounded-0 float-end"
    newLi.appendChild(delBtn);




// delete function to todo list 
    let del = delBtn.addEventListener("click", delFun)
    function delFun (e){
        if((e.target.className = "X"))
        e.target.parentNode.remove()
        console.log(del)
    }

    // if(delBtn = " "){
    //     alert("please entre the TASK");

    // }

 form.reset()


}

