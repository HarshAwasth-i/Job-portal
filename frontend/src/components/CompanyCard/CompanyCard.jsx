const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-2xl font-bold text-blue-600">
        {company.name}
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {company.jobs} Open Jobs
      </p>
    </div>
  );
};

export default CompanyCard;