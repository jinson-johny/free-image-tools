function setupUpload(areaId,callback){

let area=document.querySelector(areaId);

area.addEventListener("click",()=>{

let input=document.createElement("input");

input.type="file";

input.onchange=()=>{

callback(input.files[0]);

};

input.click();

});

area.addEventListener("dragover",(e)=>{

e.preventDefault();

});

area.addEventListener("drop",(e)=>{

e.preventDefault();

callback(e.dataTransfer.files[0]);

});

}
