import React from 'react';
import { Users, LayoutDashboard, UserCheck, Settings, Bell } from 'lucide-react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import './styles/DoctorListPage.css';

const DoctorListPage = () => {
  const today = new Date(2025, 7, 17, 14, 16); // 02:16 PM +0530
  const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' });
  const greeting = today.getHours() >= 12 ? 'Good Afternoon' : 'Good Morning';

  const doctors = [
    { id: 'D01', name: 'Dr. Lasantha De Silva', specialization: 'General Physician' },
    { id: 'D02', name: 'Dr. Sanduni Alwis', specialization: 'Neurologist' },
    { id: 'D03', name: 'Dr. Nimal Perera', specialization: 'Cardiologist' },
    { id: 'D04', name: 'Dr. Prasad Kumara', specialization: 'Oncologist' },
    { id: 'D05', name: 'Dr. Kamal Fernando', specialization: 'Dermatologist' },
    { id: 'D06', name: 'Dr. Nadeesha Perera', specialization: 'Pediatrician' },
    { id: 'D07', name: 'Dr. Malika Senarath', specialization: 'Gynecologist' },
    { id: 'D08', name: 'Dr. Dilan Abeykoon', specialization: 'ENT Specialist' },
    { id: 'D09', name: 'Dr. Amal Jayasinghe', specialization: 'Radiologist' },
    { id: 'D10', name: 'Dr. Sunil Fernando', specialization: 'Endocrinologist' },
    { id: 'D11', name: 'Dr. Rajeeva Fernando', specialization: 'General Physician' },
    { id: 'D12', name: 'Dr. Radhika Gunarthne', specialization: 'Pulmonologist' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h1 className="text-2xl font-bold text-gray-800">Doctors</h1>
              <div className="text-sm text-gray-500 mt-1">{greeting}, Admin - {time}</div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="text-sm font-semibold text-gray-700">Doctor No.</div>
                <div className="text-sm font-semibold text-gray-700">Doctor Name</div>
                <div className="text-sm font-semibold text-gray-700">Specialization</div>
                <div className="text-sm font-semibold text-gray-700">Actions</div>
              </div>
              {doctors.map((doctor) => (
                <div key={doctor.id} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="text-sm text-gray-800 font-medium">{doctor.id}</div>
                  <div className="text-sm text-gray-800">{doctor.name}</div>
                  <div className="text-sm text-gray-600">{doctor.specialization}</div>
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

export default DoctorListPage;