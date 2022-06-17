# AsBot v3
## About
After sometime not working on Discord Bots, I have returned, I made the choice of restarting the project from scratch since the code for the old bot is extreamly old and unmaintained.

 - Invite Link: https://discord.com/oauth2/authorize?client_id=987370053068521503&permissions=8&scope=bot%20applications.commands

## TODO before Usage
These Commands only need to be run on intital setup and when changes are made.

Run in Terminal
```bash
npm install
```

Create file named exactly `.env` with the following contents.
```env
DISCORD_TOKEN = YOUR_BOT_TOKEN
DISCORD_CLIENT_ID = YOUR_BOT_CLIENT_ID
DISCORD_DEV_GUILD_ID = YOUR_DEVELOPMENT_SERVER_ID
```

Run in Terminal
```bash
node regCommands.ts
```
## Usage
Run in Terminal
```bash
node main.ts
```
Use CTRL+C to kill the Bot.