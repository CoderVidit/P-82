canvas=document.getElementById("paint");
paint=canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    current_location_of_cordinate_x=e.clientX - canvas.offsetLeft;
    current_location_of_cordinate_y=e.clientY - canvas.offsetTop;
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    MouseEvent-"Mouse Down";
    if (MouseEvent=="mouseDown"){
        console.log("Current Position X and Y cordinates");
        console.log("X=" + current_location_of_cordinate_x +"Y="+ current_location_of_cordinate_y);
        paint.beginPath();
        paint.strokeStyle=color;
        paint.LineWidth=width_of_line;
        paint.arc(current_location_of_cordinate_x , current_location_of_cordinate_y , radius , 0 , 2*Math.PI);
        paint.stroke();
    }
}
function Clear() { 
    ctx.clearRect(0, 0, paint.canvas.width, paint.canvas.height); 
}
