import axios from "axios";
import React, { useEffect, useState } from "react";

const Query = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get("https://server.3karyaninfotech.in/record/get-record");
        const records = response.data.records;
        setRecord(records);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, []);

  if (!record || record.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10 text-lg">
        No queries yet...
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Student Query Records</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border text-sm text-left text-gray-700 bg-white">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Email</th>
              <th scope="col" className="px-6 py-4">Mobile</th>
              <th scope="col" className="px-6 py-4">Message</th>
            </tr>
          </thead>
          <tbody>
            {record.map((item, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.email}</td>
                <td className="px-6 py-3">{item.mobile}</td>
                <td className="px-6 py-3">{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Query;
