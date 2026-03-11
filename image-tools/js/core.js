function loadImage(file, callback){

let img = new Image();

img.src = URL.createObjectURL(file);

img.onload = function(){
callback(img);
}

}

function setupDrop(id,callback){

let area=document.getElementById(id);

area.addEventListener("dragover",(e)=>{

e.preventDefault();

});

area.addEventListener("drop",(e)=>{

e.preventDefault();

let file=e.dataTransfer.files[0];

callback(file);

});

area.addEventListener("click",()=>{

let input=document.createElement("input");

input.type="file";

input.onchange=function(){

callback(input.files[0]);

}

input.click();

});

}