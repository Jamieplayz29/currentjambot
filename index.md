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
DISCORD_TOKEN = YourTokenHere
PREFIX = =

```

I run an instance of Jam Bot on [heroku](https://www.heroku.com/) 24/7, [here](https://discord.com/api/oauth2/authorize?client_id=709026936919293984&permissions=0&scope=bot%20applications.commands) is the invite link.




### Support or Contact

set me money on patreon pls ty! [my Patreon](https://www.patreon.com/jambot29)
