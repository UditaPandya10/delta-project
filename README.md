# 🌍 Wanderlust

A full-stack web application for browsing, listing, and reviewing travel accommodations around the world. Built with Node.js, Express, MongoDB, and integrated with Mapbox for interactive location mapping.

## ✨ Features

- **Browse Listings**: Explore diverse accommodation options from beachfront cottages to mountain cabins
- **User Authentication**: Secure signup and login functionality using Passport.js
- **Create & Manage Listings**: Authenticated users can add, edit, and delete their own property listings
- **Reviews & Ratings**: Leave reviews and ratings for accommodations you've visited
- **Interactive Maps**: View property locations on interactive maps powered by Mapbox GL JS
- **Image Upload**: Upload property images using Cloudinary integration
- **Responsive Design**: Beautiful, mobile-friendly UI built with Bootstrap 5
- **Flash Messages**: User feedback for actions with styled notifications
- **Authorization**: Role-based access control - only listing owners can modify their properties

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database (MongoDB Atlas)
- **Mongoose** - ODM for MongoDB
- **Passport.js** - Authentication middleware
- **Express Session** - Session management

### Frontend
- **EJS** - Templating engine
- **Bootstrap 5** - CSS framework
- **Mapbox GL JS** - Interactive maps

### Additional Tools
- **Cloudinary** - Image hosting and management
- **Connect Flash** - Flash messages
- **Joi** - Schema validation
- **Method Override** - HTTP method support
- **EJS Mate** - Layout/partial support for EJS

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- Cloudinary account
- Mapbox account

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/UditaPandya10/delta-project.git
   cd delta-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_access_token
   ```

4. **Initialize the database with sample data (optional)**
   ```bash
   node init/index.js
   ```
   
   This will populate the database with sample listings for testing purposes.

5. **Start the application**
   ```bash
   node app.js
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:8080`

## 📂 Project Structure

```
delta-project/
├── controllers/       # Route controllers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/           # Mongoose models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/           # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/            # EJS templates
│   ├── includes/     # Partials (navbar, footer, flash)
│   ├── layouts/      # Layout templates
│   ├── listings/     # Listing views
│   └── users/        # User authentication views
├── public/           # Static assets
│   ├── css/
│   └── js/
├── utils/            # Utility functions
├── init/             # Database initialization
│   ├── data.js       # Sample listing data
│   └── index.js      # DB initialization script
├── middleware.js     # Custom middleware
├── schema.js         # Joi validation schemas
├── cloudConfig.js    # Cloudinary configuration
└── app.js           # Main application file
```

## 🎯 Usage

### Creating a New Listing
1. Sign up or log in to your account
2. Click "Create New Listing"
3. Fill in property details (title, description, price, location)
4. Upload an image
5. Submit the listing

### Adding Reviews
1. Navigate to any listing detail page
2. Scroll to the review section
3. Rate the property (1-5 stars) and write your review
4. Submit

### Managing Your Listings
- View all your listings from your profile
- Edit or delete listings you own
- Only you can modify your own listings

## 🔐 Authentication

The application uses Passport.js with local strategy for authentication:
- Passwords are hashed and salted automatically
- Sessions are stored in MongoDB using connect-mongo
- Protected routes require authentication

## 🗺️ Map Integration

Listings display their location on an interactive Mapbox map:
- Geocoding converts addresses to coordinates
- Markers show exact property locations
- Zoom and pan controls for exploration

## 🖼️ Image Upload

Images are uploaded and stored on Cloudinary:
- Automatic image optimization
- Secure URLs
- Efficient CDN delivery

## 🛡️ Security Features

- Password hashing with passport-local-mongoose
- Session-based authentication
- Input validation with Joi schemas
- Authorization checks for CRUD operations
- Environment-based configuration

## 🌱 Environment Variables

| Variable | Description |
|----------|-------------|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Session secret key for encryption |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `MAP_TOKEN` | Mapbox access token |

**Important**: Never commit your `.env` file to version control. Make sure `.env` is listed in your `.gitignore` file.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Udita Pandya**
- GitHub: [@UditaPandya10](https://github.com/UditaPandya10)

## 🙏 Acknowledgments

- Sample listing data includes properties from various global destinations
- UI inspiration from modern travel booking platforms
- Built as part of a web development learning project

## 📧 Contact

For questions or feedback, please reach out through GitHub issues or contact the repository owner.

---

**Happy Traveling! 🎒✈️**