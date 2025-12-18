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

export function Authenticater() {
    window.location = url;
    
}

export function onPageLoad() {

}












/*const client_id = '5512ce31c5264f6eaa0f445c2c9fd0c1';
const client_secret = '6ed25e1051ed4122a2113ad74c57652d';
const baseURL = 'https://accounts.spotify.com/api/token';

    const getAuthorization = async () => {
        try{
            const response = await fetch(baseURL, 
                {
                    headers: 
                    {
    
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
            },
            body: {
                grant_type:"authorization_code",
                
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

    getAuthorization();*/