//****************************************************************************
// the structure for a block
class Block {

    constructor(x, y, color = "blue") {
        // the x position (what else...)
        this.x = x;

        // and the y position (and again: what else...)
        this.y = y;

        // set the background color of the block
        this.color = color;
    }

    //----------------------------------------------------------------------------
    // create the HTML code for a block
    createHtmlBlock = () => {

        let blockWidth = (100 - 2 * blockMargin * blockCols) / blockCols;
        // let blockHeight = (20 - 2 * blockMargin * blockRows) / blockRows;
        let blockHeight = 5 - 2 * blockMargin;

        const divBlock = document.createElement("div");
        divBlock.className = "block";

        divBlock.style.position = "absolute";
        divBlock.style.left = `${(blockWidth + blockMargin * 2) * this.x}vw`;
        divBlock.style.top = `${(blockHeight + blockMargin * 2) * this.y}vh`;

        divBlock.style.width = `${blockWidth}vw`;
        divBlock.style.height = `${blockHeight}vh`;

        divBlock.style.margin = `${blockMargin}vh ${blockMargin}vw`;

        divBlock.style.background = this.color;

        return divBlock;
    }
}



//****************************************************************************
// the structure for the batter
class Batter {

    constructor(x = 50) {
        this.x = x;
    }
    batterWidth = 15;
    batterHeight = 2;
    batterColor = "brown";

    //----------------------------------------------------------------------------
    // create the HTML code for the batter
    createHtmlBatter = () => {

        const divBatter = document.createElement("div");

        divBatter.id = "batter";
        divBatter.className = "batter";

        divBatter.style.position = "absolute";
        divBatter.style.left = `${this.x - this.batterWidth / 2}vw`;
        divBatter.style.bottom = `${blockMargin}vh`;

        divBatter.style.width = `${this.batterWidth}vw`;
        divBatter.style.height = `${this.batterHeight}vh`;

        divBatter.style.background = this.batterColor;
        return divBatter;
    }
}

//****************************************************************************
// the structure for the ball
class Ball {

    constructor(x = 50) {
        this.x = x;
    }
    ballSize = 2;
    ballColor = "darkgray";

    //----------------------------------------------------------------------------
    // create the HTML code for the batter
    createHtmlBall = () => {

        const divBall = document.createElement("div");

        divBall.id = "ball";
        divBall.className = "ball";

        divBall.style.position = "absolute";
        divBall.style.left = `${this.x - this.ballSize / 2}vw`;
        divBall.style.bottom = `${blockMargin + this.ballSize}vh`;
        divBall.style.borderRadius = "50%";

        divBall.style.width = `${this.ballSize}vmax`;
        divBall.style.height = `${this.ballSize}vmax`;

        divBall.style.background = this.ballColor;
        return divBall;
    }
}
