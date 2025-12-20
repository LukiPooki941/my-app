import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import PlayList from './PlayList'
import { Authenticater } from './userauth'
//import { api_key } from './userauth'
const defaultName = "My PlayList";
const my_test_array = [
{
  name: 'sound of silence',    
  artist: 'Simon and Garfunkel', 
  album: 'The best of Simon and Garfunkel',
  uri: "abc3g42i2iwem"
}, {
  name: 'Rise',
  artist: 'Andrea Day',
  album: 'Best of Andrea Day',
  uri: "jewnfjkqwfbq984923huief"
}
];


 


function App() {
  const[song, setSong] = useState([])
  const[playlist, setPlaylist] = useState(defaultName)

  const client_id = '5512ce31c5264f6eaa0f445c2c9fd0c1';
  const redirect_uri = 'http://127.0.0.1:5174/callback';
  const client_secret = '6ed25e1051ed4122a2113ad74c57652d';
  const baseURL = 'https://accounts.spotify.com/api/token';
  
  const getAuthorization = async () => {
        try{
          
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            console.log(code)
            const body = new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirect_uri
                    });
            const response = await fetch(baseURL, 
                {
            method:'POST',
            headers: 
                    {
    
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            body: body
        }
    )         
            if(response.ok){
                const jsonResponse = await response.json()
                console.log(jsonResponse);


    
            }
        } catch(e){
            console.log(e);
        }
      }

      getAuthorization();

  const handleSubmit = (e) => {
    for(let element in song)
      {
        console.log(song[element].uri)
      }
        console.log(playlist);
     e.preventDefault();
     setSong([]);
     setPlaylist(defaultName);
  }
  
  
return(
  <>
  <div>
  <button onClick={Authenticater}>press me</button>
  <SearchBar />
  <button type='submit'>Search</button>
  <SearchResults setSong={setSong} object={my_test_array} />
  <PlayList playName={playlist} setName={setPlaylist} setSong={setSong} object2={song}/>
  <button onClick={handleSubmit}>Save To Spotify</button>
  </div>
  </>

)
}

export default App
