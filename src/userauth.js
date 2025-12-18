import queryString from 'query-string';













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