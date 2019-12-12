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
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("color").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick =  drawTriangle;
    document.getElementById("face").onclick = drawFace;

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

     let width, height, x, y;
     do {
         width = prompt("Width: ")
         if (width == null) { // do i need to break bc it still asks questions even if you press cancel???
           break;
         }
         console.log("next");
         height = prompt("Height: ")
         if (height == null) {
           break;
         }
         x = prompt("X: ")
         if (x == null) {
           break;
         }
         y = prompt("Y: ")
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
         }
      } while (isNaN(width) ||
             isNaN(height) ||
             isNaN(x) ||
             isNaN(y) ||
             width > 1024 ||
             width < 1 ||
             height > 512 ||
             height < 1 ||
             x < 1 ||
             x > 1024 ||
             y < 1 ||
             y > 512);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(x, y, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
   const canvas = document.getElementById('student-canvas-3');
   const ctx = canvas.getContext('2d');
   let color = prompt("Color:");// see sample for correct questions

   if (color !== null) {
      color = color.toLowerCase();

      while (color !== "black" &&
             color !== "blue" &&
             color !== "green" &&
             color !== "orange" &&
             color !== "purple" &&
             color !== "red" &&
             color !== "yellow") {

           alert(color + " is not a supported color.")
           color = prompt("Color:")

            if (color == null){
              ctx.clearRect(0, 0, 1024, 128);
              return;
            } else {
              color = color.toLowerCase();
            }
         }
   } else {
     ctx.clearRect(0, 0, 1024, 128);
     return;
   }

       ctx.fillStyle = color;
       ctx.clearRect(0, 0, 1024, 128);
       ctx.fillRect(10, 10, 100, 50);
};


/*
 * Exercise 4.
 */

const drawTriangle = function() {
  const canvas = document.getElementById('sample-canvas-4');
  const ctx = canvas.getContext('2d');
  let shortSide = prompt("Side 1: ");
  let remainSide = prompt("Side 2: ");
  let longSide = prompt("Side 3: ");
if (longSide !== null){
  while (isNaN(shortSide) || isNaN(longSide) || isNaN(remainSide)) {
    alert("One of your sides is not a number.");
    shortSide = prompt("Side 1: ");
    remainSide = prompt("Side 2: ");
    longSide = prompt("Side 3: ");
  }
    if ((Math.squared(shortSide) + (Math.squared(remainSide) = longSide){
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(25, shortSide + 25 );
      ctx.lineTo(shortside + 25, longside + 25 );
      ctx.closePath();
      ctx.stroke();
    } else {
      alert(".")
    }


} else {
   ctx.clearRect(0, 0, 1024, 128)
}

};

/*
 * Exercise 5.
 */

const drawFace = function() {
  const canvas = document.getElementById('sample-canvas-5');
  const ctx = canvas.getContext('2d');
  let radius = Number(prompt("Radius: "));
    do {
      radius = prompt("Radius: ");
    }
    if (Number.isNaN(radius)){
      alert("Your radius is not a number." )
    } else if (radius <= 32){
      alert("Your radius must be at least 32.")
    } else if (radius > (canvas.height/2)){
      alert("Your smiley face won't fit on the canvas.")
    }
    let eyes = 0.15 * radius
    let mouth = 0.7 * radius


  ctx.beginPath();
  ctx.arc(512, 256, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512, 256, mouth, 0, Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, eyes, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512 + 0.4 * radius, 256 - 0.4* radius, eyes, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
};
              radius = prompt("Radius: )
       }
    }
};

/*
 * Exercise 6 (extra credit).
 */
