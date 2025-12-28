import StatCard from "../../../components/StatCard";

const AdminDashboard = () => {
  return (
    <div>
      <main className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Users" value="1,245" />
          <StatCard title="Orders" value="856" />
          <StatCard title="Revenue" value="$12,450" />
          <StatCard title="Pending" value="23" />
        </div>
      </main>
    </div>
  );
}

export  {AdminDashboard as Component}