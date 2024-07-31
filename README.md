# CRUD API's
CRUD API using NodeJS, Experss, MongoDB

## About

This Repository is for beginners of NodeJS who wants to implement ReST API.

### Prerequisites

Following are the softwares requried to install.
* [Node.js](https://nodejs.org) - Chrome's V8 Javascript Engine
* [MongoDB](https://mongodb.org) - NoSQL Database

### Install the project

- Install the packages mentioned in package.json file for getting all dependencies of the project.
  <br/>
  
  ```
  npm install --save
  ```

- Starting the application using below command
  <br/>
  
  ```
  npm run dev
  ```
## API Endpoints
	You can test the API endpoints using POSTMAN tool.

  - Create <br>
	- Method: POST
	- URL : http://localhost:3000/create
	- Payload: 
		```
		{
			"ranking":11,
			"name":"name 11",
			"dob": "15 July 1987",
			"country": "India",
			"score": "1365",
			"event": "100m"
		}
		```
  - Get All <br>
	- Method : GET
	- URL : http://localhost:3000/getMens
	- Response:
		```
		[
			{
				"_id": "66a73fcf01d4bb4ae24c9249",
				"ranking": 1,
				"name": "name 1",
				"dob": "1996-03-05T18:30:00.000Z",
				"country": "India",
				"score": 1428,
				"event": "100m",
				"__v": 0
			},
			{
				"_id": "66a7498fc38635832a485e1b",
				"ranking": 3,
				"name": "name 3",
				"dob": "1996-04-05T18:30:00.000Z",
				"country": "Sri Lanka",
				"score": 1300,
				"event": "200m",
				"__v": 0
			}
		]
		```

  - Get Record by id <br>
	- Method : GET
	- URL : http://localhost:3000/getMen/66a7498fc38635832a485e1b
	- Response:
		```
		{
			"_id": "66a7498fc38635832a485e1b",
			"ranking": 3,
			"name": "name 3",
			"dob": "1996-04-05T18:30:00.000Z",
			"country": "Sri Lanka",
			"score": 1300,
			"event": "200m",
			"__v": 0
		}
		```

  - Update <br>
	- Method: PATCH
	- URL : http://localhost:3000/update/66a7498fc38635832a485e1b
	- Payload: 
		```
		{
			"name":"updated name 13"
		}
		```

	- Response: 
		```
		{
			"_id": "66a7498fc38635832a485e1b",
			"ranking": 3,
			"name": "updated name 13",
			"dob": "1996-04-05T18:30:00.000Z",
			"country": "Sri Lanka",
			"score": 1300,
			"event": "200m",
			"__v": 0
		}
		```

  - Delete <br>
	- Method: DELETE
	- URL : http://localhost:3000/delete/66a7498fc38635832a485e1b

	- Response:
```
		{
			"_id": "66a7498fc38635832a485e1b",
			"ranking": 3,
			"name": "updated name 13",
			"dob": "1996-04-05T18:30:00.000Z",
			"country": "Sri Lanka",
			"score": 1300,
			"event": "200m",
			"__v": 0
		}
```

## Developers

* **Jitendra Kelhe** - [jitendrak1106](https://github.com/jitendrak1106)
