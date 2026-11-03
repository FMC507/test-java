function upDate(previewPic) {
    console.log("Triggered");
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    document.querySelector('#image').innerHTML = previewPic.alt;
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHTML = "Hover over an image below to display here.";
}