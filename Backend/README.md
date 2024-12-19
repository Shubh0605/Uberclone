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
```

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
