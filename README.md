## Course Listing Backend

This is the backend for `Course Listing` project. You will find the frontend [here](https://github.com/mdrobin45/CourseListing-frontend)

## Run Locally

Clone the project

```bash
git clone https://github.com/mdrobin45/CourseListing-backend.git
```

Go to the project directory

```bash
cd CourseListing-backend
```

Install dependencies

```bash
npm install
```

#### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`MONGO_URI` - MongoDB connection URI

`PORT` - Any Port. Example - 3000, 6000

`JWT_SECRET` - The secret code for JWT sign

`CORS_ORIGIN` - Frontend URL

For easier to setup environment variables, you can just rename `.env.development` file to `.env` from root of the project directory.

**Please Note:** You may need to edit `CORS_ORIGIN` from `.env.development` file base on your port of running frontend.

#### Start Server

Open project folder in terminal and run following command

```bash
  nodemon start
```

## Used Technology

**Server:** Express Js, Mongoose

**Database:** MongoDB
