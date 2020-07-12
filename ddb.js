var AWS = require("aws-sdk");
const github = require("@actions/github")
AWS.config.update({ region: process.env.AWS_REGION });
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
var docClient = new AWS.DynamoDB.DocumentClient();

let makeEntry = function(table, key, secret) {
  const Item = {
    TableName: table
  }
  return new Promise((resolve, reject) => {
    if (typeof(milliseconds) !== 'number') { 
      throw new Error('milleseconds not a number'); 
    }
    console.log('github context : %j',github.context)

    setTimeout(() => resolve("done!"), milliseconds)
  });
}

module.exports = makeEntry;
