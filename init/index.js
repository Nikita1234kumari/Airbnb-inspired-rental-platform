const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initData = require("./data");

const MONGO_URL = "mongodb+srv://nikitatiwary05_db_user:V86H85HMfQttK4kr@cluster0.wbe0wbs.mongodb.net/airbnb?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to DB");
}

main()
  .then(async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data initialized");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });