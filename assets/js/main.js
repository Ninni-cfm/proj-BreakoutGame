
//****************************************************************************
// constants declarations for some UI elements
const blocksContainer = document.getElementById('blocksContainer');


//****************************************************************************
// the game elements

//----------------------------------------------------------------------------
// the batter
let batter = null;

//----------------------------------------------------------------------------
// an array for the blocks
let blocks = null;

//----------------------------------------------------------------------------
// and the ball
let ball = null;


//****************************************************************************
// first of all build the blocks

//----------------------------------------------------------------------------
// the number of rows and columns for the blocks
let blockRows = 5;
let blockCols = 8;

//----------------------------------------------------------------------------
// the margin around a block, will be used for batter as well
let blockMargin = 0.5;

let blockColors = ["red", "yellow", "green", "blue", "purple"]

//----------------------------------------------------------------------------
// create all blocks
function createBlocks() {

    // initialize a 2-dimensional array
    const Array2D = (c, r) => [...Array(c)].map(x => Array(r));
    let blocks = Array2D(blockCols, blockRows);

    // create the blocks (JS and HTML)
    for (let y = 0; y < blockRows; y++) {

        for (let x = 0; x < blockCols; x++) {

            let block = new Block(x, y, blockColors[y]);
            blocks[x][y] = block;
            blocksContainer.appendChild(block.createHtmlBlock())
        }
    }
    return blocks;
}

//----------------------------------------------------------------------------
// create the batter
function createBatter() {

    blocksContainer.after(new Batter().createHtmlBatter());
    return document.getElementById('batter');
}

//----------------------------------------------------------------------------
// create the ball
function createBall() {
    blocksContainer.after(new Ball().createHtmlBall());
    return document.getElementById('batter');

}

blocks = createBlocks();
batter = createBatter();
ball = createBall();


//****************************************************************************
// control batter using the keyboard
window.addEventListener('keydown', (e) => {

    // console.log(e.key);
    switch (e.key) {
        case 'ArrowLeft':
            moveBatterLeft(2);
            break;
        case 'ArrowRight':
            moveBatterRight(2);
            break;
    }
});

//****************************************************************************
// control batter using the mouse
window.addEventListener('mousemove', (e) => {

    // get the mouse position centered horizontal on the batter
    let width = batter.style.width.replace("vw", "");
    let pos = pxToVw(e.clientX) - width / 2;

    // avoid batter moves outside on the left
    pos = Math.max(pos, blockMargin);

    // avoid batter moves outside on the right
    pos = Math.min(pos, 100 - width - blockMargin);

    // set batter position
    batter.style.left = `${pos}vw`;
});



function getBatterPosition() {
    // getComputedStyle returns value in px!
    return window.getComputedStyle(batter).getPropertyValue('left').replace('px', '') * 1;
}

function moveBatterLeft(distance) {

    let pos = pxToVw(getBatterPosition());

    pos -= distance;

    // avoid batter moves outside on the left
    pos = Math.max(pos, blockMargin);

    batter.style.left = `${pos}vw`;
}

function moveBatterRight(distance) {

    let pos = pxToVw(getBatterPosition());
    let width = batter.style.width.replace("vw", "");

    pos += distance;

    // avoid batter moves outside on the right
    pos = Math.min(pos, 100 - width - blockMargin);

    batter.style.left = `${pos}vw`;
}
