import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-6xl mx-auto py-10">

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 transition-all duration-300">

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome, {user?.name} 👋
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-3">
          This is your dashboard.
        </p>

      </div>

    </div>
  );
};

export default Dashboard;