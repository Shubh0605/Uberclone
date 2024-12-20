# User Registration API Documentation

## Register User Endpoint

### `POST /users/register`

Registers a new user in the system.

### Request Body

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phone": "string"
}
```

### Required Fields

- `name`: User's full name
- `email`: Valid email address
- `password`: Password (minimum 6 characters)
- `phone`: Valid phone number

### Response

#### Success Response

**Code**: 201 CREATED

```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "phone": "string"
  }
}
```

#### Error Responses

**Code**: 400 BAD REQUEST
- When required fields are missing or invalid

```json
{
  "success": false,
  "message": "Validation error",
  "errors": ["error details"]
}
```

**Code**: 409 CONFLICT
- When email already exists

```json
{
  "success": false,
  "message": "User with this email already exists"
}
```

**Code**: 500 INTERNAL SERVER ERROR
- When server encounters an

### Example

#### Example Request
```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "+1234567890"
  }'
```

#### Example Success Response
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "64f5a2b7c83f1234567890",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }
}
```

#### Example Error Response
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    "Email is invalid",
    "Password must be at least 6 characters"
  ]
}
```

## Login User Endpoint

### `POST /users/login`

Authenticates a user and returns an access token.

### Request Body

```json
{
  "email": "string",
  "password": "string"
}
```

### Required Fields

- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Response

#### Success Response

**Code**: 200 OK

```json
{
  "token": "string",
  "user": {
    "id": "string",
    "firstname": "string",
    "lastname": "string",
    "email": "string"
  }
}
```

#### Error Responses

**Code**: 400 BAD REQUEST
- When required fields are missing or invalid

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

**Code**: 401 UNAUTHORIZED
- When email or password is incorrect

```json
{
  "message": "Invalid email or password"
}
```

### Example

#### Example Request
```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

#### Example Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f5a2b7c83f1234567890",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com"
  }
}
```

## Get User Profile Endpoint

### `GET /users/profile`

Retrieves the authenticated user's profile information.

### Headers

- `Authorization`: Bearer token required
- Or valid token in cookies

### Response

#### Success Response

**Code**: 200 OK

```json
{
  "id": "string",
  "firstname": "string",
  "lastname": "string",
  "email": "string"
}
```

#### Error Response

**Code**: 401 UNAUTHORIZED
- When no token is provided or token is invalid

```json
{
  "message": "Unauthorized"
}
```

### Example

#### Example Request
```bash
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

#### Example Success Response
```json
{
  "id": "64f5a2b7c83f1234567890",
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com"
}


## Logout User Endpoint

### `GET /users/logout`

Logs out the current user by invalidating their token.

### Headers

- `Authorization`: Bearer token required
- Or valid token in cookies

### Response

#### Success Response

**Code**: 200 OK

```json
{
  "message": "Logged out successfully"
}
```

#### Error Response

**Code**: 401 UNAUTHORIZED
- When no token is provided or token is invalid

```json
{
  "message": "Unauthorized"
}
```

### Example

#### Example Request
```bash
curl -X GET http://localhost:3000/users/logout \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

#### Example Success Response
```json
{
  "message": "Logged out successfully"
}
```

# Captain API Documentation

## Register Captain

`POST /captain/register`

Register a new captain in the system.

### Request Body
```json
{
    "fullname": {
        "firstname": "John", // minimum 3 characters
        "lastname": "Doe"    // optional
    },
    "email": "john@example.com", // must be valid email format
    "password": "password123",   // minimum 6 characters
    "vehicle": {
        "color": "black",       // minimum 3 characters
        "plate": "ABC123",      // minimum 3 characters
        "capacity": 4,          // must be integer >= 1
        "vehicleType": "car"    // must be one of: "car", "motorcycle", "auto"
    }
}
```

### Success Response (201 Created)
```json
{
    "token": "eyJhbGciOiJIUzI1...", // JWT auth token
    "captain": {
        "_id": "507f1f77bcf86cd799439011",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
    }
}
```

## Login Captain

`POST /captain/login`

Authenticate a captain and get access token.

### Request Body
```json
{
    "email": "john@example.com", // must be valid email format
    "password": "password123"    // minimum 6 characters
}
```

### Success Response (200 OK)
```json
{
    "token": "eyJhbGciOiJIUzI1...", // JWT auth token
    "captain": {
        "_id": "507f1f77bcf86cd799439011",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

## Get Captain Profile

`GET /captain/profile`

Get the authenticated captain's profile.

### Headers
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1..." // JWT token required
}
```

### Success Response (200 OK)
```json
{
    "captain": {
        "_id": "507f1f77bcf86cd799439011",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
    }
}
```

## Logout Captain

`GET /captain/logout`

Logout the current captain and invalidate token.

### Headers
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1..." // JWT token required
}
```

### Success Response (200 OK)
```json
{
    "message": "Logout successfully"
}
```

### Common Error Responses

#### Validation Error (400 Bad Request)
```json
{
    "errors": [
        {
            "msg": "First name must be at least 3 characters long",
            "param": "fullname.firstname",
            "location": "body"
        }
    ]
}
```

#### Authentication Error (401 Unauthorized)
```json
{
    "message": "Invalid email or password"
}
```

#### Already Exists Error (400 Bad Request)
```json
{
    "message": "Captain already exist"
}
```
