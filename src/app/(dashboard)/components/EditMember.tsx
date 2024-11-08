import { useState } from "react";
import { Member } from "./MemberManagement";

interface EditMemberProps {
  member: Member;
  onSaveEdit: (updatedMember: Omit<Member, "password">) => void;
  onCancel: () => void;
}

const EditMember = ({ member, onSaveEdit, onCancel }: EditMemberProps) => {
  const [name, setName] = useState(member.name);
  const [email, setEmail] = useState(member.email);

  const handleSave = () => {
    onSaveEdit({ ...member, name, email });
  };

  return (
    <div>
      <h3 className="text-lg font-medium">Edit Member</h3>
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
      <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
        Cancel
      </button>
    </div>
  );
};

export default EditMember;
