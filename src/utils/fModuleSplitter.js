const fs = require('fs');
const path = require('path');

const translationFiles = {}

async function loadTranslations(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`Translation file does not exist: ${filePath}`);
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const translations = {};
    const regex = /a\s*\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)/gs;
    let match;
    
    while ((match = regex.exec(fileContent)) !== null) {
      const key = match[1];
      const value = match[2];
      translations[key] = value;
    }

    const multilineRegex = /a\s*\(\s*['"]([^'"]+)['"]\s*,\s*["']([\s\S]*?)["']\s*,?\s*\)/g;
    while ((match = multilineRegex.exec(fileContent)) !== null) {
      const key = match[1];
      const value = match[2];
      if (!translations[key]) {
        translations[key] = value;
      }
    }

    console.log(`Loaded ${Object.keys(translations).length} translations`);
    return translations;
  } catch (error) {
    console.error(`Error loading translations from ${filePath}:`, error);
    return null;
  }
}

function replaceWithTranslations(fileContent, translations) {
  if (!translations || Object.keys(translations).length === 0) {
    console.log("No translations available for replacement");
    return fileContent;
  }

  try {
    const regex = /ObjetTraduction_1\.GTraductions\.getValeur\(\s*['"](.*?)['"](?:\s*,\s*.*?)?\s*\)/gs;
    
    const result = fileContent.replace(regex, (match, key) => {
      if (translations[key]) {
        return `'${translations[key]}'`;
      } else {
        return match;
      }
    });
    return result;
  } catch (error) {
    console.error("Error in replaceWithTranslations:", error);
    return fileContent;
  }
}

async function splitFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`File does not exist: ${filePath}`);
      return;
    }
    
    const lines = fs.readFileSync(filePath, 'utf-8').split('\n');
    let insideModule = false;
    let buffer = [];
    let fileName = null;
    let skipNextLine = false;
    
    if (filePath.includes('traductions.js')) {
      console.log("Skipping translation file");
      return;
    }
    
    const dirName = path.dirname(filePath).split(path.sep).pop();
    
    if (!translationFiles[dirName]) {
      const translationPath = path.join(path.dirname(filePath), 'traductions.js');
      
      const translations = await loadTranslations(translationPath);
      
      if (translations) {
        translationFiles[dirName] = translations;
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (skipNextLine) {
        buffer.push(line);
        skipNextLine = false;

        if (fileName) {
          
          const fileContent = buffer.join('\n');
          let translated = fileContent;
          
          if (translationFiles[dirName] && Object.keys(translationFiles[dirName]).length > 0) {
            translated = replaceWithTranslations(fileContent, translationFiles[dirName]);
          } else {
          }
          
          const outputPath = path.join(path.dirname(filePath), "sp_" + fileName);
          
          if (translated !== fileContent) {
          } else {
          }
          
          fs.writeFileSync(outputPath, translated, 'utf-8');
        } else {
        }

        insideModule = false;
        buffer = [];
        fileName = null;
        continue;
      }

      if (line.includes('IE.fModule({')) {
        insideModule = true;
        buffer = [line];
        continue;
      }

      if (insideModule) {
        buffer.push(line);

        const fnMatch = line.match(/fn:\s*['"]([^'"]+)['"]/);
        if (fnMatch) {
          fileName = fnMatch[1];
          skipNextLine = true;
        }
      }
    }

    fs.unlinkSync(filePath);
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

async function splitDir(dirPath) {
  const directories = [dirPath];
  const filesToSplit = [];

  while (directories.length > 0) {
    const currentDir = directories.pop();
    
    const fileList = fs.readdirSync(currentDir);

    for (const file of fileList) {
      const filePath = path.join(currentDir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        directories.push(filePath);
      } else if (filePath.endsWith('.js')) {
        filesToSplit.push(filePath);
      }
    }
  }

  for (const file of filesToSplit) {
    if (file.includes("sp_")) {
      continue;
    }
    console.log("Splitting " + file);
    await splitFile(file);
  }
}

module.exports = { splitFile, splitDir, loadTranslations, replaceWithTranslations };