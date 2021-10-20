const login = async (email, password) => {
  try {
    var formdata = new FormData();
    console.log(email, password);
    formdata.append("username", email);
    formdata.append("password", password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const response = await fetch("http://techquiz.us-east-1.elasticbeanstalk.com/login", requestOptions)
    const data = await response.json()
    if(!data.detail){
      return data
    }else{
      throw data.detail.error
    }
    
  } catch (error) {
    throw error
  }
}

export default login