const toolPath = "../image-tools/tools/";

document.getElementById("sidebar").innerHTML = `

<h3>Image Tools</h3>

<a href="${toolPath}jpg-to-webp.html">JPG → WebP</a>
<a href="${toolPath}png-to-jpg.html">PNG → JPG</a>
<a href="${toolPath}webp-to-jpg.html">WebP → JPG</a>
<a href="${toolPath}image-compressor.html">Compress</a>
<a href="${toolPath}image-resizer.html">Resize</a>
<a href="${toolPath}image-rotate.html">Rotate</a>
<a href="${toolPath}image-crop.html">Crop</a>
<a href="${toolPath}image-base64.html">Base64</a>

`;