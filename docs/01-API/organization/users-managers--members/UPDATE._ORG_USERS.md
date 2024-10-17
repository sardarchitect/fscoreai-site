### Code Flow for PUT/DELETE Request to Update or Delete Organization Members/Managers

```mermaid
flowchart TD
  A[Start: PUT/DELETE Request to API] --> B{Is User Authenticated?}
  B -- Yes --> C[Extract Session User]
  B -- No --> D[Return 401 Unauthorized]
  C --> E[Parse Request Body]
  E --> F[Start Database Transaction]
  F --> G[Check Session User for Privileges]
  G -- Have Privileges --> H{Request Method?}
  H -- PUT --> I[Update Members/Managers]
  H -- DELETE --> J[Delete Members/Managers]
  I --> K[Call updateUserRole Function with orgId]
  J --> L[Call deleteUserFromOrganization Function]
  K --> M[Commit Transaction]
  L --> M[Commit Transaction]
  M --> N[Return 200 Success with Updated Organization]
  F --> O[Caught Error?]
  O -- Yes --> P[Return 500 Internal Server Error]
  O -- No --> N[Return Success Response]
```

### Step-by-Step Breakdown of the Flowchart:

1. **Start: PUT/DELETE Request to API**
   - The flow begins when a `PUT` or `DELETE` request is made to update or delete members and managers in the organization.

2. **Is User Authenticated?**
   - **Yes**: If the user is authenticated, the process continues to extract the session user details.
   - **No**: If not authenticated, the API responds with a `401 Unauthorized` status.

3. **Extract Session User**
   - Once authenticated, the session user data is extracted from the authentication response for further operations.

4. **Parse Request Body**
   - The body of the request is parsed to retrieve necessary organization data (such as members, managers, and additional details).

5. **Start Database Transaction**

6. **Check Session User for Admin Privileges**
   - The system verifies whether the session user has privileges for the organization. If the user is not an admin | manager, no further actions are allowed.

7. **Request Method? (PUT or DELETE)**
   - **PUT**: Calls the `updateUsers` function to update the members or managers of the organization.
   - **DELETE**: Calls the `deleteUserFromOrganization` function to remove members or managers from the organization.

8. **Update Members/Managers (PUT)**
   - In the case of a `PUT` request, the `updateUsers` function handles updating the members and managers of the organization.

9. **Delete Members/Managers (DELETE)**
   - In the case of a `DELETE` request, the `deleteUserFromOrganization` function is called to remove users from the organization.

10. **Call `updateUserRole` Function with orgId**
    - When updating members or managers (PUT request), the `updateUserRole` function is called.
    - **Key Addition**
      - This function includes updating the `orgId` field in the `usersTable`
      - Ensuring each user is associated with the organization to which they belong
      - CHECK IF THE USER IS PART OF ANOTHER organization OR NOT 
      - Also hendle internal updates of manager and managers (update member | manager)


11. **Commit Transaction**
    - After successfully updating or deleting users, the transaction is committed, saving all changes to the database.

12. **Return 200 Success with Updated Organization**

13. **Caught Error?**
    
