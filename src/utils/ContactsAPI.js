import request from 'superagent/lib/client';

export default {
  getContacts: (url) => {
    return new Promise((resolve, reject) => {
      // take request from superagent
      request
        .get(url) // pass in URL
        .end((err, response) => {
          if(err) reject (err); // test for error, if error, then reject and pass in the error
          resolve(JSON.parse(response.text)); // if no error, return the response text
        })
    });
  }
}
