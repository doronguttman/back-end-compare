## USER MANAGEMENT
Base URL: `/api/users`

*Authorization required - user must have **type="admin"***
### USER DTO
```typescript
interface IUserDTO {
  id: string;
  name: string;
  email: string;
  enabled: boolean;
  type: "user" | "admin";
}
```
### OPERATIONS
1. **CREATE**:  POST `/` with user JSON DTO in body --> **201 CREATED**
2. **READ**:    GET `/{userId}` --> **200 OK** with user information or **404 NOT FOUND**
3. **UPDATE**:  PUT `/{userId}` with user JSON DTO in body --> **202 ACCEPTED** or **404 NOT FOUND**
4. **DELETE**:  DELETE `/{userId}` --> **200 OK** or **404 NOT FOUND** if not found
5. **UPDATE** password: PATCH `/{userId}?password={newPassword}` --> **200 OK** or **404 NOT FOUND** if not found. *Authorization by **type="admin"** and/or **own user***.

### NOTES
* A user MUST NOT be able to delete itself.
* A user MUST NOT be able to disable iteself.