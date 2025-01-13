const simpleGit = require('simple-git');
const { format } = require('date-fns');

const PAT = process.env.PAT;

async function commitAndPush(localRepoPath, PNVersion) {
  const git = simpleGit(localRepoPath);
  try {
    await git.add(".");
    const status = await git.status();

    if (status.files.length === 0) return;

    await git.commit(`${format(new Date(), "d MMMM yyyy")} - PRONOTE ${PNVersion}`);
    await git.push(PAT);
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { commitAndPush };