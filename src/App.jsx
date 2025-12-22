import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import PlayList from './PlayList'
import queryString from 'query-string';
let api_key = '';
let jsonResponse = {};
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
  const[truth, setTruth] = useState(false)
  const[time, setTime] = useState(0);
  const[timer, setTimer] = useState(0)

 
useEffect(() => { const intervalId = setInterval(() => {setTime(prev => prev + 1)}, 1000) 
return () => {
  clearInterval(intervalId)
}}, [])




  const client_id = '5512ce31c5264f6eaa0f445c2c9fd0c1';
  const redirect_uri = 'http://127.0.0.1:5174/callback';
  const client_secret = '6ed25e1051ed4122a2113ad74c57652d';
  const baseURL = 'https://accounts.spotify.com/api/token';
  const scope = 'user-read-private user-read-email';
  const url = 'https://accounts.spotify.com/authorize?' +
    queryString.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri
    })
  



  
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
              jsonResponse = await response.json()
                console.log(jsonResponse)
                api_key = `${jsonResponse.access_token}`;
               setTimer(10);
               if(api_key.length > 0){
                  setTruth(true)
               } 
               }} catch(e){
            console.log(e);
        }

    }

function Authenticater() {
   window.location.href = url;
   
}
   useEffect( () =>  {getAuthorization()}, [])
   useEffect(() => {if(time == timer){
        setTruth(false)
        api_key = ''
        jsonResponse = {}
}}, [timer, time])
      

      
      console.log(api_key)
      console.log(time)
      console.log(timer)



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
  





if(truth == false){
  return(<>
    <h1>Welcome to Jammming</h1>
    <button onClick={() => {Authenticater();}}>press to begin</button>
  </>)
} else {   
return(
  <>
  <h3>{time}</h3>
  <div>
  <SearchBar />
  <button type='submit'>Search</button>
  <SearchResults setSong={setSong} object={my_test_array} />
  <PlayList playName={playlist} setName={setPlaylist} setSong={setSong} object2={song}/>
  <button onClick={handleSubmit}>Save To Spotify</button>
  </div>
  </>

)
}
}
export default App

