# BACK END COMPARISSON

## OBJECTIVE
In this repository I am setting out to compare different back-end languages/frameworks by way of building [CRUD][1] [REST][2] [API][3] servers which perform the same functionallity.

## APPLICATION
The application would be a message board application, where users can leave messages to other users.

### FUNCTIONAL REQUIREMENTS
* A user can send a message to another user.
* A message will be stored for the receiving user until the receiving user deletes it.
* If a user is connected to the system and a message is posted to the user, said user MUST receive immidiate notification.
* A user MUST be able to get a list of all messages addressed to said user.
* A user, including an admin user, MUST NOT be able to get messages not addressed to said user.
* An admin user, SHOULD be able to get a count of messages waiting for any user.
* A user may only access the system when enabled.
* A user MUST be able to update thier own password.
* An admin user MUST be able to update other users' passwords.
* Only an admin user can add users.
* An admin user MUST be able to enable/disable other users.

### NON-FUNCTIONAL REQUIREMETS
* Each solution MUST implement any and all APIs detailed in the documentations (*docs folder*).
* Unless specifically noted, all APIs MUST return **400 BAD REQUEST** on requester errors and **500 INTERNAL SERVER ERROR** for server errors. *Note*: if a more specific [4xx][5] or [5xx][6] error codes can be user, they SHOULD be used.
* Each solution MUST implement any and all [DTO][4]s as detailed in the documentation.

[1]: https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[2]: https://en.wikipedia.org/wiki/Representational_state_transfer
[3]: https://en.wikipedia.org/wiki/Application_programming_interface
[4]: https://en.wikipedia.org/wiki/Data_transfer_object
[5]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors
[6]: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_Server_errors