
const StatCard = ({ title, value }: { title: string; value: string })  => {

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}


export default StatCard