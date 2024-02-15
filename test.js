// Verification of badges
function validateBadge(image) {
// Create a Canvas element
const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
const context = canvas.getContext('2d');

// Drawing an image to a Canvas
context.drawImage(image, 0, 0, 512, 512);

// Get pixel data in Canvas
const imageData = context.getImageData(0, 0, 512, 512);
const pixels = imageData.data;

// Verify badge conditions
for (let i = 0; i < pixels.length; i += 4) {
const alpha = pixels[i + 3];

// Verify the size is 512x512
if (canvas.width !== 512 || canvas.height !== 512) {
console.error('Badge size does not meet requirements');
return false;
}

// Verify that there are only non-transparent pixels inside the circle
if (alpha === 0) {
console.error('Transparent pixels inside the badge');
return false;
}
}

console.log('Badge Verification Passed');
return true;
}

// Convert an image to a specified object
function convertToBadge(image) {
// Create a Canvas element
const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
const context = canvas.getContext('2d');

// Drawing an image to a Canvas
context.drawImage(image, 0, 0, 512, 512);

// Get pixel data in Canvas
const imageData = context.getImageData(0, 0, 512, 512);
const pixels = imageData.data;

// Modify the colour of the badge
for (let i = 0; i < pixels.length; i += 4) {
pixels[i] = 255; // Set the red channel to 255
pixels[i + 1] = 255; // Set the green channel to 255
pixels[i + 2] = 0; // Set the blue channel to 255
}

// Redraw the modified pixel data to the Canvas
context.putImageData(imageData, 0, 0);

// Returns the modified Canvas
return canvas;
}
