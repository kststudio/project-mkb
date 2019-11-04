# API Documentation

# Users
## POST /signup
### Request body:
| Property                | Description         |
|-------------------------|---------------------|
| email: String           | email address       |
| password: String        | password            |
| confirmPassword: String | password to confirm |

### Response:
| Property                | Description                               |
|-------------------------|-------------------------------------------|
| _id: String             | document id generated by mongodb          |
| uid: String             | user id generated by firebase             |
| email: String           | email address                             |
| displayName: String     | if available from google, otherwise null  |
| preferences: [String]   | empty on signup, update after questionare |
| photoURL: String        | if available from google, otherwise null  |
| country: String         | empty on signup, update after questionare |
| cuisine: String         | empty on signup, update after questionare |
| createdAt: String(Date) | generated by mongodb                      |
| updatedAt: String(Date) | generated by mongodb                      |
| token: String           | id token                                  |



### Errors:
  - username, password, confirm password are empty
  - email format is not correct
  - password and confirmPassword don't match
  - username already exist (firebase)
  - password length is 6 or less (firebase)

### Example response (JSON):
```
{
  "_id": "5db74f50af6e1e2962b12cfc",
  "uid": "kEfnyjtOEpX2MIKBQrVtDv9yTEm2",
  "email": "test@test.com",
  "displayName": "",
  "photoURL": "",
  "preferences": [],
  "country": "",
  "cuisine": "",
  "createdAt": "2019-10-28T20:28:00.641Z",
  "updatedAt": "2019-10-28T20:28:00.641Z",
  "__v": 0,
  "token": "eyJhbGciOiJSUzI1Ni..."
}
```



## POST /signin
### Request body:
| Property                | Description         |
|-------------------------|---------------------|
| email: String           | email address       |
| password: String        | password            |

### Response:
| Property                | Description                               |
|-------------------------|-------------------------------------------|
| _id: String             | document id generated by mongodb          |
| uid: String             | user id generated by firebase             |
| email: String           | email address                             |
| displayName: String     | if available from google, otherwise null  |
| preferences: [String]   | empty on signup, update after questionare |
| photoURL: String        | if available from google, otherwise null  |
| country: String         | empty on signup, update after questionare |
| cuisine: String         | empty on signup, update after questionare |
| createdAt: String(Date) | generated by mongodb                      |
| updatedAt: String(Date) | generated by mongodb                      |
| token: String           | id token                                  |



### Errors:
  - username or password are empty
  - email format is not correct
  - no user is found
  - password is wrong

### Example response (JSON):
```
{
  "_id": "5db74f50af6e1e2962b12cfc",
  "uid": "kEfnyjtOEpX2MIKBQrVtDv9yTEm2",
  "email": "test@test.com",
  "displayName": "",
  "photoURL": "",
  "preferences": [],
  "country": "",
  "cuisine": "",
  "createdAt": "2019-10-28T20:28:00.641Z",
  "updatedAt": "2019-10-28T20:28:00.641Z",
  "__v": 0,
  "token": "eyJhbGciOiJSUzI1Ni..."
}
```


## POST /update
### Request body:
| Property         | Description         |
|------------------|---------------------|
| user: Object     | all user info (overwrite existing db) |

### Response:
| Property                | Description                               |
|-------------------------|-------------------------------------------|
| _id: String             | document id generated by mongodb          |
| uid: String             | user id generated by firebase             |
| email: String           | email address                             |
| displayName: String     | if available from google, otherwise null  |
| preferences: [String]   | update after questionare                  |
| photoURL: String        | if available from google, otherwise null  |
| country: String         | update after questionare |
| cuisine: String         | update after questionare |
| createdAt: String(Date) | generated by mongodb                      |
| updatedAt: String(Date) | generated by mongodb                      |
| token: String           | id token                                  |



### Errors:
  - auth token is not valid or expired
  - user object contains one or more properties that have data types against Schema

### Example response (JSON):
```
{
  "_id":"5db2040223ce541c116f2801",
  "uid":"YqSs20fkGJcHguiGsFLUlx0GryO2",
  "email":"test@test.com",
  "displayName":"Kiki",
  "preferences":["mexican", "spicy", "vegitarian"],
  "photoURL":"",
  "country":"United States",
  "cuisine":"Korean",
  "createdAt":"2019-10-24T20:05:22.968Z",
  "updatedAt":"2019-10-24T20:05:22.968Z",
  "__v":0
}
```

---
# Recipes