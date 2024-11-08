import { Member } from "./MemberManagement";

interface MemberListProps {
  members: Member[];
  onEditMember: (member: Member) => void;
  onDeleteMember: (id: number) => void;
}

const MemberList = ({ members, onEditMember, onDeleteMember }: MemberListProps) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-2">Member List</h3>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Role</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border p-2">{member.name}</td>
              <td className="border p-2">{member.email}</td>
              <td className="border p-2">{member.role}</td>
              <td className="border p-2">
                <button
                  onClick={() => onEditMember(member)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteMember(member.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
