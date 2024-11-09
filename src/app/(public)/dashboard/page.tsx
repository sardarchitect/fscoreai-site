"use client"
import { useState } from "react";
 
const Dashboard = () => {
  // Set initial active section
  const [activeSection, setActiveSection] = useState("Member Management");
 
  // Sidebar options
  const sections = ["Member Management", "Billing", "Setting", "Support", "Insights"];
 
  // Function to render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "Member Management":
        return <div>Member Management Content</div>;
      case "Billing":
        return <div>Billing Content
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt at provident corporis error possimus aliquam ut dolor id! Porro sed eum quae, cum, quisquam nulla veniam quod recusandae animi quas at. Tenetur corporis veritatis mollitia excepturi earum sunt, facilis similique nihil quis, aperiam enim corrupti eos minima. Modi quia quis maiores voluptates ipsam iure necessitatibus excepturi aperiam aliquid quidem at, impedit error commodi, quasi autem nemo? Tempore, optio. Eligendi nobis, deleniti possimus, nisi natus itaque laboriosam vero maxime qui, beatae pariatur ad provident inventore odit numquam. Quo ullam, impedit odit, unde vero dignissimos, repellendus sed recusandae magnam in excepturi?</p>\
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt at provident corporis error possimus aliquam ut dolor id! Porro sed eum quae, cum, quisquam nulla veniam quod recusandae animi quas at. Tenetur corporis veritatis mollitia excepturi earum sunt, facilis similique nihil quis, aperiam enim corrupti eos minima. Modi quia quis maiores voluptates ipsam iure necessitatibus excepturi aperiam aliquid quidem at, impedit error commodi, quasi autem nemo? Tempore, optio. Eligendi nobis, deleniti possimus, nisi natus itaque laboriosam vero maxime qui, beatae pariatur ad provident inventore odit numquam. Quo ullam, impedit odit, unde vero dignissimos, repellendus sed recusandae magnam in excepturi?</p>
        </div>;
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
 
  return (
    <section className="mt-36 h-screen  grid grid-cols-12 gap-4">
      {/* Sidebar */}
      <div className="col-span-2  bg-gray-800 text-white p-5">
        <div className="text-xl font-bold mb-6">DashBoard</div>
       
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
      </div>
 
      {/* Main Content */}
      <main className="col-span-10">
        {/* Header */}
        <header className="p-5 bg-gray-200">
          <h1 className="text-2xl font-semibold">Dashboard - {activeSection}</h1>
        </header>
 
        {/* Body */}
        <section className="p-5">
          {renderContent()}
        </section>
      </main>
    </section>
  );
};
 
export default Dashboard;