// Retrieving references to the canvas element and color radio inputs
const canvas = document.querySelector('canvas');
const title = document.getElementById('title');
const playButton = document.getElementById('play-button');
const difficulty = document.getElementById('difficulty');
const difficultyText = document.getElementById('difficulty-text');

// Retrieving the 2D rendering context
const ctx = canvas.getContext('2d');

// Setting canvas size to full web page 
canvas.width = innerWidth;
canvas.height = innerHeight;

// Declaring variables
let ball;
let ballArray = [];
let animation1;
let ballSpawn = true;
let setColour = 'red';
let textChoice = 'shrek';
let colorIndex = 0;
let chosenDiff = '1';


// Color Arrays
const redTheme = [
    '#9d0208',
    '#d00000',
    '#e85d04',
    '#f48c06',
    '#ffba08'
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

// Implementation
function init() {
    ballArray = []; // Clear array
    ballSpawn = true;
}

// Create and insert ball in array
let timer;
function createBall() {
    if (ballSpawn) {
        // Setting random variables
        let radius = randomIntFromRange(10, 40);
        let x = randomIntFromRange(radius, (canvas.width - radius));
        let y = 10;
        let dx = randomIntFromRange(-10, 10);
        let dy = randomIntFromRange(5, 10);
        let color = '';

        // Setting color depending on theme
        if (setColour === 'red') {
            color = redTheme[randomIntFromRange(0, 4)];
        } else if (setColour === 'green') {
            color = greenTheme[randomIntFromRange(0, 4)];
        } else if (setColour === 'blue') {
            color = blueTheme[randomIntFromRange(0, 4)];
        }

        // Inserting ball Object
        ballArray.push(new Ball(x, y, dx, dy, radius, color));
        
        setTimeout(createBall, 300); // Delay for 1 second between each ball creation

        // Clear the timer after 60 seconds
        if (!timer) {
            timer = setTimeout(() => {
                // Set an interval to remove the first ball every second
                timer = setInterval(() => {
                    if (ballArray.length > 0) {
                        ballArray.shift(); // Remove the first ball from the array
                    } else {
                        clearInterval(timer);
                    }
                }, 300);
            }, 30000);
        }
    }
}

// Change balls' color depending on theme
function updateBalls() {
    ballArray.forEach(ball => {
        if (setColour === 'green') {
            ball.color = greenTheme[colorIndex];
            colorIndex = (colorIndex + 1) % greenTheme.length;
        } else if (setColour === 'blue') {
            ball.color = blueTheme[colorIndex];
            colorIndex = (colorIndex + 1) % blueTheme.length;
        } else {
            ball.color = redTheme[colorIndex];
            colorIndex = (colorIndex + 1) % redTheme.length;
        }
    });
}

// Change title Colour depending on theme
const titleColorChange = setInterval(() => {
    if (setColour === 'green') {
        title.style.color = greenTheme[colorIndex];
        colorIndex = (colorIndex + 1) % greenTheme.length;
    } else if (setColour === 'blue') {
        title.style.color = blueTheme[colorIndex];
        colorIndex = (colorIndex + 1) % blueTheme.length;
    } else {
        title.style.color = redTheme[colorIndex];
        colorIndex = (colorIndex + 1) % redTheme.length;
    }
}, 1000)


function animate() {
    if (animation1) {
        // Make a loop
        requestAnimationFrame(animate);
    
        // Clear canvas by redrawing background
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();

        // console.log(difficulty.value);
        // console.log(setColour);
        // console.log(textChoice);
    
        // Move the ball Objects in ballArray
        for (let i = 0; i < ballArray.length; i++) {
            ballArray[i].update();
        }
    }
}

// Event listener
window.addEventListener('resize', () => {
    // Setting canvas size to full web page 
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})

window.onload = () => {

    animation1 = true; // Set intro animation on
    init(); // Load balls
    createBall();
    animate();
    console.log('executed')
}


// Theme color selection
const colorChoices = ['red', 'blue', 'green'];
colorChoices.forEach(color => {
    document.getElementById(color).addEventListener('change', () => {
        setColour = color;
        updateBalls();
    });
});

// Text choice selection
const textChoices = ['shrek', 'bee', 'geneva', 'bible'];
textChoices.forEach(choice => {
    document.getElementById(choice).addEventListener('change', () => {
        textChoice = choice;
    });
});

// Diffuculty selection
difficulty.addEventListener('input', () => {
    chosenDiff = difficulty.value;
    console.log(chosenDiff)
    if (chosenDiff === '1') {
        difficultyText.textContent = 'Normal'
    } else if (chosenDiff === '2') {
        difficultyText.textContent = 'Hard'
    } else {
        difficultyText.textContent = 'Easy'
    }
})

// Start game
playButton.addEventListener('click', () => {
    localStorage.setItem('text', textChoice);
    localStorage.setItem('color', setColour);
    localStorage.setItem('diff', chosenDiff);
    window.location.href = './game.html'
})