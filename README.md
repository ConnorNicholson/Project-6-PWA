# eCommerce Project Phase 6
This repo is for Phase 6 of my eCommerce Website, AstroTech.
AstroTech is dedicated to carrying top of the line astronomical equipment.

## This Application is Live on Heroku!
https://react-proj6-pwa.herokuapp.com/

## Currently in this repo:
1. audits folder (contains Lighthouse audits for **before** and **after** PWA optimization
1. auth folder (contains jwt key to sign and verify tokens for user access)
1. client folder (contains a React App that is currently in sync with an express.js server in the server folder. And a httpClient.js folder for jwt-decode authentication functions)
1. controllers folder (contains CRUD methods and authentication method for users)
1. design folder (last updated ERD and FDD)
1. logging folder (contains HTTP requests handled through Morgan)
1. models folder (contains models for products and users in MongoDB format)
1. routes folder (contains Express Router API routes and and index.js file for routes used for user login/signup/logout/authentication)
1. screenshots folder (showcases working mobile application)
1. test folder (contains 4 unit tests using both mocha and chai)
1. .gitignore
1. LICENSE
1. Package.json / Package-lock.json
1. This README.md
1. server.js (contains the express server, connection to MongoDB, and makes the magic happen)

## Download Node Modules
To download the required node_modules, enter this command in your Terminal:
    ```
    npm install
    ```

## Additional Notes:
In order to access the `Products` page, the user must either signup or login. All login usernames and emails are kept on Mongo Atlas, and passwords are encrypted with SHA-256.

In the package.json file in the root directory, there are custom scripts that allow the developer to start both the Express server and the React App at the same time. To execute this script, open Terminal and run this line:
    ```
    npm start
    ```

## Screenshots of Working Mobile Application:

1. Icon for Mobile App
<img src="/screenshots/MobileApplicationIcon.png" width="400">

2. Mobile Home Page
<img src="/screenshots/MobileHomePage.png" width="400">

3. Mobile Signup Page
<img src="/screenshots/MobileSignupPage.png" width="400">

4. Mobile Login Page
<img src="/screenshots/MobileLoginPage.png" width="400">

5. Mobile Products Page
<img src="/screenshots/MobileProductsPage.png" width="400">

6. Mobile Contact Page
<img src="/screenshots/MobileContactPage.png" width="400">
