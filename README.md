# Simple NodeJS REST api with CRUD functionality

## Tech stack

- NodeJS
- Express (with express async handler)
- MogoDB + Mongoose

Run 'npm install' to install dependencies
Add MongoDB cluster
Add .env file containing: NODE_ENV, PORT, MONGO_URI,

### For HTTP requests: run 'npm run server'

- GET: http://localhost:4000/api/dogs/
- POST: http://localhost:4000/api/dogs/ + body
- PUT: http://localhost:4000/api/dogs/:id + body
- DELETE: http://localhost:4000/api/dogs/:id

#### Dog model:

- breed
- countryOfOrigin
- imageUrl
