"use client"
import { useState } from "react";
import MemberManagement from "../components/MemberManagement";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("John Doe"); // Default username for demonstration
  const [activeSection, setActiveSection] = useState("Member Managemen");

  const sections = ["Member Management", "Billing", "Setting", "Support", "Insights"];

  const renderContent = () => {
    switch (activeSection) {
      case "Member Management":
        return <MemberManagement />;
      case "Billing":
        return <div>Billing Content</div>;
      case "Setting":
        return <div>Setting Content</div>;
      case "Support":
        return <div>Support Content</div>;
      case "Insights":
        return <div>Insights Content</div>;
      default:
        return <div>Select a section</div>;
    }
  };

  const handleLoginLogout = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    return nameParts.slice(0, 2).map(part => part[0]).join("").toUpperCase();
  };

  return (
    <div className="w-full mt-28 grid bg-slate-300 justify-center">
      <div className="h-screen max-w-7xl justify-center grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <aside className="col-span-4 bg-gray-800 text-white p-5 flex flex-col">
          {/* Profile section with initials and welcome message */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">FscoreAi</div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-lg font-bold">
                {getInitials(username)}
              </div>
            </div>
            <p className="mt-4">Welcome, {username}</p>
          </div>

          {/* Sidebar Navigation */}
          <ul>
            {sections.map((section) => (
              <li
                key={section}
                onClick={() => setActiveSection(section)}
                className={`p-3 cursor-pointer rounded hover:bg-gray-700 ${
                  activeSection === section ? "bg-gray-700" : ""
                }`}
              >
                {section}
              </li>
            ))}
          </ul>

          {/* Login/Logout Button at the Bottom */}
          <div className="">
            {isLoggedIn ? (
              <button
                onClick={handleLoginLogout}
                className="bg-red-500 text-white px-3 py-1 rounded w-full"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLoginLogout}
                className="bg-blue-500 text-white px-3 py-1 rounded w-full"
              >
                Login
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-8">
          <header className="p-5 bg-gray-200">
            <h1 className="text-2xl font-semibold">
              {isLoggedIn ? `Dashboard - ${activeSection}` : "Please Log In"}
            </h1>
          </header>
          <section className="p-5">
            {isLoggedIn ? renderContent() : <p className="text-center">You must be logged in to view this content.</p>}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
