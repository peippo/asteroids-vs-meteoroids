<img src="https://asteroids-vs-meteoroids.surge.sh/banner.png" alt="Banner image">

Decimate your opponents in a thrilling intergalactic space battle between good and evil and conquer the galaxy... ok fine, it's just tic-tac-toe.

### <a href="https://asteroids-vs-meteoroids.surge.sh/">Open the project</a>

Note: the server is running on Heroku and is probably sleeping, it will take a short while to wake up.

## Tech

-  [React](https://reactjs.org/)
-  [Three.JS](https://github.com/mrdoob/three.js/) - Javascript 3D library
-  [React-three-fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
-  [Socket.io](https://github.com/socketio/socket.io) - Real-time communication between browser and server

The Node.js server repository is at [asteroids-vs-meteoroids-server](https://github.com/peippo/asteroids-vs-meteoroids-server).

<img src="https://asteroids-vs-meteoroids.surge.sh/screenshot.png" alt="Screenshot">

## Client/server communication flowchart

<img src="https://asteroids-vs-meteoroids.surge.sh/flowchart.png" alt="Flowchart">

## Todo

-  Fix issue with camera drag causing unintended marker placements
-  Advanced game mode with a [4x4x4 grid](https://en.wikipedia.org/wiki/3D_tic-tac-toe#4x4x4,_two-player)
-  Single player mode against a bot
