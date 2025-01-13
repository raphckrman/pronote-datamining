import prettier from 'prettier';
const fs = require('fs');
const path = require('path');

function beautifyCode(inputCode) {
    try {
      const formattedCode = prettier.format(inputCode, {
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        parser: "babel"
      });
      return formattedCode;
    } catch (error) {
      console.error("BeautifyCode:", error);
    }
  }

async function beautifyFile(filePath) {
    try {
      const inputCode = fs.readFileSync(filePath, 'utf-8');
      
      const formattedCode = await beautifyCode(inputCode);
  
      fs.writeFileSync(filePath, formattedCode, 'utf-8');
    } catch (error) {
      console.error("BeautifyFile:", error);
    }
}

async function beautifyDir(dirPath) {
  const directories = [dirPath];
  const filesToBeautify = [];

  while (directories.length > 0) {
    const currentDir = directories.pop();
    const fileList = fs.readdirSync(currentDir);

    for (const file of fileList) {
      const filePath = path.join(currentDir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        directories.push(filePath);
      } else if (filePath.endsWith('.js')) {
        filesToBeautify.push(filePath);
      }
    }
  }

  for (const file of filesToBeautify) {
    console.log("Beautifying " + file);
    await beautifyFile(file);
  }
}

module.exports = { beautifyCode, beautifyFile, beautifyDir };