import React, { useState } from 'react';
import Layout from '../../../Components/Layout/Layout';
import './ViewAllDoctors.css';

const ViewAllDoctors = () => {
  // Initial doctors data
  const [doctors, setDoctors] = useState([
    {
      id: 'D01',
      name: "Dr. Lasantha De Silva",
      specification: "General Physician"
    },
    {
      id: 'D02',
      name: "Dr. Sanduni Aiwis",
      specification: "Neurologist"
    },
    {
      id: 'D03',
      name: "Dr. Nimal Perera",
      specification: "Cardiologist"
    },
    {
      id: 'D04',
      name: "Dr. Prasad Kumara",
      specification: "Oncologist"
    },
    {
      id: 'D05',
      name: "Dr. Kamal Fernando",
      specification: "Dermatologist"
    },
    {
      id: 'D06',
      name: "Dr. Nadeesha Perera",
      specification: "Pediatrician"
    },
    {
      id: 'D07',
      name: "Dr. Malika Senarath",
      specification: "Gynecologist"
    },
    {
      id: 'D08',
      name: "Dr. Dilan Abeykoon",
      specification: "ENT Specialist"
    },
    {
      id: 'D09',
      name: "Dr. Amal Jayasinghe",
      specification: "Radiologist"
    },
    {
      id: 'D10',
      name: "Dr. Sunil Fernando",
      specification: "Endocrinologist"
    },
    {
      id: 'D11',
      name: "Dr. Rajeeva Fernando",
      specification: "General Physician"
    },
    {
      id: 'D12',
      name: "Dr. Radhika Gunarthne",
      specification: "Pulmonologist"
    }
  ]);

  // Edit doctor function
  const handleEditDoctor = (doctorId, doctorName) => {
    console.log(`Edit doctor clicked for: ${doctorName} (ID: ${doctorId})`);
    alert(`Edit doctor: ${doctorName}\nID: ${doctorId}\n\nThis would typically open an edit modal or navigate to edit page.`);
    
    // You can add your edit logic here:
    // - Open a modal
    // - Navigate to edit page
    // - Show edit form inline
    // - Call API to get doctor details for editing
  };

  return (
    <Layout pageTitle="Doctors" pageNumber="8">
      <div className="doctors-page-container">
        {/* Main Content */}
        <div className="doctors-content">
          <div className="doctors-table-section">
            <div className="doctors-table-container">
              <table className="doctors-table">
                <thead>
                  <tr>
                    <th>Doctor No.</th>
                    <th>Doctor Name</th>
                    <th>Specification</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor) => (
                    <tr key={doctor.id}>
                      <td>{doctor.id}</td>
                      <td>{doctor.name}</td>
                      <td>{doctor.specification}</td>
                      <td>
                        <button 
                          className="action-btn edit"
                          onClick={() => handleEditDoctor(doctor.id, doctor.name)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewAllDoctors;