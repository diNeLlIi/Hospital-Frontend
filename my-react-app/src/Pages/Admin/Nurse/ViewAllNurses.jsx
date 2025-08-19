import React, { useState } from 'react';
import Layout from '../../../Components/Layout/Layout';
import './ViewAllNurses.css';

const ViewAllNurses = () => {
  // Initial nurses data
  const [nurses, setNurses] = useState([
    {
      id: 'N01',
      name: "Ms. Amali Feranando",
      assignedDoctor: "Dr. Lasantha De Silva"
    },
    {
      id: 'N02',
      name: "Mrs. Himali Perera",
      assignedDoctor: "Dr. Sanduni Alwis"
    },
    {
      id: 'N03',
      name: "Mrs. Kumudu Silva",
      assignedDoctor: "Dr. Nimal Perera"
    },
    {
      id: 'N04',
      name: "Ms. Buvini Siriwardane",
      assignedDoctor: "Dr. Prasad Kumara"
    },
    {
      id: 'N05',
      name: "Ms. Kaushi Alwis",
      assignedDoctor: "Dr. Kamal Fernando"
    },
    {
      id: 'N06',
      name: "Ms. Nishadi Jayalath",
      assignedDoctor: "Dr. Nadeesha Perera"
    },
    {
      id: 'N07',
      name: "Mrs. Renuka Samarakkody",
      assignedDoctor: "Dr. Malika Senarath"
    },
    {
      id: 'N08',
      name: "Mrs. Dhanu Abeywardane",
      assignedDoctor: "Dr. Dilan Abeykoon"
    },
    {
      id: 'N09',
      name: "Ms. Dedunu Fernando",
      assignedDoctor: "Dr. Amal Jayasinghe"
    },
    {
      id: 'N10',
      name: "Ms. Pramila Fernando",
      assignedDoctor: "Dr. Sunil Fernando"
    },
    {
      id: 'N11',
      name: "Ms. Rangi Cooray",
      assignedDoctor: "Dr. Rajeeva Fernando"
    },
    {
      id: 'N12',
      name: "Mrs. Hirushi Weerakoon",
      assignedDoctor: "Dr. Radhika Gunarthne"
    }
  ]);

  // Edit nurse function
  const handleEditNurse = (nurseId, nurseName) => {
    console.log(`Edit nurse clicked for: ${nurseName} (ID: ${nurseId})`);
    alert(`Edit nurse: ${nurseName}\nID: ${nurseId}\n\nThis would typically open an edit modal or navigate to edit page.`);
   
    // You can add your edit logic here:
    // - Open a modal
    // - Navigate to edit page
    // - Show edit form inline
    // - Call API to get nurse details for editing
  };

  return (
    <Layout pageTitle="Nurses" pageNumber="10">
      <div className="nurses-page-container">
        {/* Main Content */}
        <div className="nurses-content">
          <div className="nurses-table-section">
            <div className="nurses-table-container">
              <table className="nurses-table">
                <thead>
                  <tr>
                    <th>Nurse No.</th>
                    <th>Nurse Name</th>
                    <th>Assigned Doctor Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {nurses.map((nurse) => (
                    <tr key={nurse.id}>
                      <td>{nurse.id}</td>
                      <td>{nurse.name}</td>
                      <td>{nurse.assignedDoctor}</td>
                      <td>
                        <button
                          className="action-btn edit"
                          onClick={() => handleEditNurse(nurse.id, nurse.name)}
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

export default ViewAllNurses;