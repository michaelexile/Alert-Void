/*let draw = SVG().addTo('.followers').size('100%', '100%').viewbox(0, 0, 300, 300);

// Define the center and radius
var cx = 150; // X coordinate of the center
var cy = 150; // Y coordinate of the center
var r = 80;   // Radius

// Create a circular path
var pathData = `M ${cx - r}, ${cy} A ${r},${r} 0 1,0 ${cx + r},${cy} A ${r},${r} 0 1,0 ${cx - r},${cy}`;
var circlePath = draw.path(pathData).fill('none').stroke({ color: 'none', width: 5 }); // Create a path element

// Create the text with tspans for equal spacing
var text = draw.text(function(add) {
    add.tspan('New Follower').fill("#000").font({ size: 24 }).dx(20);
    add.tspan('    💀  ').fill("#000").dx(20); // Add a tspan for spacing
    add.tspan('Welcome to the Void').fill("#000").font({ size: 24 }).dx(20);
    add.tspan('    💀  ').fill("#000").dx(20);
});

// Attach the text to the circular path
text.path(circlePath);

// Rotate the text to make it upright
text.rotate(100, cx, cy);
*/
const followersEl = document.getElementById('demo3');

followersEl.textContent = "NEW FOLLOWER ▄▀▄▀ WELCOME TO THE VOID ▄▀▄▀";

let finalCircle = new CircleType(followersEl).radius(.5);



if(followersEl)
{
    followersEl.classList.remove('opacity-0');
}