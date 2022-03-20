// var myForm = document.forms.myForm;
// var message = document.getElementById("message");

// myForm.onsubmit = function(){
//     if(myForm.name.value == ""){
//         message.innerHTML = "please enter a name";
//         return false;
//     }else{
//         message.innerHTML = "";
//         return true;
//     }

// };


// var body = document.getElementById("body");
// var image = ["./assets/images/img1.jpg", "./assets/images/img2.jpg", "./assets/images/img3.jpg"];
// var counter = 0;

// function imageChanger(){

//     if (counter >= image.length){
//         counter = 0;
//     };

//     body.style = `background-image: url(${image[counter]});`
//     counter++;

//     console.log(body.style.backgroundImage);
// };
// setInterval(imageChanger, 4000);


const nameInput = document.querySelector("#firstname");
const nameInput = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const comfirmPassword = document.querySelector("#password");

function validateForm(){

    clearMessage();

    if(nameInput.nodeValue.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }
}

function clearMessage(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    nameInput.className.remove("error-border");
}