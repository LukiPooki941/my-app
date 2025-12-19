import queryString from 'query-string';
const client_id = '5512ce31c5264f6eaa0f445c2c9fd0c1';
const scope = 'user-read-private user-read-email';
const redirect_uri = 'http://127.0.0.1:5174/callback';
const url = 'https://accounts.spotify.com/authorize?' +
    queryString.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri
    })
let newString = '';

export function Authenticater() {
    window.location = url;
        let stringer = `${window.location.search}`;
        newString = stringer.slice(6, stringer.length-1)
     
}










    const getAuthorization = async () => {
    const client_secret = '6ed25e1051ed4122a2113ad74c57652d';
    const baseURL = 'https://accounts.spotify.com/api/token';
    if(newString.length > 0){
    console.log(newString);}
    else{
        console.log('error')
    }
        try{
            const response = await fetch(baseURL, 
                {
            method:'POST',
            headers: 
                    {
    
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            body: {
                grant_type:"authorization_code",
                code: newString,
                redirect_uri:"http://127.0.0.1:5174/callback"
                
            }
        }
    )         
            if(response.ok){
                const jsonResponse = await response.json()
                console.log(jsonResponse)
            }
        } catch(e){
            console.log(e);
        }
    }
    

    export default getAuthorization;