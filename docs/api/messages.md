## MESSAGES
*Authorization required*

### DTO
* [IClientMessageDTO][1]: Message object format to be sent from the client to the server.
* [IServerMessageDTO][2]: Message object format to be sent from the server to the client.


### OPERATIONS
1. **CREATE**:  POST `/api/users/{toUserId}/messages` with client message JSON DTO in body --> **201 CREATED**
2. **READ**:    GET `/api/users/{toUserId}/messages` --> **200 OK** with list of messages for said user, **403 FORBIDDEN** if user ID is not currently authorized user, or **404 NOT FOUND** if user not found.
3. **READ**:    GET `/api/users/{toUserId}/messages/count` --> **200 OK** with a count of messages for said user, **403 FORBIDDEN** if user ID is not currently authorized user or currently authorized user is not **type="admin"**, or **404 NOT FOUND** if user not found.
4. **UPDATE**:  N/A
5. **DELETE**:  DELETE `/api/users/{toUserId}/messages/{messageId}` --> **204 NO CONTENT**, **403 FORBIDDEN** if user ID is not currently authorized user or currently authorized user is not **type="admin"**, or **404 NOT FOUND** if user/message not found.
6. **DELETE**:  DELETE `/api/users/{toUserId}/messages` --> **204 NO CONTENT**, **403 FORBIDDEN** if user ID is not currently authorized user or currently authorized user is not **type="admin"**, or **404 NOT FOUND** if user not found. *Note: deletes all messages for user*.

### NOTES
* A user MUST NOT be able to delete itself.
* A user MUST NOT be able to disable iteself.

[1]: /docs/dto/client-message-dto.d.ts
[2]: /docs/dto/server-message-dto.d.ts