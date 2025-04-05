import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Eye Care Management
            </h1>
            <p className="text-gray-600 mb-6">
              Streamline your clinic operations with our easy-to-use management system. 
              Schedule appointments, manage patient records, and improve your practice efficiency.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/book" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Book Appointment
              </Link>
              <Link 
                to="/patient" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium"
              >
                Patient Portal
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
            <div className="text-center">
              <i className="fas fa-eye text-blue-500 text-8xl mb-4"></i>
              <p className="text-gray-500">Modern eye care solutions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-500 mb-4">
            <i className="fas fa-calendar-alt text-3xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
          <p className="text-gray-600">
            Easy online booking system for patients and efficient calendar management for staff.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-500 mb-4">
            <i className="fas fa-file-medical text-3xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Medical Records</h3>
          <p className="text-gray-600">
            Secure digital storage for patient histories, prescriptions, and test results.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-500 mb-4">
            <i className="fas fa-chart-line text-3xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
          <p className="text-gray-600">
            Track clinic performance and patient trends with comprehensive reports.
          </p>
        </div>
      </div>
    </div>
  );
}