# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user details.

### Request Body:
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (201 Created):
- **Description**: User registered successfully.
  ```json
  {
    "token": "JWT_TOKEN_HERE",
    "user": {
      "_id": "USER_ID_HERE",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Error (400 Bad Request):
- **Description**: Validation failed or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Validation Errors:
- `Invalid Email`: If the email is not a valid email address.
- `First name must be at least 3 characters`: If the `firstname` is less than 3 characters.
- `password must be 6 character`: If the `password` is less than 6 characters.
- `All fields are required`: If any of the required fields (`firstname`, `email`, `password`) are missing.

### Example Request:
```sh
curl -X POST http://localhost:4000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response:
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "USER_ID_HERE",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to authenticate a user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) along with the user details if the credentials are valid.

### Request Body:
The request body should be a JSON object with the following fields:
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (200 OK):
- **Description**: User authenticated successfully.
  ```json
  {
    "token": "JWT_TOKEN_HERE",
    "user": {
      "_id": "USER_ID_HERE",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Error (400 Bad Request):
- **Description**: Validation failed or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Error (401 Unauthorized):
- **Description**: Invalid email or password.
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Validation Errors:
- `Invalid Email`: If the email is not a valid email address.
- `password must be 6 characters`: If the `password` is less than 6 characters.

### Example Request:
```sh
curl -X POST http://localhost:4000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response:
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "USER_ID_HERE",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to retrieve the profile of the authenticated user.

### Responses:

#### Success (200 OK):
- **Description**: User profile retrieved successfully.
  ```json
  {
    "_id": "USER_ID_HERE",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Error (401 Unauthorized):
- **Description**: User is not authenticated.
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request:
```sh
curl -X GET http://localhost:4000/users/profile \
-H "Authorization: Bearer JWT_TOKEN_HERE"
```

### Example Response:
```json
{
  "_id": "USER_ID_HERE",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated user. It clears the authentication token and adds it to the blacklist.

### Responses:

#### Success (200 OK):
- **Description**: User logged out successfully.
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Error (401 Unauthorized):
- **Description**: User is not authenticated.
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request:
```sh
curl -X GET http://localhost:4000/users/logout \
-H "Authorization: Bearer JWT_TOKEN_HERE"
```

### Example Response:
```json
{
  "message": "Logged out successfully"
}
```

# Captain Registration Endpoint

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns a JSON Web Token (JWT) along with the captain details.

### Request Body:
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required)
  - `plate`: A string with a minimum length of 3 characters (required)
  - `capacity`: A number representing the vehicle's capacity (required)
  - `vehicleType`: A string representing the type of vehicle (required, must be one of `car`, `motorcycle`, `auto`)

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses:

#### Success (201 Created):
- **Description**: Captain registered successfully.
  ```json
  {
    "token": "JWT_TOKEN_HERE",
    "captain": {
      "_id": "CAPTAIN_ID_HERE",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Error (400 Bad Request):
- **Description**: Validation failed or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Validation Errors:
- `Invalid Email`: If the email is not a valid email address.
- `First name must be at least 3 characters`: If the `firstname` is less than 3 characters.
- `password must be 6 character`: If the `password` is less than 6 characters.
- `Color must be at least 3 characters`: If the `color` is less than 3 characters.
- `Plate must be at least 3 characters`: If the `plate` is less than 3 characters.
- `Capacity must be a number`: If the `capacity` is not a number.
- `Invalid vehicle type`: If the `vehicleType` is not one of `car`, `motorcycle`, `auto`.

### Example Request:
```sh
curl -X POST http://localhost:4000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```

### Example Response:
```json
{
  "token": "JWT_TOKEN_HERE",
  "captain": {
    "_id": "CAPTAIN_ID_HERE",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

# Captain Login Endpoint

## Endpoint: `/captains/login`

### Method: POST

### Description:
This endpoint is used to authenticate a captain. It validates the input data, checks the captain's credentials, and returns a JSON Web Token (JWT) along with the captain details if the credentials are valid.

### Request Body:
The request body should be a JSON object with the following fields:
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (200 OK):
- **Description**: Captain authenticated successfully.
  ```json
  {
    "token": "JWT_TOKEN_HERE",
    "captain": {
      "_id": "CAPTAIN_ID_HERE",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Error (400 Bad Request):
- **Description**: Validation failed or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Error (401 Unauthorized):
- **Description**: Invalid email or password.
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Validation Errors:
- `Invalid Email`: If the email is not a valid email address.
- `password must be 6 characters`: If the `password` is less than 6 characters.

### Example Request:
```sh
curl -X POST http://localhost:4000/captains/login \
-H "Content-Type: application/json" \
-d '{
  "email": "jane.doe@example.com",
  "password": "password123"
}'
```

### Example Response:
```json
{
  "token": "JWT_TOKEN_HERE",
  "captain": {
    "_id": "CAPTAIN_ID_HERE",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

# Captain Profile Endpoint

## Endpoint: `/captains/profile`

### Method: GET

### Description:
This endpoint is used to retrieve the profile of the authenticated captain.

### Responses:

#### Success (200 OK):
- **Description**: Captain profile retrieved successfully.
  ```json
  {
    "_id": "CAPTAIN_ID_HERE",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

#### Error (401 Unauthorized):
- **Description**: Captain is not authenticated.
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request:
```sh
curl -X GET http://localhost:4000/captains/profile \
-H "Authorization: Bearer JWT_TOKEN_HERE"
```

### Example Response:
```json
{
  "_id": "CAPTAIN_ID_HERE",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

# Captain Logout Endpoint

## Endpoint: `/captains/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated captain. It clears the authentication token and adds it to the blacklist.

### Responses:

#### Success (200 OK):
- **Description**: Captain logged out successfully.
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Error (401 Unauthorized):
- **Description**: Captain is not authenticated.
- **Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request:
```sh
curl -X GET http://localhost:4000/captains/logout \
-H "Authorization: Bearer JWT_TOKEN_HERE"
```

### Example Response:
```json
{
  "message": "Logged out successfully"
}
```