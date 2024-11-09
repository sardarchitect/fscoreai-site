import { useState } from "react";
import { Member } from "./MemberManagement";

interface AddMemberProps {
  onAddMember: (member: Omit<Member, "id">) => void;
}

const AddMember = ({ onAddMember }: AddMemberProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"User" | "Admin" | "Manager">("User");

  const handleSubmit = () => {
    if (name && email && password) {
      onAddMember({ name, email, password, role });
      setName("");
      setEmail("");
      setPassword("");
      setRole("User");
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium">Add Member</h3>
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
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as Member["role"])}
        className="border p-2 mb-2 w-full"
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
      </select>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Member
      </button>
    </div>
  );
};

export default AddMember;
