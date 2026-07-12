import Button from "../Button/Button";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">

      <h2 className="text-2xl font-bold">{job.title}</h2>

      <p className="text-gray-600 mt-2">
        {job.company}
      </p>

      <p className="text-gray-500">
        📍 {job.location}
      </p>

      <p className="text-blue-600 font-semibold mt-3">
        {job.salary}
      </p>

      <div className="mt-5">
        <Button text="Apply" />
      </div>

    </div>
  );
};

export default JobCard;