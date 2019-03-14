## USER MANAGEMENT
*Authorization required - user must have **type="admin"***

### USER DTO
* [IUserDTO][1]: User information.

### OPERATIONS
1. **CREATE**:  POST `/api/users/` with user JSON DTO in body --> **201 CREATED**
2. **READ**:    GET `/api/users/{userId}` --> **200 OK** with user information or **404 NOT FOUND**
3. **UPDATE**:  PUT `/api/users/{userId}` with user JSON DTO in body --> **202 ACCEPTED** or **404 NOT FOUND**
4. **DELETE**:  DELETE `/api/users/{userId}` --> **204 NO CONTENT** or **404 NOT FOUND** if not found
5. **UPDATE** password: PATCH `/api/users/{userId}?password={newPassword}` --> **204 NO CONTENT** or **404 NOT FOUND** if not found. *Authorization by **type="admin"** and/or **own user***.

### NOTES
* A user MUST NOT be able to delete itself.
* A user MUST NOT be able to disable iteself.

[1]: /docs/dto/user-dto.d.ts