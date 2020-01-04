export class Api {
  serverpath = 'http://13.233.125.129:8081';
  constructor() {}

  /**
   * function for the get api
   * @param param: link for the api
   */
  getApi(param) {
    return fetch(this.serverpath + param, {
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
   * function for the post api
   */
  postApi(param) {
    return fetch(this.serverpath + param.api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param.data),
    })
      .then(res => res.json())
      .then(response => {
        return response;
    }).catch(err => {
        return err;
      });
  }
}
