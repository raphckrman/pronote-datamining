const { base } = require("./getCommon.js");
const { extractScriptLinks } = require("./extractLinks.js");
const { downloadFile } = require("./download.js");

async function getVieScoFiles(PNVersion) {
    const instanceRequest = await fetch(base + "pronote/viescolaire.html", {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
        }
    })

    const scripts = extractScriptLinks(await instanceRequest.text())
    const downloadedFiles = [];

    for (const link of scripts) {
        const filePath = await downloadFile(base + "pronote/" + link, "./pronote-datamining/"+ PNVersion + "/viesco/");
        if (filePath) {
            downloadedFiles.push(filePath);
        }
    }
}

module.exports = { getVieScoFiles };