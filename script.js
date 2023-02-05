let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("submit", (e)=>{  
e.preventDefault()
formValidation()

})

let formValidation = () => {
    if(input.value === ""){
       msg.innerHTML = "Post cannot be blank"
    }
    else{
        console.log("success")
        msg.innerHTML = " "
        acceptData()
    }
}

let data = {}

let acceptData = () => {
    data["text"] = input.value
    console.log(data)
    createPost()

}

let createPost = () =>{
    posts.innerHTML = data.text
}