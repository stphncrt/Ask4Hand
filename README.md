![Project showcase](./ask4hand.gif)

# Class 35 final project

This is the final project for the HackYourFuture curriculum we did as a class using the MERN stack by following the agile methodology with our team and a group of mentors. A quick guide to what we built:

> Every business has an expert. Especially in the time period we live in. Do you have a house? Who will fix it when there is a breakdown? Who will paint your house? Or do you need a website? Who will build your website? So, would you like to contact the freelancer you need directly?
Ask4Hand is the app you want. Find who you need easily. Make a comparison between freelancers and contact the ones you want directly.
Or, as a freelancer, do you want your customers to find you easily and contact you? All you have to do is sign up and that is all!

## Demo

Online deployment of this project is available at [Ask4Hand](https://c35-zzpers.herokuapp.com)

You can use the below credentials to test the app as a freelancer persona.

```code
email: isabelle@gmail.com
password: 1234Test
```

## 1. Setup

First, to setup all the directories run the following in the main directory:

`npm install`

`npm run setup`

The first command will install `cypress` and some small libraries needed for running the rest of the commands. The second will go into the `client` and `server` directories and set those up to be ran.

In the `client` and `server` directory there are two `.env.example` files. Create a copy and rename that to `.env`. Then follow the instructions in those files to fill in the right values.

To run the app in dev mode you can run the following command in the main directory:

`npm run dev`

<p align="right">(<a href="#top">back to top</a>)</p>

## 2. Code structure

```
client
├── public
└── src
|   └── __tests__
|   └── __testUtils__
|   └── api
|   └── components
|   └── hooks
|   └── pages
|       └── __tests__
|       └── components
|   └── util
|   App.jsx
|   AppWrapper.jsx
|   index.jsx
cypress
|   └── fixtures
|   └── integration
|   └── plugins
|   └── support
server
└── src
    └── __tests__
    └── __testUtils__
    └── api
    └── controllers
    └── db
    └── middleware
    └── models
    └── routes
    └── util
    app.js
    index.js
```

<p align="right">(<a href="#top">back to top</a>)</p>

### 2.1 Client structure

- `public` || public facing client code
- `__tests__` || any `jest` tests for specific components will be in a `__tests__` folder on the same level
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `api` || all of our api requests for client side that are used over multiple pages
- `components` || all of our shared components that are used over multiple pages
- `hooks` || all of our custom hooks
- `pages` || the page components of our app, any routing will go between these components
- `pages/components` || components used specifically on those pages
- `util` || any utility functions that can be used anywhere on the client side
- `App.jsx` || Our main jsx file of the client
- `App.jsx` || Our wrapper file for App.jsx of the client
- `index.jsx` || the start point of the client

### 2.2 Cypress structure

- `fixtures` || any data/files that `cypress` needs can be placed here
- `integration` || all of our tests are in here, separated in folders based on the pages in our app
- `plugins` || any plugins for our `cypress` configuration can be placed here
- `support` || custom commands and other support files for `cypress` can be placed here

### 2.3 Server structure

- `__tests__` || any `jest` tests for the api endpoints as that is our testing strategy for the backend
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `api` || all of our api requests for server side that are used over multiple pages
- `controllers` || all of our controller functions that interact with the database
- `db` || all of our configuration for the database
- `controllers` || all of our middleware functions that checks authorisation for the users
- `models` || all of our `mongoose` models will be placed here
- `routes` || code to match up the API with our controllers
- `util` || any utility functions that can be used anywhere on the server side
- `index.js` || the start point of the server

<p align="right">(<a href="#top">back to top</a>)</p>

## 3. Stack / external libraries

The base stack of the app is a MERN stack (Mongoose, Express, React, Node). Next to that we make use of the following extras:

### 3.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `webpack` / `html-webpack-plugin` || To bundle our React app and create a static app to host. See [docs](https://webpack.js.org/)
- `husky` || To run our tests and linter before committing. See [docs](https://typicode.github.io/husky/#/)
- `eslint` || To check our code. We have different configurations for frontend and backend. You can check out the configuration in the `.eslintrc.(c)js` files in the respective `client` and `server` folders. See [docs](https://eslint.org/)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

For more information on how these work together including the automatic deployment to heroku, have a look at our detailed [DEV](./DEV.md) file.

### 3.2 Client-side libraries

- `@testing-library/*` || We use React Testing Library to write all of our tests. See [docs](https://testing-library.com/docs/react-testing-library/intro/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `jest-fetch-mock` || To mock out the backend for our testing purposes. See [docs](https://github.com/jefflau/jest-fetch-mock#readme)
- `prop-types` || To type-check our components. See [docs](https://github.com/facebook/prop-types)
- `material-ui` || To create our UI. See [docs]<https://mui.com/>)
- `@react-google-maps/api` || To use google MAP API in our app. See [docs](https://www.npmjs.com/package/@react-google-maps/api)
`axios` || For all fetch operations to get data from API's. See [docs](https://github.com/axios/axios)
`formik` || To manage forms with complex validation. See [docs](https://formik.org)
`react-router-dom` || To use Routing in React. See [docs](https://reactrouter.com/web/guides/quick-start)
`react-swipeable-views` || To use react component for swipeable views. See [docs](https://react-swipeable-views.com/)
`react-toastify` || To use React Notification in our App. See [docs](https://www.npmjs.com/package/react-toastify)
`yup` || To use Object schema validation for our App. See [docs](https://www.npmjs.com/package/yup)

### 3.3 Server-side libraries

- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `supertest` || To more easily test our endpoints. See [docs](https://github.com/visionmedia/supertest#readme)
- `mongodb-memory-server` || To mock out our database in our backend tests. See [docs](https://github.com/nodkz/mongodb-memory-server)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)
`axios` || For all fetch operations to get data from API's. See [docs](https://github.com/axios/axios)
`bcrypt` || To create hash-passwords for users for security. See [docs](https://www.npmjs.com/package/bcrypt)
`cookie-parser` || To parse Cookie header and populate req.cookies with an object keyed by the cookie names.See [docs](https://www.npmjs.com/package/cookie-parser).
`joi` || To use schema description language and data validator for server side. See [docs](https://www.npmjs.com/package/joi)
`jsonwebtoken` || To use compact URL-safe means of representing claims to be transferred between two parties. See [docs](https://www.npmjs.com/package/jsonwebtoken)

<p align="right">(<a href="#top">back to top</a>)</p>

## 4. Further Improvements

- To provide users sign uo and login so tha they can comment about a freelancer or can rate them.
- A app in message system that allows direct communication between users and freelancers
- Adding payment functionality
- A functionality to be able to upload images from local.
- A confirmation mail to the user's email address when signed up

We, as a TheLastNodeBenders team, really would like to hear your amazing ideas about further improvements!! To do so, please reach us!</a>

<p align="right">(<a href="#top">back to top</a>)</p>

## 5. Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## 6. Contact

You can contact with any of us.

`Ertugrul` ||  [Email](ertugrulaktn@gmail.com)

`Huseyin` ||  [Email](cretestephen@gmail.com)

`Aykut` ||  [Email](aykutuludag26@gmail.com)

`Ensar` ||  [Email](doganermansur@icloud.com)

<p align="right">(<a href="#top">back to top</a>)</p>
