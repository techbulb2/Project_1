var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function(){
    if(myForm.name.value == ""){
        message.innerHTML = "please enter a name";
        return false;
    }else{
        message.innerHTML = "";
        return true;
    }

};


var imageChanger = document.getElementsById("body");
var image = ["../images/img1.jpg", "../images/img2.jpg", "../images/img3.jpg"];
var counter = 0;

function imageChanger(){

    if (counter >= image.length){
        counter = 0;
    };

    imageChanger.style.background = image[counter];
    counter ++;
    setInterval("imageChanger", 3000);
};
