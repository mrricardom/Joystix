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

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

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
| Project Approval |    H     |     .5 hrs      |     TBD     |     TBD     |
| Set Up App skeleton and dependencies |    H     |     .5 hrs      |     TBD    |     TBD     |
| Set Up database, seed data, models, and controllers  |    H     |     2 hrs      |     TBD     |     TBD     |
| Implement Auth (backend) |    H     |     1 hr      |     TBD     |     TBD     |
| Create Login and Register pages  |    H     |     .5 hrs      |     TBD     |     TBD     |
| Implement Auth (frontend) |    H     |     2 hrs      |     TBD     |     TBD     |
| Game services, comments services, Game Container, and screens |    H     |     5 hrs      |     TBD     |     TBD     |
| Comprehensive Library + Game Card  |    H     |     1.5 hrs      |     TBD     |     TBD     |
| Forum Page displaying comments  |    H     |     1 hr      |     TBD     |     TBD     |
| Comprehensive Library + Game Card  |    H     |     1.5 hrs      |     TBD     |     TBD     |
| CSS Flexbox  |    H     |     2 hrs      |     TBD     |     TBD     |
| Mediaqueries  |    H     |     4 hrs      |     TBD     |     TBD     |
| Advanced CSS  |    M     |     2.5 hrs      |     TBD     |     TBD     |
| Averaging scores and replacing it with stars  |    L     |     1.5 hrs      |     TBD     |     TBD     |
| Favicon  |    L     |     .5 hrs      |     TBD     |     TBD     |
| Comprehensive Library (adding to collection)  |    L     |     2 hrs      |     TBD    |     TBD     |
| Adding "Shopping" Link|    L     |     2 hrs      |     TBD     |     TBD     |
| Send to friend link  |    L     |     2 hrs      |     TBD     |     TBD     |
| Debugging  |    H     |     6 hrs      |     TBD     |     TBD     |
| TOTAL               |          |    42 hrs      |     TBD     |     TBD     |

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

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
