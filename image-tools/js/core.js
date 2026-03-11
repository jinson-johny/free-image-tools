function setupDrop(id,callback){

let area=document.getElementById(id);

area.onclick=function(){

let input=document.createElement("input");
input.type="file";

input.onchange=function(){
callback(input.files[0]);
};

input.click();

};

area.ondragover=function(e){
e.preventDefault();
};

area.ondrop=function(e){

e.preventDefault();

let file=e.dataTransfer.files[0];

callback(file);

};

}