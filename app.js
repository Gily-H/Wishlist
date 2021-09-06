const express = require("express");

app = express();

app.get("/", function (request, response) {
  response.send("This is the wishlist home page");
});

app.get("/wishlist/:firstName-:lastName", function (request, response) {
  response.send(
    `This is the wishlist for ${request.params.firstName} ${request.params.lastName}`
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Wishlist app is currently running on port ${PORT}`);
});
