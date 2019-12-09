window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    
   let message = prompt("Message:");
   while (message.length >= 50){
     alert("Your message is too long. Please keep your message under 50 characters.");
     message = prompt("Message:")
   }
     const canvas = document.getElementById('student-canvas-1');
     const format = theCanvas.getContext('2d');
     format.font = '48px sans-serif';
     format.clearRect(0, 0, canvas.width, canvas.height);
     format.strokeText(message, 30, 70, // why add this number--- 994);};

/*
 * Exercise 2.
 */

const rectangle = function() {
    let width = prompt("Width: ");
    let height = prompt("Height: ");
    let x = prompt("X: ");
    let y = prompt("Y: ");
    while (width < 1 || width > 1024)  {
      alert("Your width must be between 1 and 1024.")
      width = prompt("Width: ");
    }
    while (height < 1 || height > 1024)  {
      alert("Your height must be between 1 and 1024. ")
      height = prompt("Height: ");
    }
    while (x < 1 || x > 1024)  {
      alert("Your x-coordinate must be between 1 and 1024. ")
      x = prompt("X: ");
    }
    while (y < 1 || y > 1024)  {
      alert("Your y-coordinate must be between 1 and 1024. ")
      y = prompt("Y: ");
    }
    const canvas = document.getElementById('student-canvas-2');
    const format = canvas.getContext('2d');
    format.clearRect(0, 0, canvas.width, canvas.height);
    format.strokeText(x, y, width, height);};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  let color = prompt("Message:"); 
     while (color !== Black || color!== black || color!== Blue || color!== blue || color!== Green || color!== green || color!== Orange || color!== orange || color!== Purple || color!== purple || color!== Red || color !== red || color!== Yellow || color!== yellow){
            
        const canvas = document.getElementById('student-canvas-3');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(10, 10, 100, 50);
            
            }
    }
     
};

/*
 * Exercise 4.
 */

//what even const drawTriangle = function() {
     var canvas = document.getElementById('sample-canvas-4');
        if (canvas.getContext) {
        var ctx = canvas.getContext('2d');        
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
        }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
   let radius = prompt("Message") 
    radius = Number(prompt("Message"));
    
    while (radius > 32 || radius < (canvas.height/2) {
    
 var canvas = document.getElementById('sample-canvas-5');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
  }
 }
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
