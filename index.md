## Welcome to the Jam Bot docs page

Basically jambot is a pretty dead bot coz i dont know much about javascript but its getting better! 

### The code

The code is available on [This Page](https://github.com/Jamieplayz29/currentjambot) essentially, keep the command handler part of bot.js the same but then for every new file/command you add, use this template putting the executed code under the execute curly bracket and the name as the command (text that will follow after the prefix when used on discord):

```javascript
module.exports =
{
    name: '',
    description: '',
    execute(message, args) {

    }      
} 
```
In order to use the bot you will need to put your discord token and prefix into the .env file in this format:

```
DISCORD_TOKEN = <YourTokenHere>
PREFIX = <YourPrefixHere>
CLIENT_ID = <YourBotClientIDHere>
MONGODB_URL = <MongoDBAccessURLHere>
SPOTIFY_CLIENT_ID = <YourSpotifyAPIClientIDHere>
SPOTIFY_CLIENT_SECRET = <YourSpotifyClientSecret>
YOUTUBE_COOKIE = <YourYoutubeCookie>


```

### Whats the spotify API used for?

The Spotify API is used by the [Distube](https://distube.js.org/#/) library in order to play songs from spotify links.

### How do i get a Spotify API Client ID?
It's pretty self explanitory, just go onto the [Spotify Developer](https://developer.spotify.com/) website and create an application and the Client ID and Secret should be there.

### What is the Youtube cookie and why do I need it?
The Youtube cookie is used any time the bot fetches a youtube video to play the music from. Although the youtube cookie is not required, it is recommended to use as it reduces errors when queuing too many songs and stuff like that. Basically reduces the chances of the bot getting rate limited by Youtube and getting it is pretty easy.
To get it:
1. Go on Youtube and login to an account. I used a new account for the bot because im not sure if using the cookie affects the recommended algorithm for that account.
2. Inspect element on the youtube page and on the inspect overlay, go on the network tab.
3. Now keeping the inspect window open. Refresh the page.
4. Alot of entries will pop up but wait for the page to finish refreshing and then scroll to the top of the network window. Either at the top or near the top there should be an entry that says youtube.com, on Chrome it will say under type: Document, and on Firefox it will say File: /. Click on this entry
5. On the right side the entry will open and there will be 2 sections. Request headers which we dont need, and Response headers which we need. Under Response headers look for Cookie.
6. Copy the text after cookie from where it says CONSENT... And paste this text into the .env file under the YOUTUBE_COOKIE variable.

Example:
```
YOUTUBE_COOKIE = CONSENT=YES+GB.en; PREF=tz=Europe.London; <loads of text seperated by semi-colons>
```


I run an instance of Jam Bot on [heroku](https://www.heroku.com/) 24/7, [here](https://discord.com/api/oauth2/authorize?client_id=709026936919293984&permissions=0&scope=bot%20applications.commands) is the invite link.




### Support or Contact

set me money on patreon pls ty! [my Patreon](https://www.patreon.com/jambot29)
