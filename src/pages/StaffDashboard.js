import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import PatientRow from '../components/PatientRow';

export default function StaffDashboard() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(123) 456-7890',
      lastAppointment: '2023-06-20',
      nextAppointment: '2023-07-05'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '(234) 567-8901',
      lastAppointment: '2023-06-18',
      nextAppointment: '2023-08-12'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert@example.com',
      phone: '(345) 678-9012',
      lastAppointment: '2023-06-15',
      nextAppointment: '2023-09-20'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Staff Dashboard</h2>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Appointment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.map(patient => (
                <PatientRow key={patient.id} patient={patient} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing {filteredPatients.length} of {patients.length} patients
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            <i className="fas fa-plus mr-2"></i> Add New Patient
          </button>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Today's Appointments</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">10:30 AM - Dr. Smith</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Confirmed</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Sarah Williams</p>
                <p className="text-sm text-gray-500">2:15 PM - Dr. Johnson</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Pending</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <i className="fas fa-calendar-plus text-2xl text-blue-500 mb-2"></i>
              <p>New Appointment</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <i className="fas fa-file-prescription text-2xl text-blue-500 mb-2"></i>
              <p>Create Prescription</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <i className="fas fa-chart-line text-2xl text-blue-500 mb-2"></i>
              <p>View Reports</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <i className="fas fa-cog text-2xl text-blue-500 mb-2"></i>
              <p>Settings</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}