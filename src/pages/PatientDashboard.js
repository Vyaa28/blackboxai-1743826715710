import { useState } from 'react';
import AppointmentCard from '../components/AppointmentCard';

export default function PatientDashboard() {
  const [patient, setPatient] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(123) 456-7890',
    lastVisit: '2023-05-15'
  });

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2023-06-20',
      time: '10:30 AM',
      doctor: 'Dr. Smith',
      status: 'confirmed',
      reason: 'Annual eye exam'
    },
    {
      id: 2,
      date: '2023-07-05',
      time: '2:15 PM',
      doctor: 'Dr. Johnson',
      status: 'pending',
      reason: 'Contact lens fitting'
    }
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Patient Dashboard</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500">Full Name</p>
                <p className="font-medium">{patient.name}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{patient.email}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">{patient.phone}</p>
              </div>
              <div>
                <p className="text-gray-500">Last Visit</p>
                <p className="font-medium">{patient.lastVisit}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
            <div className="space-y-4">
              {appointments.map(appointment => (
                <AppointmentCard 
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Medical History</h3>
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Doctor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Diagnosis</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prescription</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-05-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Smith</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Myopia (-2.50 both eyes)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Eyeglasses prescription</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2022-11-20</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Johnson</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dry eye syndrome</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Artificial tears</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}