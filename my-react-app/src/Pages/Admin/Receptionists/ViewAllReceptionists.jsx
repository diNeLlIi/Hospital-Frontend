import React, { useState } from 'react';
import Layout from '../../../Components/Layout/Layout';
import './ViewAllReceptionists.css';

const ViewAllReceptionists = () => {
  // Initial receptionists data
  const [receptionists, setReceptionists] = useState([
    {
      id: 'R01',
      name: "Ms. Chamodi Peiris"
    },
    {
      id: 'R02',
      name: "Mrs. Iroshani Kumari"
    },
    {
      id: 'R03',
      name: "Ms. Thamali Alwis"
    },
    {
      id: 'R04',
      name: "Ms. Sanduni Perera"
    },
    {
      id: 'R05',
      name: "Mrs. Nimalka Silva"
    },
    {
      id: 'R06',
      name: "Ms. Amaya Fernando"
    },
    {
      id: 'R07',
      name: "Mrs. Rashini Jayasinghe"
    },
    {
      id: 'R08',
      name: "Ms. Dilani Gunasekara"
    }
  ]);

  // Edit receptionist function
  const handleEditReceptionist = (receptionistId, receptionistName) => {
    console.log(`Edit receptionist clicked for: ${receptionistName} (ID: ${receptionistId})`);
    alert(`Edit receptionist: ${receptionistName}\nID: ${receptionistId}\n\nThis would typically open an edit modal or navigate to edit page.`);
   
    // You can add your edit logic here:
    // - Open a modal
    // - Navigate to edit page
    // - Show edit form inline
    // - Call API to get receptionist details for editing
  };

  return (
    <Layout pageTitle="Receptionists" pageNumber="9">
      <div className="receptionists-page-container">
        {/* Main Content */}
        <div className="receptionists-content">
          <div className="receptionists-table-section">
            <div className="receptionists-table-container">
              <table className="receptionists-table">
                <thead>
                  <tr>
                    <th>Receptionist No.</th>
                    <th>Receptionist Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {receptionists.map((receptionist) => (
                    <tr key={receptionist.id}>
                      <td>{receptionist.id}</td>
                      <td>{receptionist.name}</td>
                      <td>
                        <button
                          className="action-btn edit"
                          onClick={() => handleEditReceptionist(receptionist.id, receptionist.name)}
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

export default ViewAllReceptionists;