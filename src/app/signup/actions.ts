
export interface SignUp {
    email: string;
    password: string;
  }
  
  
  // Form submission handler
  export default async function handleSignUp(formData: SignUp) {
      // "use server";
         const email = formData.email
      const password = formData.password
      try {
        // Construct the JSON payload
        const payload = {
          email,
          password,
        };
  
        // Send data to the API route using fetch
        const response = await fetch(`/api/user/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload), // Convert the payload to a JSON string
        });
    
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error || 'Something went wrong');
        }
    
        const data = await response.json();
        // window.location.href = '/admin';
        console.log('signup response:', data);
        return data;
        // Handle success (e.g., navigate, store tokens, etc.)
      } catch (error) {
        console.error('Error:', error);
        return error;
        // Handle error (e.g., display error message)
      }
    }


    export interface UpdateUser {
      id: string;
      email: string;
      name?: string;
    }
    
    // Form submission handler for updating user data
      export async function handleUpdateUser(formData: UpdateUser) {
    
        const {id,email,name} = formData;
      try {
        // Construct the JSON payload
        const payload = {
          id,
          email,
          name
        };
    
        // Send data to the API route using fetch (PUT request)
        const response = await fetch(`/api/user/update`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload), // Convert the payload to a JSON string
        });
    
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error || 'Something went wrong during the update');
        }
    
        const data = await response.json();
        console.log('update response:', data);
        return data; // Handle success (e.g., navigate, store tokens, etc.)
      } catch (error) {
        console.error('Error:', error);
        return error; // Handle error (e.g., display error message)
      }
    }
    