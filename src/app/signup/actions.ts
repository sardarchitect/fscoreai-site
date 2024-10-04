
export interface SignUp {
    name: string;
    email: string;
    password: string;
  }
  
  
  // Form submission handler
  export default async function handleSignUp(formData: SignUp) {
      // "use server";
      const name = formData.name
      const email = formData.email
      const password = formData.password
      try {
        // Construct the JSON payload
        const payload = {
          name,
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
        window.location.href = '/admin';
        console.log('signup response:', data);
        return data;
        // Handle success (e.g., navigate, store tokens, etc.)
      } catch (error) {
        console.error('Error:', error);
        return error;
        // Handle error (e.g., display error message)
      }
    }