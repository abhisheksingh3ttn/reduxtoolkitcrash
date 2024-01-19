# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## About Application
In this application we are creating a small Product-cart application where we will fetch products and add to store and display on home page. Also there will be a cart page where we list the items added to the cart from product/home page.
We add products to store only when it is used on multiple pages otherwise it is not a good practice,
Suppose we have categories of products to be displayed on home page, sidebar, & navigation bar, so we should add such data to store.
No asynchronous calls inside reducer because it runs synchronously and are Pure functions wiht no side effects. Means reducer cannot change any value outside its function. 
So for async calls we use Thunk middleware which is already configured in redux-toolkit. Thunk middleware is just a function which we export from Slice file. Thunk fn returns a function which has two parameters available - dispatch & getState.


