const newWindow = document.getElementById("myWindow");


function openWindow(URL, width, height) {
   
      const windowFeatures = `width=${width} ,height = ${height}`;
      window.open(URL, "_blank", windowFeatures, openWindow);

}

newWindow.addEventListener('click' , ()=>{ openWindow("https://www.example.com", 400, 300)})