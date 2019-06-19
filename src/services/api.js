const signinURL = "http://localhost:3001/signin"


export function signin(username, password){
    return fetch(signinURL, {
        method: "POST", 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
      })
      .then(resp => resp.json())
}


    
export default { signin }