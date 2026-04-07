const sharp = require('sharp');
const path = require('path');

async function createIcons() {
  try {
    // Create 192x192 PNG
    await sharp({
      create: {
        width: 192,
        height: 192,
        channels: 3,
        background: { r: 0, g: 123, b: 255 }
      }
    })
    .png()
    .toFile(path.join(__dirname, 'public/icon-192.png'));
    console.log('192px icon created');

    // Create 512x512 PNG
    await sharp({
      create: {
        width: 512,
        height: 512,
        channels: 3,
        background: { r: 0, g: 123, b: 255 }
      }
    })
    .png()
    .toFile(path.join(__dirname, 'public/icon-512.png'));
    console.log('512px icon created');
  } catch (err) {
    console.error('Error creating icons:', err);
  }
}

createIcons();
