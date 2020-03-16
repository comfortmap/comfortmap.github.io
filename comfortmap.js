window.onload = function()
{
    var button = document.getElementById("compute");
    
    button.addEventListener("click", function(){
        
        var shape = document.getElementById("shape");
    
        var width = shape.clientWidth;
        var height = shape.clientHeight;
        var area = width * height;

        document.getElementById("width").innerText = "Width: " + width;
        document.getElementById("height").innerText = "Height: " + height;
        document.getElementById("area").innerText = "Area: " + area;
    });
}