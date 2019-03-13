# BACK END COMPARISSON
In this repository I am setting out to compare different back-end languages/frameworks by building CRUD[1] REST[2] API[3] servers which perform the same functionallities.

## FUNCTIONAL REQUIREMETS
Each solution will have to implement the following APIs.
Unless specifically noted below, all APIs should return **400 BAD REQUEST** on errors.

### USER MANAGEMENT
*OAuth2 authorization required with **type="admin"***
#### USER MODEL
```typescript
interface IUserDTO {
  id: string;
  name: string;
  email: string;
  type: "user" | "admin";
}
```
#### OPERATIONS
1. **CREATE**: POST `/api/users` with user JSON DTO[4] in body: **201 CREATED**
2. **READ**: GET `/api/users/{userId}`: **200 OK** with user information, **404 NOT FOUND** if not found
3. **UPDATE**: PUT `/api/users/{userId}`with user JSON DTO in body: **202 ACCEPTED**
4. **DELETE**: DELETE `/api/users/{userId}`: **200 OK** or **404 NOT FOUND** if not found
