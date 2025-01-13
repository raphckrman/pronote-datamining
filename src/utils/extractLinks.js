export function extractScriptLinks(content) {
    const regex = /<script\s+src="([^"]+)"/g;
    const links = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
        links.push(match[1]);
    }

    return links;
}