import Button from "../../components/Button/Button";
import JobCard from "../../components/JobCard/JobCard";
import jobs from "../../utils/jobsData";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import companies from "../../utils/companyData";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">

        <h1 className="text-6xl font-bold leading-tight">
          Find Your
          <span className="text-blue-600"> Dream Job</span>
        </h1>

        <p className="text-gray-600 mt-6 text-lg max-w-2xl">
          Search thousands of jobs from top companies and start your career today.
        </p>

        <div className="mt-10 flex w-full max-w-2xl shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search job title..."
            className="flex-1 px-5 py-4 outline-none"
          />

          <Button text="Search" className="rounded-none" />
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Jobs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
      {/* Top Companies */}
<section className="py-16">
  <h2 className="text-4xl font-bold text-center mb-10">
    Top Companies Hiring Now
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {companies.map((company) => (
      <CompanyCard key={company.id} company={company} />
    ))}
  </div>
</section>
    </>
  );
};

export default Home;