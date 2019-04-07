# Marvel Voting App

React<br>
Express<br>
Node<br>
GraphQL<br>
Firebase<br>

To run the project, open terminal to your preferred working directory and:

```
git clone https://github.com/mmason33/Marvel.git
```

In this project there is a React front end running at `http://localhost:3000` and a Express backend running at `http://localhost:5000`. You'll need to have both running for this app to work correctly.

From the terminal, change your working directory to the `Marvel` directory.
```
cd Marvel
npm install
```


After all the packages have been installed, run `npm start` to run the React front end on `http://localhost:3000`. Once that is running open another terminal window, change the working directory to `Marvel` and run `node server.js`. You should see success messages from both commands.

Once the React and Express are running, you can visit the project at `http://localhost:3000`.

Example of a contest in progress:
```
http://localhost:3000/STgyQp2djE
```

Example of the Express endpoint used to wrap a GraphQL endpoint:
```
Express route: http://localhost:5000/api/characters/3
Third Party API: https://staging.api.marvelql.com

```

Things to note:

1. Click on the character image to vote for that character.
2. YOU CAN ONLY VOTE ONCE.
3. Project is responsive (Although it can't run on a mobile device, it's not deployed).
4. Project has a lot of development settings (This is a purely presentational project and it never intended to be in a production env).
5. There is real time data transfer between client sessions, all clients will be updated when the database changes.
6. Visit the root (`https://localhost:3000`) to create a new randomly generated contest.
7. Each contest has a unique url that correspondings to a data structure.
8. The url's are shareable and can visited as long as the data exists.
9. If the url visited is not the root and does not match a database key then a new contest/url will be created.
10. Express was used to obfuscate the api origin.
11. The Express api wrapper is at `http://localhost:5000/api/characters/3` with the last part of the url being a request variables (`req.params`).
