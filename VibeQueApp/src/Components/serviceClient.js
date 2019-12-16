const url = 'http://localhost:3000/api/songrequest';
const ngrokUrl = 'http://48959761.ngrok.io/api/songrequest'
const ipAddr = 'http://10.100.104.25:3000/api/songrequest'
const openportUrl = 'http://www.openport.io:6572/api/songrequest'

const postSong = async (songUrl) => {
  try {
    let res = await fetch(ipAddr, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trackUrl: songUrl })
    })
    return res;
  } catch (err) {
    console.log(err)
  }
};
export default postSong;