feather.replace();function d(t,n){let e=document.createElement("a");e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),e.setAttribute("download",t),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)}document.getElementById("download").addEventListener("click",function(){var t="hello.txt";d(t,"Je suis un test")},!1);
