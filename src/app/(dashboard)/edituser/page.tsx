'use client'
import { useEffect, useState } from "react";
import { updateUserDetails } from "./action";
import { useSession } from "next-auth/react";

const EditUser = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const {data: session, update} = useSession();

  const handleSave = async () => {
    const result = await updateUserDetails({ name, email });
    if(result?.user){
      const user = result.user[0]
      // await update({
      //   ...session,
      //   user: {
      //     ...session?.user,
      //     name: result.user[0].name,
      //     email: result.user[0].email,
      //   }
      // });    
      console.log({...result.user[0].name})
    }
  };

  return (
    <div>
      <h3 className="text-lg mt-52 font-medium">Edit Member</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
        Save
      </button>
    </div>
  );
};

export default EditUser;
