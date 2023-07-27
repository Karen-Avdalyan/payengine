# PayEngine

## Features

- Authentication with JWT token
- Sign In and Sign Up features available
- Onboarding to PayEngine system

## Tech

Technologies used in project:

- [ReactJS]
- [node.js]
- [Express]

## Installation

Project was written in [Node.js](https://nodejs.org/) v18.14. So it will be preferable to use that version when installing the project.
For installation of the project you should also have [Docker](https://www.docker.com/) installed on your machine 

First let's setup the environment. Run following commands:

```sh
cd client
cp .env.example .env
cd ../server
cp .env.example .env
cd ../
```

Now you should have both `.env` files created in client and server. Some of values already fill in it. But some of them you should fill yourself.
After filling required values run following command to start the project:

```sh
docker compose up
```

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [ReactJS]: <https://legacy.reactjs.org/>
