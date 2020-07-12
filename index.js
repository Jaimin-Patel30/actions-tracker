const core = require('@actions/core');
const github = require('@actions/github')
const makeEntry = require('./ddb');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    const key = core.getInput('key');
    const secret = core.getInput('secret');
    const repo = core.getInput('repository');
    console.log(`Creating record for ${repo} at ${new Date()}`)
    console.log('Github context : %j', github.context)

    core.debug((new Date()).toTimeString())
    await makeEntry(key, secret, repo);
    core.debug((new Date()).toTimeString())

    core.setOutput('time', new Date().toTimeString());
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
