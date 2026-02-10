# People Management REST API

This project implements a RESTful Web Service using **Node.js**, **Express**, and **MongoDB** to perform CRUD operations on a Person collection.

## Features
- Create a person
- View list of people
- Update person details
- Delete a person

## Person Fields
- Name
- Age
- Gender
- Mobile Number

## Technologies Used
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose

## REST API Endpoints

### GET /person
Returns a list of all people.

### POST /person
Creates a new person.

**Request Body (JSON):**
```json
{
  "name": "Ananya",
  "age": 22,
  "gender": "Female",
  "mobile": "9876543210"
}
