const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 2592000000, //Expires in one month. 30 * 24 * 60 * 60 * 1000
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
