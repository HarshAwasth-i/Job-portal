import { useEffect, useState } from "react";
import { getApplicantsByJob } from "../../services/applicationService";

const ApplicantsList = ({ jobId }) => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetchApplicants();
  }, [jobId]);

  const fetchApplicants = async () => {
    try {
      const response = await getApplicantsByJob(jobId);
      setApplicants(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (applicants.length === 0) {
    return (
      <p className="text-gray-500 mt-4">
        No applicants yet.
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {applicants.map((applicant) => (
        <div
          key={applicant.id}
          className="border rounded-lg p-4 bg-gray-50"
        >
          <h3 className="font-semibold text-lg">
            {applicant.name}
          </h3>

          <p>{applicant.email}</p>

          <p className="mt-2">
            <strong>Status:</strong> {applicant.status}
          </p>

          <p className="text-sm text-gray-500">
            Applied on{" "}
            {new Date(applicant.applied_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ApplicantsList;