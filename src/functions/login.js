const login = async (email, password) => {
  try {
    var formdata = new FormData();
    formdata.append("username", email);
    formdata.append("password", password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const response = await fetch("https://techquiz-api.herokuapp.com/login", requestOptions)
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