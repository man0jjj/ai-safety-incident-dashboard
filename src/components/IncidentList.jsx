import IncidentItem from "./IncidentItem";

const IncidentList = ({ incidents }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {incidents.length > 0 ? (
        <ul className="space-y-4">
          {incidents.map((incident) => (
            <IncidentItem key={incident.id} incident={incident} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center mt-6 text-lg font-medium">
          🚨 No incidents found.
        </p>
      )}
    </div>
  );
};

export default IncidentList;
