### `First, we need to talk about starting the project`

- There are some things you need, such as node install (Go here for download https://nodejs.org/en/download/)
  - after downloading node, open a new terminal and run the falling command: node --version - if you recieve a response like this: v16.17.0
    -you have downloaded node
    -now clone the repo - open your terminal and past the following command in the directory of your choice: git clone https://github.com/asarogers/Leaderboard.git

- Any dependencies will be here as well
  - note, dependencies are libraries the project needs in order to run
    ### `**NONE **`

### `Starting the project`
    Open the terminal in VS Code (View -> Terminal)
    Type command:
        git checkout -b [insert your name]
        npm start
    Example:
        git checkout -b ace
        npm start 
    
### `Commit changes`
    Type following commands in terminal
        git add .
        git commit -m "[insert a message]"
        git push origin
    Example:
        git add .
        git commit -m "first commit"
        git push origin

Tasks:
_ Make a homepage that will display the users' names and corresponding number of problems solved
_ build a button, when pushed, displays a popup on the screen
_ popup should allow users to input a leetcode's username
_ setup a backend
_ use the leetcode api to retrieve the user's number of problems solved total
_ develop a method to compute the number of problems a user has solved within a week \* dynamically render all users saved in the database to the screen
