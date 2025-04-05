export default function AppointmentCard({ appointment }) {
  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-lg">{appointment.reason}</h4>
          <p className="text-gray-600">
            <i className="far fa-calendar-alt mr-2"></i>
            {appointment.date} at {appointment.time}
          </p>
          <p className="text-gray-600">
            <i className="fas fa-user-md mr-2"></i>
            {appointment.doctor}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[appointment.status] || 'bg-gray-100'}`}>
          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
        </span>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          <i className="far fa-edit mr-1"></i> Reschedule
        </button>
        <button className="text-red-600 hover:text-red-800 text-sm font-medium">
          <i className="far fa-trash-alt mr-1"></i> Cancel
        </button>
      </div>
    </div>
  );
}