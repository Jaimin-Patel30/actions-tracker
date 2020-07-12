var AWS = require("aws-sdk");
const github = require("@actions/github")
AWS.config.update({ region: 'ap-southeast-1' });
var docClient = new AWS.DynamoDB.DocumentClient();

let makeEntry = async function(key, secret, repo) {
  console.log('github context : %j',github.context)
  const timestamp = (new Date()).toDateString()
  const Item = {
    TableName: "actions",
    Item:{
      repo: repo,
      timestamp: timestamp,
      payload: github.context
    }
  }
  const res = await docClient.put(Item).promise();
  return res
}

module.exports = makeEntry;
