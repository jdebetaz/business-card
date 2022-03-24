import '../scss/app.scss'
feather.replace()

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById("download").addEventListener("click", function(){
    var filename = "hello.txt";
    download(filename, "Je suis un test");
}, false);