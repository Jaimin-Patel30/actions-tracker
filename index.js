const core = require('@actions/core')
const github = require('@actions/github')
const { readdirSync } = require('fs')

// most @actions toolkit packages have async methods
async function run () {
  try {
    const repo = core.getInput('repository')
    process.env.AWS_DEFAULT_REGION = 'ap-southeast-1'
    console.log(`Creating record for ${repo} at ${new Date()}`)
    console.log('Github context : %j', github.context)
    const dirs = readdirSync('./', { withFileTypes: true })
    console.log(dirs)
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
