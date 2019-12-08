export class Api {
  serverpath = 'https//localhost:10000';
  constructor() {}

  getapi(param) {
    fetch(param, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.movies;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  /**
   * function to get the http request
   */
  GetRequest(param) {
    return fetch(param,{
      method: 'GET',
    }).then((response) => response.json().then(data => {
        // console.log('response from get api:', data);
        return data;
      })
    ).catch(error => {
      // console.error('error from get api:', error);
      return error;
    })
  }



}
