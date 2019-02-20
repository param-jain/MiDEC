console.log('Hollla');
    const url = `http://midec-dev.ap-south-1.elasticbeanstalk.com:8181/midec/adm/ar`;
    //const url = ROOT_URL+`adm/ar`;
    this.setState({ loading: true });
  
    
    const postData = {
      "pageNum": 0,
      "searchColumn": "string",
      "searchText": "string",
      "sortColumn": "string",
      "sortOrder": "string"
    }

    //var basicAuth = 'Basic ' + btoa('services-midec-ui:midec-services-ui2018');
  /*
    const config = {
      Headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
      }
    }

    axios.post( url, postData, {
      auth: {
        username: 'services-midec-ui',
        password: 'midec-services-ui2018'
      }})
*/
    fetch(url, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic c2VydmljZXMtbWlkZWMtdWk6bWlkZWMtc2VydmljZXMtdWkyMDE4'
      },
      body: JSON.stringify({
        "pageNum": 0,
        "searchColumn": "string",
        "searchText": "string",
        "sortColumn": "string",
        "sortOrder": "string"
      }),
      })
      //.then((response) => response.json())
      .then(res => {
        this.setState({
          error: res.error || null,
          loading: false,
          data: JSON.parse(res._bodyInit),
          originalData: JSON.stringify(res._bodyInit),
          refreshing: false,
        });
        this.arrayHolder = res;
        console.log("Home Screen Data: " + this.state.data[0].status)
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log("Error: Home Screen Data: " + JSON.stringify(error))
      });




      