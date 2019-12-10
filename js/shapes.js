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

// one

const sayHello = function() {
    const drawing = document.getElementById("student-canvas-1").getContext("2d");
    let message = prompt("Message:");

    if (message !== null) {
      while (message.length > 50) {
        alert("Your message is too long. Keep it under 50 characters.");
        message = window.prompt("Message: ");

        if (message === null) {  // hits cancel
          break;
        }
      }
    }

    drawing.clearRect(0, 0, 1024, 128);

    if (message !== null) {
      drawing.font = "48px sans-serif";
      drawing.strokeText(message, 30, 70, 994);
    }
  };

/*
 * Exercise 2.
 */

 const drawRectangle = function() {
     const canvas = document.getElementById('student-canvas-2');
     const ctx = canvas.getContext('2d');
     ctx.clearRect(0, 0, canvas.width, canvas.height);
  
     
 if (message === null) {  //does this belong here???????
          break;
        }
    drawing.clearRect(0, 0, 1024, 128);

 if (message !== null) {
   do {
    let width = prompt("Width: ")
    if (width == null) { // do i need to break bc it still asks questions even if you press cancel???
      break;
    }
    let height = prompt("Height: ")
    if (height == null) {
      break;
    }
    let x = prompt("X: ")
    if (x == null) {
      break;
   }
    let y = prompt("Y: ")
    if (y == null) {
      break;// do i need any of these if statements??
   }
    if (width > 1024 || width < 1) {
      alert("Your width must be between 1 and 1024.") 
    }
    if (height > 512 || height < 1) {
      alert("Your height must be between 1 and 512.")
    }
    if (x < 1 || x > 1024) {
      alert("Your x-coordinate must be between 1 and 1024.")
    }
    if (y < 1 || y > 512) {
      alert("Your y-coordinate must be between 1 and 512.")
    }
    if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
      alert("One of your values is not a number.")
    } else {
        while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y))

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(x, y, width, height);
    }
  }
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
   const canvas = document.getElementById('student-canvas-3');
   const ctx = canvas.getContext('2d');
   let color = prompt("Color:");// see sample for correct questions
    
    while (color !== Black || color!== black || color!== Blue || color!== blue || color!== Green || color!== green || color!== Orange || color!== orange || color!== Purple || color!== purple || color!== Red || color !== red || color!== Yellow || color!== yellow){
        ctx.fillStyle = color;
        ctx.fillRect(10, 10, 100, 50);

       }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
const canvas = document.getElementById('sample-canvas-4');
const ctx= canvas.getContext('2d');
       let shortSide = prompt("Shortest Side: ");
       let longSide = prompt("Longest Side: ");
       let remainSide = prompt("Remaining Side: ");
   
    if ( Number.isNaN(shortSide) ||  Number.isNaN(longSide) ||  Number.isNaN(remainSide)){
        // write the prompt thats in the sample
    }
    
    shortSide = height
    longSide = hypotenuse
    remainSide = base
    
    while (
        /*ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
        }
        */
};

/*
 * Exercise 5.
 */

const drawFace = function() {
const canvas = document.getElementById('sample-canvas-5');
const ctx = canvas.getContext('2d');   
let radius = prompt("Message: ");    
   do {
       radius = prompt("Message"); /// make it beautiful code???
   }  
    while (radius > 32 || radius < (canvas.height/2)) {
          if (Number.isNaN(radius)){
            alert(/// i literally do not know what the question is )
                } 
    ctx.beginPath();/// these are the wrong numbers 
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
              radius = prompt("Radius: )
      }      
   }
};

/*
 * Exercise 6 (extra credit).
 */
