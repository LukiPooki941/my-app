import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import PlayList from './PlayList'
import queryString from 'query-string';
let api_key = '';
let jsonResponse = {};
const defaultName = "My PlayList";
let user_id = ''
let testArray = [];
let playlistId = '';
//let uri = [];



function App() {
  const[song, setSong] = useState([])
  const[playlist, setPlaylist] = useState(defaultName)
  const[truth, setTruth] = useState(false)
  const[time, setTime] = useState(0);
  const[timer, setTimer] = useState(0)
  const[search, setSearch] =  useState('')
 // const[uri, setURI] = useState([])
 const[isLoading, setLoading] = useState(false);

     

 
useEffect(() => { const intervalId = setInterval(() => {setTime(prev => prev + 1)}, 1000) 
return () => {
  clearInterval(intervalId)
}}, [])




  const client_id = '5512ce31c5264f6eaa0f445c2c9fd0c1';
  //const redirect_uri = window.location.origin + "/callback";
  const redirect_uri = window.location.origin;
  const client_secret = '6ed25e1051ed4122a2113ad74c57652d';
  const baseURL = 'https://accounts.spotify.com/api/token';
  const scope = 'playlist-modify-public playlist-modify-private';
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
                api_key = `${jsonResponse.access_token}`;
               setTimer(jsonResponse.expires_in);
               if(api_key.length > 0){
                setTruth(true);
               } 
               }} catch(e){
            console.log(e);
        }

    }

function Authenticater() {
   window.location.href = url;
   
}

   useEffect(() => {if(api_key.length > 0){
        const newUrl = new URL(window.location);
        newUrl.searchParams.delete('code')
        history.replaceState(null, '', `${redirect_uri}`)
               } }, [api_key])
   useEffect( () =>  {getAuthorization()}, [])
   useEffect(() => {if(time == timer){
        setTruth(false)
        api_key = ''
        jsonResponse = {}
}}, [timer, time])
      

      console.log(jsonResponse)
      console.log(api_key)
      console.log(time)
      console.log(timer)

const handleSubmit = async(e) => {
  e.preventDefault();
  setLoading(true);
  try{
     const response = await fetch('https://api.spotify.com/v1/me', {headers:{
      'authorization': 'Bearer ' + api_key
     }});
     if(response.ok){
      const jsonResponse = await response.json();
      user_id = jsonResponse.id
      console.log(user_id)
      postPlaylist()
     }
  } catch(e) {
     console.log(e)
  }
}

const postPlaylist = async() => {
try{
const body = {
    "name": playlist
}
const response = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {method: 'POST', headers: { 'authorization': 'Bearer ' + api_key, 'Content-Type': 'application/json'}, body: JSON.stringify(body)});
if(response.ok){
  const jsonResponse = await response.json();
  console.log(jsonResponse)
  playlistId = jsonResponse.id
  addSongs();
  
}
}catch(e){
console.log(e)
}
}

const addSongs = async() => {
  
try{
const uri = song.map(track => (track.uri))
   //setURI(prev => ([...prev, track.uri]))
  //uri.push(track.uri)

console.log(uri)
const body = {
  "uris": uri,
    "position": 0
}
const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {method: 'POST', headers: { 'authorization': 'Bearer ' + api_key, 'Content-Type': 'application/json'}, body: JSON.stringify(body)});
if(response.ok){
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  setLoading(false);
  setSong([]);
  testArray = [];
}
}catch(e){
console.log(e)
}
}
  /*const handleSubmit = (e) => {
    for(let element in song)
      {
        console.log(song[element].uri)
      }
        console.log(playlist);
     e.preventDefault();
     setSong([]);
     setPlaylist(defaultName);
  }*/
  
const handleSearch = async (e) => {
  try{
const url = `https://api.spotify.com/v1/search?q=${search}&type=track`
const response = await fetch(url, { headers:{
'authorization': 'Bearer ' + api_key
  }})
  if(response.ok){
    const jsonResponse = await response.json()
    testArray = jsonResponse.tracks.items;
    //testArray = object.items
    console.log(testArray)
    
    
  }
  } catch(e){
    console.log(e)
  }
}

function handleChange({ target }){
        const user_input = target.value
        setSearch(user_input)
     }

     if(isLoading == true){

return(
<>
  <h1>Loading...</h1>
</>
)
}

if(truth == false){
  return(<>
    <h1>Welcome to Jammming</h1>
    <button onClick={() => {Authenticater();}}>press to begin</button>
  </>)

}  
 else {   
return(
  <>
  <h3>{time}</h3>
  <div>
  <SearchBar handleChange={handleChange} search={search}/>
  <button onClick={handleSearch}>Search</button>
  <SearchResults setSong={setSong} object={testArray} />
  <PlayList playName={playlist} setName={setPlaylist} setSong={setSong} object2={song}/>
  <button onClick={handleSubmit}>Save To Spotify</button>
  </div>
  </>

)
}
}
export default App

