// Params
const resolution = 300;
var width = 8 * resolution;
var height = 4 * resolution;

// Grab canvas elemet and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Canvas size
canvas.width = width;
canvas.height = height;

// Stroke style
ctx.strokeStyle = "red";
ctx.lineWidth = 6;

// Building loop
var buildings = 35;
for(b=1; b<=buildings; b++) {
    // Building height
    roofMin = height * 0.2; // 50% from top
    roofMax = height * 0.5; // 20% ^
    topY = rand(roofMin, roofMax);
    buildHeight = height - topY;
    buildWidth = Math.round(buildHeight / 6);
    // Building location
    topX = rand(0, width - buildWidth);
    //Draw building as rectangle
    ctx.rect(topX, topY, buildWidth, buildHeight);
    ctx.stroke();
    // Flames loop
    var flames = 10;
    for(f=1; f<=flames; f++) {
        // Flame X
        minX = topX - 50;
        maxX = topX + buildWidth + 50;
        topOffset = rand(-50, 50);
        flameTopX = rand(minX, maxX);
        flameBottomX = rand(minX, maxX);
        // Flame Y
        minTopY = height * 0.10;
        maxTopY = height * 0.8;
        flameTopY = rand(minTopY, maxTopY);
        flameBottomY = rand(height, maxTopY);
        // Draw flame curve
        ctx.moveTo(flameTopX, flameTopY);
        curveX = flameTopX + 50;
        maths = (flameBottomY - flameTopY) / 2;
        curveY = flameTopY + maths;
        // Redue var size for mini zine width
        cX = curveX;
        cY = curveY;
        fX = flameBottomX;
        fY = flameBottomY;
        // Draw curve
        ctx.quadraticCurveTo(cX, cY, fX, fY);
        ctx.stroke();
    }
}

// Random number
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rand = Math.random();
    return Math.floor(rand * (max - min + 1)) + min;
}