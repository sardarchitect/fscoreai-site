import { useEffect, useState } from "react";
import MemberList from "./MemberList";
import AddMember from "./AddMember";
import EditMember from "./EditMember";

export interface Member {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "User" | "Admin" | "Manager";
}

const MemberManagement = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [editingMember, setEditingMember] = useState<Member | null>(null);

  // Load members from sessionStorage when the component mounts
  useEffect(() => {
    const storedMembers = sessionStorage.getItem("members");
    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    }
  }, []);

  // Save members to sessionStorage whenever the members state changes
  useEffect(() => {
    sessionStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  const handleAddMember = (member: Omit<Member, "id">) => {
    const newMember = { id: Date.now(), ...member }; // Generate unique ID
    setMembers([...members, newMember]);
  };

  const handleEditMember = (member: Member) => {
    setEditingMember(member);
  };

  const handleSaveEdit = (updatedMember: Omit<Member, "password">) => {
    setMembers(members.map((m) => (m.id === updatedMember.id ? { ...m, ...updatedMember } : m)));
    setEditingMember(null);
  };

  const handleDeleteMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Members</h2>
      <AddMember onAddMember={handleAddMember} />
      {editingMember ? (
        <EditMember
          member={editingMember}
          onSaveEdit={handleSaveEdit}
          onCancel={() => setEditingMember(null)}
        />
      ) : (
        <MemberList
          members={members}
          onEditMember={handleEditMember}
          onDeleteMember={handleDeleteMember}
        />
      )}
    </div>
  );
};

export default MemberManagement;
