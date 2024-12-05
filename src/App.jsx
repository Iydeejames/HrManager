import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdEdit, MdDelete } from 'react-icons/md';

const ManageMembers = () => {
  const [members, setMembers] = useState([
    { name: 'Dr Fagbemi', role: 'Medical Officer' },
    { name: 'Dr Ojo', role: 'Medical Officer' },
    { name: 'Dr Wilson', role: 'Medical Officer' },
    { name: 'Dr Taofeek', role: 'Medical Officer' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', role: '' });
  const [editMemberIndex, setEditMemberIndex] = useState(null);

  const handleAddMember = () => {
    if (newMember.name && newMember.role) {
      if (editMemberIndex !== null) {
        const updatedMembers = [...members];
        updatedMembers[editMemberIndex] = newMember;
        setMembers(updatedMembers);
        setEditMemberIndex(null);
      } else {
        setMembers([...members, newMember]);
      }
      setNewMember({ name: '', role: '' });
      setShowModal(false);
    }
  };

  const handleEditMember = (index) => {
    setNewMember(members[index]);
    setEditMemberIndex(index);
    setShowModal(true);
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  const handleLogout = () => {
    alert('You have logged out.');
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="flex items-center space-x-2">
          <img
            src="/path/to/logo.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-semibold">HR Management</span>
        </div>
        <button onClick={handleLogout} className="text-red-500 font-medium">
          Logout
        </button>
      </header>

      {/* Manage Members Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center space-x-2">
          <FaUserPlus className="text-gray-500" />
          <span>Manage Members</span>
        </h2>
        <p className="text-gray-600">Add or remove members in your organization</p>

        {/* Add Member Button */}
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-sky-600 text-white py-3 flex items-center justify-between px-4 rounded-md hover:bg-sky-700"
        >
          <span>Add new Member</span>
          <FaUserPlus className="text-white" />
        </button>

        {/* Members List */}
        <div className="space-y-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-md"
            >
              <div>
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
              <div className="flex space-x-3">
                <MdEdit
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                  onClick={() => handleEditMember(index)}
                />
                <MdDelete
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => handleRemoveMember(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Adding/Editing Members */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg w-96">
      <h3 className="text-lg font-medium mb-4">Add Staff Member</h3>
      
      {/* Full Name Input */}
      <input
        type="text"
        placeholder="Full Name"
        className="w-full border border-gray-300 p-2 rounded-md mb-4"
        value={newMember.name}
        onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
      />
      
      {/* Email Address Input */}
      <input
        type="email"
        placeholder="Email Address"
        className="w-full border border-gray-300 p-2 rounded-md mb-4"
        value={newMember.email || ''}
        onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
      />

      {/* WhatsApp Number Input */}
      <div className="flex items-center border border-gray-300 p-2 rounded-md mb-4">
        <span className="text-gray-500 pr-2">+234</span>
        <input
          type="text"
          placeholder="Whatsapp Number"
          className="flex-1 outline-none"
          value={newMember.whatsapp || ''}
          onChange={(e) => setNewMember({ ...newMember, whatsapp: e.target.value })}
        />
      </div>

      {/* Role Selection Dropdown */}
      <select
        className="w-full border border-gray-300 p-2 rounded-md mb-4"
        value={newMember.role}
        onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
      >
        <option value="">Select Role</option>
        <option value="Consultant">Consultant</option>
        <option value="Medical Officer">Medical Officer</option>
        <option value="Nurse">Nurse</option>
        <option value="Technician">Technician</option>
      </select>

      {/* Save Button */}
      <button
        onClick={handleAddMember}
        className="w-full bg-sky-600 text-white py-3 rounded-md hover:bg-sky-700"
      >
        Save
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default ManageMembers;
