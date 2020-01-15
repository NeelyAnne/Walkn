
Walkn 

Walkn is an prototype app built through React.js and Node that utilizes MongoDB to render geolocations for pet lovers and socialites alike. Enjoy a day or night on the town with your furry friend without the worry. Walkn provides you witha map of some of Atlanta's hottest spots for pets and their owners to socialize, grab a bite, or just hang out. Not only does Walkn allow you view pre-loaded locations in the Atlanta area to visit, but it also allows you to log and rate your own locations so 
you can save them for future reference. Learn all the best pet-friendly place in ATL and start adding to your collection now!

Contributors:

Neely Mann (https://github.com/NeelyAnne)
Steven Rostkowski (https://github.com/atomguy18)
Charles (https://github.com/charlie-cyber)


Technology

NodeJS with ExpressJS server
Express-Session to build our authentication around
Bcrypt for hashing
Database
MongoDB/Mongoose
React.js
Axios-node module

Our database consists of 4 models/collections:

User
Locations

Challenges

Working through building out the authentication with forms, database, and local storage components was an experience that helped to layout the full Reactjs system in an easy and understandable way. A lot was learned in the process of writing most of our own authentication and verication methods with noteable exceptions of Bcrypt and Express-sessions instead of predesigned websites like IceBox. Additionally we hadn't considered the ephemeral storage of Heroku as being a major problem to solve as we weren't actually aware of the situation initially especially with the presence of two running servers from both MongoDB and Node.js. 

