export class Api {
  serverpath = 'https//localhost:10000';
  constructor() {}

  /**
   * function for the get api
   * @param param: link for the api
   */
  getapi(param) {
    return fetch(param, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
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
    })
      .then((response) => response.json().then(data => {
          return data;
        }),
      )
      .catch(error => {
        return error;
      });
  }
}
