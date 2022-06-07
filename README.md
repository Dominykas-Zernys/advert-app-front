# Advertise Yourself

'Advertise Yourself' is a web application built using Node.js and React. Its purpose is to let users promote their products, services, events, etc. All users can see the adverts that are submitted to the website, but only registered users can share new adverts. Users can also see only their own adverts in their own user page. You can search for adverts by their title, also filter by category.

When creating a new advert, you can select which style you want them to appear. There are 8 styles in total, with varying color schemes, borders, shadows and fonts. On the home page and user page you can only see the banners(smaller versions of the adverts), only after clicking on one you can see the full advert.

This is the front-end code for the application. The back-end can be found [here](https://github.com/Dominykas-Zernys/ay-app-back). The full running application can also be found on Digital Ocean, [here](https://ay-app-front-4isc7.ondigitalocean.app/).

## Pages

There are 8 pages in total created on this React application:

### Register:

- You can only see Register page if you are not logged in. Trying to reach it while logged in will redirect you to the Home page;
- You can Register a new user here. You cannot register with username or email that another user is already registered with;

### Login:

- You can only see Login page if you are not logged in. Trying to reach it while logged in will redirect you to the Home page.
- All you need to do is enter your correct email and password that you are registered with and click submit button.
- If your login is successful, you will be redirected to the Home page;

### Home:

- Everyone can see the Home page;
- This is the main page where you can see the banners of the adverts. While hovering your mouse pointer(or holding your finger pressed if you're on a mobile device) on the banner you can see the contacts. Clicking on the contact information copies that information to the clipboard;
- If you want to see a more detailed advert, you must click on the banner and it will take you to the Advert page;
- You can also search for adverts using the search bar or filter them by categories;

### Advert:

- Everyone can see the Advert page;
- After selecting advert and clicking on its banner from home or user page, you will see the corresponding advert page with its full description, main image and contacts;
- Clicking on contacts here will also copy them to your clipboard;
- You can delete the advert in this page if you are the creator.

### User:

- Only logged in users can see the user page. If you try to reach the user page when not logged in, you will be redirected to the Login page;
- You can see the banners of the adverts you have created here, also how many adverts you have created. Hovering and clicking on the banner here works the same way it works on the Home page, same with filtering and searching functions;

### About:

- Everyone can see the about page, but some links are disabled depending on whether you are logged in or not;
- There is a brief description about the fictional company 'Advertise Yourself' and the application itself. There are some explanations and general information about how to use the application;
- There are also previews of all 8 styles that you can choose to use for your advert display;

### New Advert:

- Only logged in users can see this page. If you try to reach this page when not logged in, you will be redirected to the Login page.
- This is the page where you can create a new advert. There is a form that you have to submit. In order to submit the form, no fields can be empty, both descriptions have to be proper length(there is a symbol count element to help you track how long the description is), uploaded image must not be larger than 1MG, no fields can exceed their symbol limit and they have to be filled in with proper values;
- The email field is already filled in with the email of the user, who is currently logged in. You can change this email to a different one if you want to;
- If, after submitting the advert, any of your fields are not filled in correctly, you will get an error message. If everything is in order, you will get a success message and all fields will be cleared.

### Error:

- Error page appears if you try to reach a wrong URL. It is identical whether you are logged in or not(except the navigation bar).

## Other information

- There are 24 components used in total in this application. Some were designed with the use of storybook component explorer. There are also 6 helper files with various functions and variables;
- Application uses UseState, UseEffect, UseContext, UseNavigate and UseParams hooks;
- Dotenv, react-router-dom, react-icons and storybook node packages were installed along with all the necessary React packages;
- The application is created with full responsive design for all screen sizes.

## How to use

### In order to use this application:

- Clone or download the master branch of this repository;
- Install npm packages using 'npm install' command in the main folder's terminal;
- Rename '.env.example' file to '.env' and change the angle brackets and text inside them to the variable value. The value should be the base URL for the back-end you are using. You can use back-end you download from [here](https://github.com/Dominykas-Zernys/ay-app-back) or use the online version on Digital Ocean, [here](https://ay-app-aeqfp.ondigitalocean.app/);
- Use command 'npm start' to start your application.
