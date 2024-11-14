import { signOut } from 'next-auth/react';

export const updateUserDetails = async (userData: { name: string; email: string }) => {
  try {
    const response = await fetch('/api/user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      // If user needs to sign in again for updated session
      if (data.message.includes('Please sign in again')) {
        await signOut();
      } else {
        alert('User updated successfully');
        return data;
      }
    } else {
      console.log(data)
      throw new Error(data.error || data.message || 'Failed to update user');
    }
  } catch (error) {
    console.error('Error updating user:', error);
    alert(error);
  }
};
