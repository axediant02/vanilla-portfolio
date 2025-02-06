document.getElementById("download-cv").addEventListener("click", function () {
    const download = document.createElement("a");
    download.href = "assets/documents/sample.pdf";
    download.download = "IanCaballeroCV.pdf";

    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
})