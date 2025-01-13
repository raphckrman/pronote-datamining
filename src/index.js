const { beautifyDir } = require("./utils/format.js");
const { getAccompagnyingFiles } = require("./utils/getAccompanying.js");
const { getCommonFiles } = require("./utils/getCommon.js");
const { getDirectionFiles } = require("./utils/getDirection.js");
const { getParentsFiles } = require("./utils/getParents.js");
const { getStudentFiles } = require("./utils/getStudent.js");
const { getTeacherFiles } = require("./utils/getTeacher.js");
const { getVieScoFiles } = require("./utils/getVieSco.js");

async function main() {
    const PNVersion = await getCommonFiles()

    await getDirectionFiles(PNVersion)
    await getTeacherFiles(PNVersion)
    await getVieScoFiles(PNVersion)
    await getParentsFiles(PNVersion)
    await getAccompagnyingFiles(PNVersion)
    await getStudentFiles(PNVersion)

    await beautifyDir("../" + PNVersion)
}

main()