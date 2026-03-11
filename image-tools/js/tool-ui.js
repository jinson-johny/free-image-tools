function formatSize(bytes){

let kb = bytes/1024

if(kb<1024)
return kb.toFixed(2)+" KB"

return (kb/1024).toFixed(2)+" MB"

}


function setupTool(uploadId, callback){

let area=document.getElementById(uploadId)

area.addEventListener("dragover",(e)=>{

e.preventDefault()

})

area.addEventListener("drop",(e)=>{

e.preventDefault()

let file=e.dataTransfer.files[0]

processFile(file)

})


area.addEventListener("click",()=>{

let input=document.createElement("input")

input.type="file"

input.onchange=()=>{

processFile(input.files[0])

}

input.click()

})


function processFile(file){

document.getElementById("upload-status").innerHTML=
"Uploaded: "+file.name+
"<br>Size: "+formatSize(file.size)

document.getElementById("progress").style.width="40%"

setTimeout(()=>{

callback(file)

document.getElementById("progress").style.width="100%"

},600)

}

}
