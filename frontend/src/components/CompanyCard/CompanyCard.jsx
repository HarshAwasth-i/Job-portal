const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-bold text-blue-600">
        {company.name}
      </h3>

      <p className="mt-2 text-gray-600">
        {company.jobs} Open Jobs
      </p>
    </div>
  );
};

export default CompanyCard;