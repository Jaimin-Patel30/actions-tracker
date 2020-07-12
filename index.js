const core = require('@actions/core');
const github = require('@actions/github')
const wait = require('./wait');
const ddb = require('./ddb');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    const ms = core.getInput('milliseconds');
    console.log(`Waiting for ${ms} milliseconds ...`)
    console.log('Github context : %j', github.context)

    core.debug((new Date()).toTimeString())
    await wait(parseInt(ms));
    await ddb(parseInt(ms));
    core.debug((new Date()).toTimeString())

    core.setOutput('time', new Date().toTimeString());
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
