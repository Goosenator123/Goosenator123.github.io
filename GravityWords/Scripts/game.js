// Shrek movie script for the gameee
const script1 = ""

// Retrieving references to the canvas element and color radio inputs
const canvas = document.getElementById('canvas');
const userInput = document.getElementById('typing-area');
const cover = document.getElementById('cover');

// Retrieving the 2D rendering context
const ctx = canvas.getContext('2d');

// Setting canvas size to full web page 
canvas.width = innerWidth;
canvas.height = (innerHeight * 0.8);
let condition = 1;
let bounces = 2;
let bounceCount = [];
gravity = 0.1;
friction = 0.65;
let points = 0;
let inputPosition = 720;

// Ball Array
let ballArray = []

// Clear canvas
let clearCanvas = () => {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

// Color Arrays
const redTheme = [
    '#9d0208',
    '#d00000',
    '#dc2f02',
    '#f48c06',
    '#f48c06'
];
const blueTheme = [
    '#6930c3',
    '#5e60ce',
    '#4ea8de',
    '#56cfe1',
    '#64dfdf'
]
const greenTheme = [
    '#004b23',
    '#007200',
    '#38b000',
    '#70e000',
    '#ccff33'
]

// ballArray.push(new Ball(100,100,5,1,50,redTheme[1]));
function generateWord() {
    if (true) {
        // Setting random variables
        let radius = 80;
        let x = randomIntFromRange(radius, (canvas.width - radius));
        let y = 10;
        let dx = randomIntFromRange(-3, 3);
        let dy = randomIntFromRange(1, 5);
        let color = 'red';
        let text = 'hellohowareyou'

        ballArray.push(new Ball(x, y, dx, dy, radius, color, text, true));
        bounceCount.push(0);
    }
}

// Function that checks if the ball bounced
function checkBounce(ball, index) {
    if ((ball.y + ball.radius + ball.dy) > canvas.height) {
        bounceCount[index]++;
        // console.log(bounceCount[index])
    }
    if ((bounceCount[index] - 1) === bounces) {
        ballArray.shift();
        bounceCount.splice(index, 1);
    }
}

// Animate function
function animate() {
    requestAnimationFrame(animate);
    if (condition === 1) {
    
        // Clear canvas by redrawing background
        clearCanvas();

        for (let i = 0; i < ballArray.length; i++) {
            checkBounce(ballArray[i], i);
            ballArray[i].update();
        }
    }
}

// Event listener
window.addEventListener('resize', () => {
    // Setting canvas size to full web page 
    canvas.width = innerWidth;
    canvas.height = (innerHeight * 0.8);
})

window.onload = () => {
    condition = -1;
    userInput.style.top = -inputPosition + 'px';
    cover.style.zIndex = 100;
    animate();
    setInterval(() => {
        if (condition === 1) {
            generateWord();
        }
    }, 2000)
}