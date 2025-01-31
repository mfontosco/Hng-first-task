

## HNG12 Public API

This API returns essential information including email, current datetime, and GitHub repository URL.

### Technology Stack
- Node.js
- Express.js

### API Documentation
**Endpoint:** `/api/info`  
**Method:** `GET`  
**Response:**
```json
{
    "email": "mstrings11@gmail.com",
    "timestamp": "2025-01-31T19:48:59.391Z",
    "github_url": "https://github.com/mfontosco"
}


Backlink:https://hng.tech/hire/nodejs-developers


### How to Run the code locally
Create a .env file with this
EMAIL=mstrings11@gmail.com
GITHUB_URL=https://github.com/mfontosco/Hng-first-task

###Install these dependencies
npm install express dotenv cors

### Run locally
npm run start

