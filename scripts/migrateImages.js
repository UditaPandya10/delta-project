// import mongoose from 'mongoose';
// import Listing from '../models/listing.js';  // Adjust the path if necessary

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/wanderlust')
//   .then(async () => {
//     console.log('Connected to MongoDB!');

//     // Find all listings where the 'image' field exists
//     const listings = await Listing.find({ image: { $exists: true } });
//     console.log('Listings found with image field:', listings.length);

//     if (listings.length === 0) {
//       console.log('No listings found that need migration');
//       return;
//     }

//     // Iterate over listings and process them
//     for (const listing of listings) {
//       if (typeof listing.image === 'object') {
//         // If the image field is an object, extract the URL and save it as a string
//         console.log('Updating object-type image field for listing:', listing._id);
//         listing.image = listing.image.url || '';  // Assuming the object has a 'url' field
//       } else if (typeof listing.image === 'string') {
//         // If the image is already a string, skip updating it
//         console.log('Image is already a string:', listing._id);
//       }

//       // Save the updated listing
//       try {
//         await listing.save();
//         console.log('Updated listing:', listing._id);
//       } catch (err) {
//         console.error('Error updating listing:', listing._id, err);
//       }
//     }

//     console.log('Migration complete!');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });
