const fs = require('fs');
const path = require('path');

const ignoreList = ['imagesconnexion.js']; 

async function downloadFile(url, outputDir) {
    try {
        const fileName = path.basename(url);
        if (ignoreList.includes(fileName)) {
            console.log(`Ignoring file: ${fileName}`);
            return;
        }
        const outputPath = path.join(outputDir, fileName);

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const response = await fetch(url);

        if (!response.ok) {
        throw new Error(response.statusText);
        }

        const buffer = await response.arrayBuffer();

        const nodeBuffer = Buffer.from(buffer);
        fs.writeFileSync(outputPath, nodeBuffer);

        return outputPath;
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = { downloadFile };