import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-4xl font-bold">
        Welcome, {user?.name} 👋
      </h1>

      <p className="text-gray-500 mt-3">
        This is your dashboard.
      </p>
    </div>
  );
};

export default Dashboard;