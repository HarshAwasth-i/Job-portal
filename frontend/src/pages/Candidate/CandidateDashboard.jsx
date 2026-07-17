import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getUserApplications } from "../../services/applicationService";

const CandidateDashboard = () => {
  const { user } = useAuth();

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await getUserApplications(user.id);
      setApplications(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          My Applications
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Track all the jobs you've applied for.
        </p>

      </div>

      {applications.length === 0 ? (

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-8 text-center">

          <h2 className="text-lg text-gray-600 dark:text-gray-300">
            You haven't applied to any jobs yet.
          </h2>

        </div>

      ) : (

        <div className="space-y-6">

          {applications.map((application) => (

            <div
              key={application.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 transition-all duration-300"
            >

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {application.title}
              </h2>

              <p className="text-blue-600 mt-2">
                {application.company}
              </p>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                📍 {application.location}
              </p>

              <p className="text-green-600 font-semibold mt-2">
                💰 {application.salary}
              </p>

              <div className="mt-4">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Status:
                </span>

                <span className="ml-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  {application.status}
                </span>
              </div>

              <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
                Applied on{" "}
                {new Date(application.applied_at).toLocaleDateString()}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default CandidateDashboard;