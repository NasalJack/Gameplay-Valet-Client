# Gameplay Valet

Gameplay Valet is a repository of information about various boardgames. User should be able to access rules and tips for each game as a visitor or create an account to be able to curate a smaller list of only the games they own/play as well as being able to write notes for any game that will be stored for later reference.

The deployed app can be found at: https://gampeplayvalet.now.sh/

## Components

### React Components

All React components are stored in /src/components inside a folder named for the component it contains. That folder also contains the CSS files that each specific component uses and any test files for those components.

### API Services

All API fetch requests are handled by the files contained in /src/services

## Screenshots

<img width="1440" alt="Screen Shot 2019-09-20 at 3 56 27 PM" src="https://user-images.githubusercontent.com/47227929/65355728-96b29300-dbc0-11e9-9d1f-2da0c7934a88.png">

This is the landing page with options to create an account, login to an existing account, or view the list of board games.



<img width="1440" alt="Screen Shot 2019-09-20 at 3 56 45 PM" src="https://user-images.githubusercontent.com/47227929/65355859-ea24e100-dbc0-11e9-94f2-58dd13c5f1ed.png">

This is the login page, where a user can log in to an existing account. The signup page looks identical except for the title.



<img width="1440" alt="Screen Shot 2019-09-20 at 3 57 46 PM" src="https://user-images.githubusercontent.com/47227929/65355920-193b5280-dbc1-11e9-931c-b191b5b490a0.png">

This is the games list page that shows all of the games on the site. This page is reached using "games" in the nav bar or through the button on the landing page. Clicking on any of these games will open a new page with more information and options.



<img width="1440" alt="Screen Shot 2019-09-20 at 3 57 58 PM" src="https://user-images.githubusercontent.com/47227929/65355985-50116880-dbc1-11e9-84a1-d9ecdabc3ca7.png">

Here the filter is being used to display only games who's title or categories matches the search term. The sort option below the search bar is used to re-order the displayed list based on the chosen parameter.



<img width="1440" alt="Screen Shot 2019-09-20 at 4 05 22 PM" src="https://user-images.githubusercontent.com/47227929/65356073-89e26f00-dbc1-11e9-85d8-b4a95c638579.png">

This is the game page reached by clicking on one of the games from the previous list. This is the logged out view, where the options available are to view a page with the game's rules or a page with tips relating to that game. A new navigation bar also appears at the bottom of this page as well as the rules, tips, and notes pages for the game to quickly navigate between them.



<img width="1440" alt="Screen Shot 2019-09-20 at 3 58 59 PM" src="https://user-images.githubusercontent.com/47227929/65356173-c4e4a280-dbc1-11e9-9d90-8a273d9ecb48.png">

This is the rules page. It displays a PDF that contains the rules as well as a link towards the bottom to view the pdf on a separate page.



<img width="1440" alt="Screen Shot 2019-09-20 at 3 59 10 PM" src="https://user-images.githubusercontent.com/47227929/65356295-14c36980-dbc2-11e9-8846-02c648c70dfd.png">

This is the tips page which displays a bulleted list of helpful tips for playing the specific game.



<img width="1440" alt="Screen Shot 2019-09-20 at 3 59 25 PM" src="https://user-images.githubusercontent.com/47227929/65356325-2d338400-dbc2-11e9-9bef-3522c833ed8b.png">

This is the logged in view of the main game page which has new options available for logged in users. There is a button at the bottom to add or remove the game from the user's personal game list which is reached via My Games in the nav bar. There is also a new page for notes specific to the user and game.



<img width="1440" alt="Screen Shot 2019-09-20 at 3 59 39 PM" src="https://user-images.githubusercontent.com/47227929/65356434-77b50080-dbc2-11e9-8156-46537f392b31.png">

This is the My Games page which displays only games which the user has on their list of games. Clicking on any of these games opens up the same game page as clicking on a game from the list of all games.



<img width="1440" alt="Screen Shot 2019-09-20 at 4 00 09 PM" src="https://user-images.githubusercontent.com/47227929/65356476-95826580-dbc2-11e9-8b98-ecb3077405eb.png">



This is the notes page where a user can add, edit, and delete notes relating to the game it is tied to. These notes are stored on the database to be retreived by the user whenever they reload this page. Notes only display a title until one of them is expanded at which point it displays more information. Only one note can be expanded at a time and expanding a second note closes any notes already expanded. Expanding the note also provides the option to edit or delete the note.



<img width="1440" alt="Screen Shot 2019-09-20 at 4 00 42 PM" src="https://user-images.githubusercontent.com/47227929/65356539-b8147e80-dbc2-11e9-8b50-66b56f8beb0b.png">

This is the editor that appears when a user wants to edit a note. A similar editor appears when they want to add a new note.