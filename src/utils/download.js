const fs = require('fs');
const path = require('path');

async function downloadFile(url, outputDir) {
    try {
        const fileName = path.basename(url);
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