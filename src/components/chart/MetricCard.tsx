type MetricCardProps = { title: string, value: string, change: string, positive?: ConstrainBoolean}
export function MetricCard({ title, value, change, positive = false }: MetricCardProps) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <span className={`ml-2 text-sm font-medium ${
            positive ? "text-green-600" : "text-red-600"
          }`}>
            {change}
          </span>
        </div>
      </div>
    );
  }