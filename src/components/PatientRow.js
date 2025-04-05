import { Link } from 'react-router-dom';

export default function PatientRow({ patient }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <i className="fas fa-user text-blue-500"></i>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{patient.name}</div>
            <div className="text-sm text-gray-500">ID: {patient.id}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{patient.email}</div>
        <div className="text-sm text-gray-500">{patient.phone}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{patient.lastAppointment}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{patient.nextAppointment}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex space-x-2">
          <Link
            to={`/patient/${patient.id}`}
            className="text-blue-600 hover:text-blue-900"
          >
            <i className="fas fa-eye mr-1"></i> View
          </Link>
          <button className="text-green-600 hover:text-green-900">
            <i className="fas fa-edit mr-1"></i> Edit
          </button>
          <button className="text-red-600 hover:text-red-900">
            <i className="fas fa-file-medical mr-1"></i> Rx
          </button>
        </div>
      </td>
    </tr>
  );
}