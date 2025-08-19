import React from 'react';
import { Users, LayoutDashboard, UserCheck, Settings, Bell } from 'lucide-react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import './styles/ReceptionistListPage.css';

const ReceptionistListPage = () => {
  const today = new Date(2025, 7, 17, 15, 54); // 03:54 PM +0530
  const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' });
  const greeting = today.getHours() >= 12 ? 'Good Afternoon' : 'Good Morning';

  const receptionists = [
    { id: 'R01', name: 'Ms. Chamodi Peris', assignedWard: 'Ward A' },
    { id: 'R02', name: 'Mrs. Iroshani Kumari', assignedWard: 'Ward B' },
    { id: 'R03', name: 'Ms. Thamali Alwis', assignedWard: 'Ward C' },
    { id: 'R04', name: 'Ms. Nuwanika Perera', assignedWard: 'Ward D' },
    { id: 'R05', name: 'Mrs. Sujatha Fernando', assignedWard: 'Ward E' },
    { id: 'R06', name: 'Ms. Dilani Jayawardene', assignedWard: 'Ward F' },
    { id: 'R07', name: 'Mrs. Priyanka Silva', assignedWard: 'Ward G' },
    { id: 'R08', name: 'Ms. Anjali Wijesinghe', assignedWard: 'Ward H' },
    { id: 'R09', name: 'Mrs. Shashi Abeywardane', assignedWard: 'Ward I' },
    { id: 'R10', name: 'Ms. Kanchana De Silva', assignedWard: 'Ward J' },
    { id: 'R11', name: 'Mrs. Ruwani Samarasinghe', assignedWard: 'Ward K' },
    { id: 'R12', name: 'Ms. Nilmini Ratnayake', assignedWard: 'Ward L' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h1 className="text-2xl font-bold text-gray-800">Receptionists</h1>
              <div className="text-sm text-gray-500 mt-1">{greeting}, Admin - {time}</div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="text-sm font-semibold text-gray-700">Receptionist No.</div>
                <div className="text-sm font-semibold text-gray-700">Receptionist Name</div>
                <div className="text-sm font-semibold text-gray-700">Assigned Ward</div>
                <div className="text-sm font-semibold text-gray-700">Actions</div>
              </div>
              {receptionists.map((receptionist) => (
                <div key={receptionist.id} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="text-sm text-gray-800 font-medium">{receptionist.id}</div>
                  <div className="text-sm text-gray-800">{receptionist.name}</div>
                  <div className="text-sm text-gray-600">{receptionist.assignedWard}</div>
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

export default ReceptionistListPage;