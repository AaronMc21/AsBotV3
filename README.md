# AsBot v3
## About
After sometime not working on Discord Bots, I have returned, I made the choice of restarting the project from scratch since the code for the old bot is extreamly old and unmaintained.

 - Invite Link: https://discord.com/oauth2/authorize?client_id=987370053068521503&permissions=8&scope=bot%20applications.commands

## Prerequisite
 - Node (v17.4.0 was used for development and is known to work)
 - Bash or Powershell Terminal (zsh and powershell were both used in development and are known to work)

## TODO before Usage
These Commands only need to be run on intital setup.

To download and install the npm dependencies run in the Terminal: 
```bash
npm install
```

To Create the .env file run in the Terminal: 
```bash
npm run create
```
Open the `.env` file and add the required information.

## Usage
Run in Terminal
```bash
npm start
```
Use CTRL+C to kill the Bot.

## Registering new commands
When a new command is added in the `commands` directory run in the terminal:
```bash
npm run reg
```