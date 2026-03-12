function formatSize(bytes) {

    let kb = bytes / 1024

    if (kb < 1024)
        return kb.toFixed(2) + " KB"

    return (kb / 1024).toFixed(2) + " MB"

}

function setupTool(uploadId, callback) {

    let area = document.getElementById(uploadId)

    area.addEventListener("dragover", (e) => {
        e.preventDefault()
    })

    area.addEventListener("drop", (e) => {
        e.preventDefault()

        let files=e.dataTransfer.files

        processFile(files)

    })

    area.addEventListener("click", () => {

        let input = document.createElement("input")

        input.type="file"
        input.multiple=true

        input.onchange = () => {
            processFile(input.files[0])
        }

        input.click()

    })

    function processFile(file) {

        if (!file) return

        document.getElementById("upload-status").innerHTML =
            "Uploaded: " + file.name +
            "<br>Size: " + formatSize(file.size)

        document.getElementById("progress").style.width = "40%"

        setTimeout(() => {

            callback(file)

            document.getElementById("progress").style.width = "100%"

        }, 600)

    }

}

/* Prevent browser from opening files when dropped */

document.addEventListener("dragover", (e) => e.preventDefault())
document.addEventListener("drop", (e) => e.preventDefault())