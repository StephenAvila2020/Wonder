// document.querySelector("#activate-flight").addEventListener("click", function (){
//     const flightHandlerFunction = document.querySelector("#flight")
//     flightHandlerFunction.classList.toggle("enabled")
// })

// document.querySelector("#activate-mindreading").addEventListener("click", function (){
//     const mindHandlerFunction = document.querySelector("#mindreading")
//     mindHandlerFunction.classList.toggle("enabled")
// })

// document.querySelector("#activate-xray").addEventListener("click", function (){
//     const xrayHandlerFunction = document.querySelector("#xray")
//     xrayHandlerFunction.classList.toggle("enabled")
// })


// document.querySelector("#activate-all").addEventListener("click", function (){
//     const activateFunction = document.querySelectorAll(".power")
    
//     for (let i = 0; i < activateFunction.length; i++) {
//         activateFunction[i].classList.add("enabled")
        
//     }
// })

// document.querySelector("#deactivate-all").addEventListener("click", function (){
//     const activateFunction = document.querySelectorAll(".power")
    
//     for (let i = 0; i < activateFunction.length; i++) {
//         activateFunction[i].classList.remove("enabled")
//         activateFunction[i].classList.add("disabled")
        
//     }
// })

// document.querySelector("body").addEventListener("click", function (){
//     // const x = event.target.id.split("-")
//     console.log("you clicked me")
    
// })

function activatePower (){
   console.log(event.target.id.split("-")[1])
   const section = document.querySelector(`#${idToSelect}`)
   console.log(section)
   section.classList.toggle("enabled");
}
// document.querySelector("#activate-flight").addEventListener("click", () => {
//      const x = event.target.id.split("-")
//      activatePower(x[1])
// })

document.querySelector("#activate-flight").addEventListener("click", activatePower)
document.querySelector("#activate-mindreading").addEventListener("click", activatePower)
document.querySelector("#activate-xray").addEventListener("click", activatePower)