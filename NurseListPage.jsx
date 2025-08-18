import React from 'react';
import { Users, LayoutDashboard, UserCheck, Settings, Bell } from 'lucide-react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import './styles/NurseListPage.css';

const NurseListPage = () => {
  const today = new Date(2025, 7, 17, 15, 48); // 03:48 PM +0530
  const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' });
  const greeting = today.getHours() >= 12 ? 'Good Afternoon' : 'Good Morning';

  const nurses = [
    { id: 'N01', name: 'Ms. Amali Fernando', assignedDoctor: 'Dr. Lasantha De Silva' },
    { id: 'N02', name: 'Mrs. Himali Perera', assignedDoctor: 'Dr. Sanduni Alwis' },
    { id: 'N03', name: 'Ms. Kumudu Silva', assignedDoctor: 'Dr. Nimal Perera' },
    { id: 'N04', name: 'Ms. Buwani Sirwardane', assignedDoctor: 'Dr. Prasad Kumara' },
    { id: 'N05', name: 'Ms. Kaushi Alwis', assignedDoctor: 'Dr. Kamal Fernando' },
    { id: 'N06', name: 'Mrs. Nishadi Jayalath', assignedDoctor: 'Dr. Nadeesha Perera' },
    { id: 'N07', name: 'Mrs. Renuka Samarakkody', assignedDoctor: 'Dr. Malika Senarath' },
    { id: 'N08', name: 'Mrs. Dhanu Abeywardane', assignedDoctor: 'Dr. Dilan Abeykoon' },
    { id: 'N09', name: 'Ms. Dedunu Fernando', assignedDoctor: 'Dr. Amal Jayasinghe' },
    { id: 'N10', name: 'Ms. Pramila Fernando', assignedDoctor: 'Dr. Sunil Fernando' },
    { id: 'N11', name: 'Mr. Rangi Cooray', assignedDoctor: 'Dr. Rajeeva Fernando' },
    { id: 'N12', name: 'Ms. Hiruni Weerakoon', assignedDoctor: 'Dr. Radhika Gunarthne' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h1 className="text-2xl font-bold text-gray-800">Nurses</h1>
              <div className="text-sm text-gray-500 mt-1">{greeting}, Admin - {time}</div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="text-sm font-semibold text-gray-700">Nurse No.</div>
                <div className="text-sm font-semibold text-gray-700">Nurse Name</div>
                <div className="text-sm font-semibold text-gray-700">Assigned Doctor</div>
                <div className="text-sm font-semibold text-gray-700">Actions</div>
              </div>
              {nurses.map((nurse) => (
                <div key={nurse.id} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="text-sm text-gray-800 font-medium">{nurse.id}</div>
                  <div className="text-sm text-gray-800">{nurse.name}</div>
                  <div className="text-sm text-gray-600">{nurse.assignedDoctor}</div>
                  <div>
                    <button className="px-6 py-2 bg-teal-500 text-white text-sm font-medium rounded-full hover:bg-teal-600 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurseListPage;
