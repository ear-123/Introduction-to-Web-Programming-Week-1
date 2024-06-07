
const myButton = document.getElementById("my-button")

myButton.addEventListener("click", function(){
    console.log("hello world")
    document.getElementById("header").innerText = "Moi maailma"
})

const addDataButton = document.getElementById("add-data")

addDataButton.addEventListener("click", function(){
    const list = document.getElementById("my-list")
    let data = document.createElement("li")
    data.innerText = document.getElementById("textarea").value
    list.appendChild(data)
})