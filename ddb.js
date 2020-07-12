var AWS = require("aws-sdk");
AWS.config.update({ region: process.env.AWS_REGION });
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
var docClient = new AWS.DynamoDB.DocumentClient();

let makeEntry = function(milliseconds) {
  return new Promise((resolve, reject) => {
    if (typeof(milliseconds) !== 'number') { 
      throw new Error('milleseconds not a number'); 
    }

    setTimeout(() => resolve("done!"), milliseconds)
  });
}

module.exports = makeEntry;
