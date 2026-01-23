const path = require("path");
if(process.env.NODE_ENV != "production") {
    // Load env from project root because this script runs from /init
    require('dotenv').config({ path: path.join(__dirname, "../.env") });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to db");
        await initDB();
        await mongoose.connection.close();
        console.log("Connection closed");
    } catch(err) {
        console.log(err);
    }
}

const initDB = async () => {
    // Delete existing data
    await Listing.deleteMany({});
    await User.deleteMany({});
    
    // Create a demo user
    // TODO: Set your own credentials before running this script
    const demoUser = new User({
        email: "your_email@example.com",  // Change this
        username: "your_username"          // Change this
    });
    
    const registeredUser = await User.register(demoUser, "your_password");  // Change this
    console.log("Demo user created:", registeredUser.username);
    
    // Assign all listings to the demo user
    initData.data = initData.data.map((obj) => ({...obj, owner: registeredUser._id}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialised with demo user as owner");
};

main();