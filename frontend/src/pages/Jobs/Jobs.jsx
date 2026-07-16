import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/jobService";
import JobCard from "../../components/JobCard/JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      setJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Available Jobs
      </h1>

      {jobs.length === 0 ? (
        <h2 className="text-xl text-gray-500">
          No Jobs Found
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}

        </div>
      )}

    </div>
  );
};

export default Jobs;