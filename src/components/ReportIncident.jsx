import { useState } from "react";

const ReportIncident = ({ onAddIncident }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title and Description are required!");
      return;
    }

    const newIncident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };

    onAddIncident(newIncident);
    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 border border-gray-300 rounded-lg bg-white shadow-md mt-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        📝 Report a New Incident
      </h2>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Incident Title"
        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      {/* Description Input */}
      <textarea
        placeholder="Incident Description"
        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 mb-3"
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>

      {/* Severity Selection */}
      <select
        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 mb-4"
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
      >
        Submit Incident
      </button>
    </form>
  );
};

export default ReportIncident;
