let form = document.getElementById("form")
let textInput = document.getElementById("textInput")
let msg = document.getElementById("msg")
let dateInput = document.getElementById("dateInput")
let textArea = document.getElementById("textarea")
let tasks = document.getElementById("tasks")
let add = document.getElementById("add")

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    formValidation()

})

let formValidation = () => {
    if(textInput.value === ''){
        msg.innerHTML = "Task cannot be blank"
    }else{
         console.log("success")
         msg.innerHTML = ""
         acceptData()
         add.setAttribute("data-bs-dismiss","modal")
         add.click()


         //IIFE
        (() =>{
            add.setAttribute("data-bs-dismiss", "")
        })()    
       
    }
}

let data = []




let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textArea.value,        
    })

    localStorage.setItem("data", JSON.stringify(data))
    // localStorage.getItem =
    console.log(data)

        
    createTasks()
}

let createTasks = () =>{
    tasks.innerHTML += 
    `
    <div>
          <span class="fw-bold">${data.text}</span>
          <span class="small text-secondary">${data.date}</span>
          <p>${data.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `
    resetForm()
    // textInput.value = ''
    // dateInput.value = ''
    // textArea.value = ''
}

let resetForm = () => {
    textInput.value = ''
    dateInput.value = ''
    textArea.value = ''
}


let deleteTask = (e)=> {
    e.parentElement.parentElement.remove()

}

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement
    textInput.value = selectedTask.children[0].innerHTML
    dateInput.value = selectedTask.children[1].innerHTML
    textArea.value = selectedTask.children[2].innerHTML

    selectedTask.remove()
}


