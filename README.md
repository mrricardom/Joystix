# Joystix

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Joystix** is an app designed for to the casual through hardcore video-game enthusiast. Nostalgia often hits and a user is reminded of a game they once loved. Here, a user can sign-in and log their favorite videogames under their account. After adding them, they can see a broad picture of what games they've liked. They can then edit, add more games, or delete an entry.  A user could also see all of the games other users have added in the comprehensive library.

<br>

##Project URL 
https://joystix.netlify.app/

## MVP

The **Joystix** MVP includes:
- A viewable comprehnsive library with all games added by users
- User authentication and login with their own videogame library
- A Forum page for each game where comments are displayed
- Fully functioning front-end CRUD where users could: add, see, delete, and update their videogames.
- An image of the videogame, genre, year realeased, and rating displayed in product cards

<br>

### Goals

- Get project approved 9/15
- Finish backend CRUD by 9/15
- Finish frontend CRUD by 9/16
- Complete frontend components by 9/17
- Advanced CSS, MVP, first deployment by 9/18
- Post MVP Goals and Finishing Touches 9/21
- Presentation 9/22

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Library used to compile front-end app._ |
|   React Router   | _Used to make routes to shift screens in react._ |
| Axios | _Library used to make API calls to rails backend._ |
|     Rails      | _Backend database._ |
|     Bcrypt      | _Dependency that allows for user authorization._ |

<br>

### Client (Front End)

#### Wireframes

