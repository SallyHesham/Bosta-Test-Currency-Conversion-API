const request = require('request');

exports.getRate = async function (input) {
  return new Promise((resolve) => {
    setTimeout(() => {

      var options = {
        method: 'POST',
        url: 'https://api.apyhub.com/data/convert/currency/multiple',
        headers: {
          'Content-Type': 'application/json',
          'apy-token': 'APY0lZX5SzgmKLFIeDt36450ttVF1MzsWWr0pv24vbVLNJs8gdkguoI9lVoy0ILAceqLXJ'
        },
        body: {source: input.source, targets: [input.target]},
        json: true
      };
      
      request(options, function (error, response, body) {
        //if (error) throw new Error(error);
        resolve([response, error, body]);
      });
    
    }, 5000)
  })
};