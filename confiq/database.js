const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB is Connected SuccessFully"))
    .catch((err) => {
      console.log("DB Facing Connection Issue");
      console.log(err);
      process.exit(1);
    });
};
module.exports = connectWithDb;
