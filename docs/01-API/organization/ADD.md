1. POST /api/organizations/register:
   
   └── Step 1: Authenticate the user
       
       └── Call `hasAuth` function to check the request's authentication status.
           
           └── If not authenticated, return a 401 Unauthorized response.

   └── Step 2: Parse Request Body
       
       └── Extract the fields from the request body: 
           - name
           - email
           - contact
           - shortDescription
           - billingHistory ...

   └── Step 3: Start Database Transaction
       
       └── Begin a transaction using `db.transaction`.
       
   └── Step 4: Create Organization
       
       └── Call `createOrganization` function with the transaction (`trx`) and session user info.
       
       └── Inside `createOrganization`:
           └── Step 1: Check if the organization already exists by searching the database for the provided email.
               └── If an organization exists, throw an error.
           └── Step 2: Insert the new organization details into the database:
               - name, email, contact, adminUserId, shortDescription, billingHistory, createdAt, updatedAt.
           └── Step 3: Update the session user's role to `admin` and associate their `orgId` in the `users` table.
               └── Call `updateUserRole` function to update the role of the session user and add the `orgId`.
           └── Step 4: Return the newly created organization's data.

   └── Step 5: End Transaction
       
       └── If successful, return a 201 Created response with the newly created organization's data.
       
       └── If any error occurs, rollback the transaction and return an error response using `handleErrorResponse`.

2. `createOrganization`:
   └── This function handles inserting the organization into the database and updating the admin user role with orgId.

3. `updateUserRole`:
   └── This function updates the role of a user (such as setting them as "admin") and adds the `orgId` to their user record in the `usersTable`.

## Flowchart Explanation

```mermaid
   flowchart TD
  A[Start: POST Request to /api/organizations] --> B{Is User Authenticated?}
  B -- Yes --> C[Extract Session User]
  B -- No --> D[Return 401 Unauthorized]
  C --> E[Parse Request Body]
  E --> F[Start Database Transaction]
  F --> G[Check if Organization Exists by Email]
  G -- Exists --> H[Throw Error: Organization Already Exists]
  G -- Not Found --> I[Insert New Organization in DB]
  I --> J[Update Session User Role to Admin]
  J --> K{Transaction Successful?}
  K -- Yes --> L[Return 201 Created with Organization Data]
  K -- No --> M[Rollback Transaction and Handle Error]
  M --> N[Return Error Response]

