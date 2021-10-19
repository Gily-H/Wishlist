<p align="center">
 <img src=https://user-images.githubusercontent.com/67421795/137846102-b7c666e3-27fc-4370-b5c1-5b058ebfdd9c.png>
</p>

<h1 align="center"> Wishlist </h1>

Wishlist is a website where users can create personalized wish lists of items that they find from different web stores. See something you like? Add the item to one of your customized wishlists that fits its genre and refer back to the item when you're ready to click the purchase button.

## 📈 Website Progress
Wishlist is still in development. The core functionalities to create and view wishlists have been implemented. Ongoing plans have been set to bring more features to the website, including pricing total of items, adding items via url, and UX improvements.

## 🛠️ Quick Start Guide

1. Fork and clone the Wishlist repository to your preferred directory on your local machine. <br>

2. Check if you have Node.js and npm installed

```
node -v
npm -v
```
![wishlist-npm-node-cli](https://user-images.githubusercontent.com/67421795/137844985-ee3cb100-9b1e-4b69-bc44-987598793c66.png)
<br>

- If you do not have npm or Node.js installed, follow the installation instructions here:

```
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
``` 
<br>

3. Open two CLIs side-by-side <br>

![two-tab-terminal](https://user-images.githubusercontent.com/67421795/137938914-94154f8b-5c6f-48e6-a781-591d22c7958c.png)

4. Navigate to the following directory in the project folder on one CLI tab

```
./Wishlist/frontend
```
<br>

5. In the `frontend` folder on your command line, run the following command:

```
npm install
```
<br>

6. Then run the command below to start up the webpage

```
npm run start
```

![wishlist-frontend-cli](https://user-images.githubusercontent.com/67421795/137844325-262b5025-4688-421a-9fb1-0b0cbc4ac1c6.png)
<br>

7. Navigate to the following directory in the second CLI tab

``` 
./Wishlist/server
```
<br>

8. In the `sever` folder run the command:

```
npm install
```
<br>

9. In order to persist wishlists once created, a database is needed. The project is set up to use MongoDB as the database, however, due to security concerns, you will need to acquire your own personal MongoDB api key. You can view instructions at

```
https://docs.atlas.mongodb.com/getting-started/
```
<br>

10. Once you have your MongoDB api key, create a `.env` file in the `server` directory and paste the following content in the file. Repalce `<mongoDB-url-with-key>` with the `url` you find on your MongoDB cluster.

```
MDB_CONNECTION=<mongoDB-url-with-key>
```
<br>

11. Run the following command in the server directory on the CLI

```
npm run start
```
![wishlist-server-cli](https://user-images.githubusercontent.com/67421795/137844821-660409a0-ff70-4bac-aa8c-40b3e354ab94.png)
<br>

12. Now everything should be set up! Navigate the website and try to create a new wishlist! <br>

## Remarks

Wishlist is a personal project that I started in order to learn the basic components of creating a web application. This is my first foray into connecting frontend components to the backend server and then to a database. The goal of this project is to learn how to request data from a database and modify the data in the frontend to be saved back to the database.

## Contributors

Gilman Huang 
