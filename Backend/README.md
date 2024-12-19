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
