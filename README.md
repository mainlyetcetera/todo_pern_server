# Todo with full PERN stack backend

## What is this?
This project was to get experience building an entire full-stack app.
I chose the PERN stack 
- postgresql
- express
- react
- node
This is a server I built to store to-dos. 

## Where's the front end?!
- The front end is located [here](https://github.com/mainlyetcetera/todo_pern)

## How do I install the server?
- clone down [this repo](https://github.com/mainlyetcetera/todo_pern_server)
  - there is no need to fork
- cd into the server
- run `node index.js`
  - if you have nodemon installed, you can run `nodemon index.js` instead 
  - to install nodemon globally (recommended), run `npm install -g nodemon` 

## Can I interact with the server directly?
- Yes you can!
- open a new terminal tab
  - in new terminal tab, run `psql -U postgres`
  - the password is `moneK324`

<img width="500" alt="what-postgres-looks-like" src='https://user-images.githubusercontent.com/70294115/108639621-bce1ff80-7452-11eb-9a6e-5e6a346e385c.png'>

### What can I do once I've connected to the server?
- you can run `\l` to see all servers to which you have access
- you can run `\c` to pick a server
- you can run `\dt` to see all relations in that server
  - this is important
  - it lets you see everything you can access 
- once you have selected a server
  - you may run `SELECT * FROM <stackName>` 
  - this will show you all data currently on that stack
- to exit this view entirely, you may run `\q` 

<img src='https://media.giphy.com/media/kY3XjKDjz4CrOTgDhq/giphy.gif'>

### What am I doing with this?
- run the server with `npm start`
- the port should be listening on port 5000
- once the server is running, there's not much else to do!
- the server will track your todos, including edits and deletions
- each todo made is given a unique id, so they will always be tracked 

<img width="500" alt="starting-the-server" src='https://user-images.githubusercontent.com/70294115/108639653-ea2ead80-7452-11eb-9f36-1eb068916e8c.png'>
