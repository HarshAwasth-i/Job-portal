import { Button } from "@/components/ui/button";
import JobCard from "@/components/JobCard/JobCard";
import jobs from "../../utils/jobsData";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import companies from "../../utils/companyData";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24">

  <div className="text-center">

    <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
      🚀 India's Fastest Growing Job Portal
    </span>

    <h1 className="text-6xl font-extrabold mt-8 leading-tight">
      Find Your
      <span className="text-blue-600"> Dream Career</span>
    </h1>

    <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
      Discover thousands of opportunities from top companies and take the next step in your career.
    </p>

    {/* Stats */}
    <div className="flex justify-center gap-10 mt-10 flex-wrap">

      <div>
        <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
        <p className="text-gray-500">Jobs</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-blue-600">500+</h2>
        <p className="text-gray-500">Companies</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-blue-600">50K+</h2>
        <p className="text-gray-500">Candidates</p>
      </div>

    </div>

    {/* Search */}

    <div className="max-w-3xl mx-auto mt-12 flex items-center bg-white rounded-xl border shadow-lg overflow-hidden">

      <Search className="ml-5 text-gray-400" size={22} />

      <input
        type="text"
        placeholder="Search Jobs..."
        className="flex-1 px-4 py-5 outline-none"
      />

     <Button className="rounded-none h-full px-8">
  Search
</Button>

    </div>

    {/* Trending */}

    <div className="mt-8 flex justify-center gap-3 flex-wrap">

      {["React", "Node.js", "Python", "Java", "AI"].map((skill) => (

        <span
          key={skill}
          className="bg-gray-100 px-4 py-2 rounded-full text-sm"
        >
          {skill}
        </span>

      ))}

    </div>

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