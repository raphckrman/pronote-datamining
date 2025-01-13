import { commitAndPush } from "./utils/commit.js";
import { beautifyDir } from "./utils/format.js";
import { getAccompagnyingFiles } from "./utils/getAccompanying.js";
import { getCommonFiles } from "./utils/getCommon.js";
import { getDirectionFiles } from "./utils/getDirection.js";
import { getParentsFiles } from "./utils/getParents.js";
import { getStudentFiles } from "./utils/getStudent.js";
import { getTeacherFiles } from "./utils/getTeacher.js";
import { getVieScoFiles } from "./utils/getVieSco.js";

async function main() {
    const PNVersion = await getCommonFiles()

    await getDirectionFiles(PNVersion)
    await getTeacherFiles(PNVersion)
    await getVieScoFiles(PNVersion)
    await getParentsFiles(PNVersion)
    await getAccompagnyingFiles(PNVersion)
    await getStudentFiles(PNVersion)

    await beautifyDir("./pronote-datamining/" + PNVersion)
    await commitAndPush("./pronote-datamining", PNVersion)
}

main()