
const signup = async (username, email, password) => {
  try {
    
    const data = { username, email, password};
    let returnValue = {}
fetch('https://techquiz-api.herokuapp.com/create', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  if(data['detail'] !== undefined) 
  alert(data.detail.error)
  else {
        alert('Welcome ' +data.username + '. Your account has been successfully created, you can login now.')        
  }
  returnValue = data
})
.catch((error) => {
  console.error('Error:', error);
})


}
finally{

}

return returnValue
}




export default signup