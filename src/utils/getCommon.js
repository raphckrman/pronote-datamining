import { extractScriptLinks } from "./extractLinks.js"
import { downloadFile } from "./download.js";

const INSTANCE = process.env.INSTANCE;

export const base = "https://" + INSTANCE + ".index-education.net/"

export async function getCommonFiles() {
    const instanceRequest = await fetch(base + "pronote/", {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
        }
    })

    const PNVersion = instanceRequest.headers.get("server").split(" ")[1]
    const scripts = extractScriptLinks(await instanceRequest.text())
    const downloadedFiles = [];

    for (const link of scripts) {
        const filePath = await downloadFile(base + "pronote/" + link, "./pronote-datamining/"+ PNVersion + "/common/");
        if (filePath) {
            downloadedFiles.push(filePath);
        }
    }

    return PNVersion
}
