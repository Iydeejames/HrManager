import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const ManageMembers = () => {
  const members = [
    { name: 'Dr Fagbemi', role: 'Medical Officer' },
    { name: 'Dr Ojo', role: 'Medical Officer' },
    { name: 'Dr Wilson', role: 'Medical Officer' },
    { name: 'Dr Taofeek', role: 'Medical Officer' },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="flex items-center space-x-2">
          <img
            src="/path/to/logo.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-semibold">HRGH</span>
        </div>
        <button className="text-red-500 font-medium">Logout</button>
      </header>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center space-x-2">
          <FaUserPlus className="text-gray-500" />
          <span>Manage Members</span>
        </h2>
        <p className="text-gray-600">Add or remove members in your organization</p>

        <button className="w-full bg-green-600 text-white py-3 flex items-center justify-between px-4 rounded-md hover:bg-green-700">
          <span>Add new Member</span>
          <FaUserPlus className="text-white" />
        </button>

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
              <MdEdit className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageMembers;
