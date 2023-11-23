const args = process.argv.splice(2);
const fs = require('fs');


const request = require('request');
request(args[0], (error, response, body) => {
  
  if(error) {
    console.log('error')
  };
  let bytes = body; 

  fs.writeFile(`/Users/jillregan/lighthouse/page-fetcher/${args[1]}`, bytes, err => {
    if (err) {
      console.error(err);
    }
  });

  console.log(`Downloaded and saved ${bytes.length} bytes to ${args[1]}`);
});



