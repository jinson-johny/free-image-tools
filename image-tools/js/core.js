function loadImage(file, callback){

let img = new Image();

img.src = URL.createObjectURL(file);

img.onload = function(){
callback(img);
}

}