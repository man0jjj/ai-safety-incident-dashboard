import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const IncidentItem = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="border border-gray-300 p-5 mb-4 rounded-lg shadow-md bg-white transition-all">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{incident.title}</h2>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-bold">Severity:</span> {incident.severity} |
            <span className="font-bold"> Reported:</span> {new Date(incident.reported_at).toDateString()}
          </p>
        </div>
        <button
          className="text-blue-600 flex items-center gap-1 px-3 py-1 rounded-md hover:bg-blue-100 hover:text-blue-800 transition"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide Details" : "View Details"}
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      <div
        className={`mt-3 p-4 bg-gray-100 rounded text-gray-700 transition-all duration-300 ${
          expanded ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {incident.description}
      </div>
    </li>
  );
};

export default IncidentItem;