[Screens](https://whimsical.com/XA5HbecEKRmTqpHCpA8qqK)

#### Component Tree

> https://whimsical.com/LVfiTDcgfUezLEvChyhQJP

#### Component Hierarchy

``` structure

app
  |__ controllers
    |__ application_controller.rb
    |__ users_controller.rb
    |__ games_controller.rb
    |__ comments_controller.rb
    |__ authentication_controller.rb
  |__ models
    |__ game.rb
    |__ comment.rb
    |__ user.rb
client
  |__src
    |__ components
      |__Header.jsx
      |__Footer.jsx
      |__GameCard.jsx
    |__ containers
      |__GameContainer.jsx
    |__ layouts
      |__Layout.jsx
    |__ screens
      |__Comments.jsx
      |__GameCreate.jsx
      |__GameDetail.jsx
      |__GameEdit.jsx
      |__Games.jsx
      |__Login.jsx
      |__Register.jsx
    |__ services
      |__api-config.js
      |__auth.js
      |__games.js
      |__comments.js 
   App.js
 config
  |__ routes.rb
 db
  |__ schema.rb
  |__ seeds.rb  

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   y   | _The header will contain signin/register, name of site, and logo._               |
|  Footer  | functional |   n   |   n   | _Credentials will appear on the bottom of each page._       |
| Layout | functional |   n   |   y   | _Holds the header, footer, and body._                 |
|    GameCard    | functional |   y   |   y   | _Card where img, yr, genre, name, and rating appear._ |
|   GameContainer    |   screen    |   y   |   n   | _Parent of many screens, where api calls will be made._      |
|    Comments    | screen |   n   |   n   | _AKA Forum. Each game will display an image and comments._ |
|    GameCreate    | screen |   y   |   y   | _Screen where you add a game to your collection._ |
|    GameDetail    | screen |   y   |   y   | _Linked to display of just one  game card._ |
|    GameEdit    | screen |   y   |   y   | _Scren where you can edit the game._ |
|    Games    | functional |   y   |   n   | _A collection of the cards._ |
|    Login    | screen |   y   |   y   | _Page where you could login. Your games displayed after._ |
|    Register    | screen |   y   |   y   | _Register page where you can register._ |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Proposal    |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| Project Approval |    H     |     .5 hrs      |     3 hrs     |     3 hrs     |
| Set Up App skeleton and dependencies |    H     |     .5 hrs      |     .45 hrs   |     .45 hrs     |
| Set Up database, seed data, models, and controllers  |    H     |     2 hrs      |     1 hr     |     1 hr     |
| Implement Auth (backend) |    H     |     1 hr      |     1.5 hrs     |     1 hrs     |
| Create Login and Register pages  |    H     |     .5 hrs      |     .5 hrs     |     .5 hrs     |
| Implement Auth (frontend) |    H     |     2 hrs      |     2 hrs     |     2 hrs     |
| Game services, comments services, Game Container, and screens |    H     |     5 hrs      |     7 hrs     |     7 hrs     |
| Comprehensive Library + Game Card  |    H     |     1.5 hrs      |     1 hr     |     1 hr     |
| Forum Page displaying comments  |    H     |     1 hr      |     2 hrs     |     2 hrs     |
| Comprehensive Library + Game Card  |    H     |     1.5 hrs      |     1 hr     |     1 hr     |
| CSS Flexbox  |    H     |     2 hrs      |     4 hrs     |     4 hrs     |
| Mediaqueries  |    H     |     4 hrs      |     4 hrs     |     4 hrs     |
| Advanced CSS  |    M     |     2.5 hrs      |     4.5 hrs     |     4.5 hrs     |
| Averaging scores and replacing it with stars  |    L     |     1.5 hrs      |     0 hrs     |     0 hrs     |
| Favicon  |    L     |     .5 hrs      |     .25 hrs     |     .25 hrs     |
| Comprehensive Library (adding to collection)  |    L     |     2 hrs      |     0 hrs    |     0 hrs     |
| Adding "Shopping" Link|    L     |     2 hrs      |     0 hrs     |     0 hrs     |
| Send to friend link  |    L     |     2 hrs      |     0 hrs     |     0 hrs     |
| Debugging  |    H     |     6 hrs      |     7 hrs    |     7 hrs     |
| TOTAL               |          |    42 hrs      |     43.2 hrs     |     43.2 hrs     |

<br>

### Server (Back End)

#### ERD Model

> https://drive.google.com/file/d/1kI-408IzX9dA6yARfxga1MQsiGnX_k59/view?usp=sharing.

<br>

***

## Post-MVP

Some Post-MVP goals for Joystix includes:
- Add a feature to comprehensive library where users can add to their own library
- Change rating on the comprehensive library to be an average of all ratings, and to be stars
- Add market icon to link to a page where you can buy the game
- Change the favicon to a joystick
- Add a "send to a friend" link to entries

***

## Code Showcase

> ``` 
     return (
    <div className='mygames-body'>
      {currentUser ? (
        <div className='mygames-container'>
          <h2 className='my-games-title'>My Games</h2>
          <div className='my-games'>
            {games
              .filter((game) => currentUser.id === game.user_id)
              .map((game) => (
                <div className='oneGame' key={game.id}>
                  <img src={game.img_url} className='mygame-img' />
                  <p className='games-link'>
                    Title: <Link to={`/games/${game.id}`}>{game.name}</Link>
                  </p>
                  <p> Year: {game.yr} </p>
                  <p> Genre: {game.genre}</p>
                  <p> Rating: {game.rating}</p>
                  <div className='games-buttons'>
                    <Link
                      className='games-buttons'
                      to={`/games/${game.id}/edit`}
                    >
                      <button className='games-edit-button'>Edit</button>
                    </Link>
                    <button
                      className='games-delete-button'
                      onClick={() => handleDelete(game.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            <div className='add-button'>
              <Link to='/games/new'>
                <button className='add-button-inner'>Add a Game</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='sorry-page'>
          <img src={Mario} alt='8 bit-Mario' className='Mario' />
          <h1 className='sorry-text'>
            Sorry, your games are in another castle! Please log in to see your
            Games.
          </h1>
        </div>
      )}
    </div>
  )
  ```

## Code Issues & Resolutions

> I ran into issues adding games. Games were displaying via user id, and I didn't take into account a game could have many user ids. I will probably have to do a join table. Another issue I ran into was my auth wasnt working on the deployed site. I had JWT installed in the development.  
