# VideoTube Backend API

A robust backend system for a video streaming platform built with Node.js, Express, and MongoDB.

## 🚀 Features

- Authentication & Authorization
  - User registration and login
  - JWT based authentication
  - Password encryption using bcrypt
  - Access and refresh token mechanism

- User Management
  - Profile management
  - Avatar and cover image upload
  - Watch history tracking
  - Channel subscription system

- Video Management
  - Video upload with thumbnail
  - Video publishing controls
  - View count tracking
  - Like/Unlike functionality
  - Comment system
  - Playlist management

- Advanced Features
  - Aggregation pipelines for complex queries
  - Cloudinary integration for media storage
  - Pagination support
  - Search functionality

## 🛠️ Technical Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **File Upload**: Multer
- **Cloud Storage**: Cloudinary
- **Authentication**: JWT (jsonwebtoken)
- **Password Encryption**: bcrypt
- **Others**: cors, cookie-parser, dotenv

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── video.controller.js
│   │   ├── comment.controller.js
│   │   ├── like.controller.js
│   │   ├── playlist.controller.js
│   │   └── subscription.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── video.model.js
│   │   ├── comment.model.js
│   │   ├── like.model.js
│   │   ├── playlist.model.js
│   │   └── subscription.model.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── multer.middleware.js
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   └── cloudinary.js
│   ├── routes/
│   │   └── user.routes.js
│   ├── app.js
│   └── index.js
└── package.json
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables**
Create a `.env` file in the root directory with the following variables:
```env
PORT=8000
MONGODB_URI=your_mongodb_uri
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. **Start the server**
```bash
npm run dev
```

## 📚 API Documentation

### User Routes
- POST `/api/v1/users/register` - Register a new user
- POST `/api/v1/users/login` - Login user
- POST `/api/v1/users/logout` - Logout user
- POST `/api/v1/users/refresh-token` - Refresh access token
- PATCH `/api/v1/users/update-account` - Update user details
- PATCH `/api/v1/users/avatar` - Update user avatar
- PATCH `/api/v1/users/cover-image` - Update user cover image

### Video Routes
- GET `/api/v1/videos` - Get all videos
- POST `/api/v1/videos` - Upload a new video
- GET `/api/v1/videos/:videoId` - Get video by ID
- PATCH `/api/v1/videos/:videoId` - Update video
- DELETE `/api/v1/videos/:videoId` - Delete video

### Comment Routes
- GET `/api/v1/comments/:videoId` - Get video comments
- POST `/api/v1/comments/:videoId` - Add comment
- PATCH `/api/v1/comments/:commentId` - Update comment
- DELETE `/api/v1/comments/:commentId` - Delete comment

## 📄 License

This project is licensed under the ISC License.