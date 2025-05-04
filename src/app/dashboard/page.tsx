'use client';

import { ChartCard } from '@/components/chart/ChartCard';
import { MetricCard } from '@/components/chart/MetricCard';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { useSetup } from './hooks/useSetup';

export default function DashboardPage() {
  const {COLORS, pieData, salesData, setTimeRange, statusData, timeRange, topProducts, userData} = useSetup()

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard Analítico</h1>
        <div className="mt-4 md:mt-0">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="1m">Último mês</option>
            <option value="3m">Últimos 3 meses</option>
            <option value="6m">Últimos 6 meses</option>
            <option value="1y">Último ano</option>
          </select>
        </div>
      </div>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard title="Total de Vendas" value="R$ 24.560" change="+12%" positive />
        <MetricCard title="Usuários Ativos" value="8.742" change="+5%" positive />
        <MetricCard title="Taxa de Conversão" value="3.2%" change="-0.5%" />
        <MetricCard title="Novos Clientes" value="324" change="+18%" positive />
      </div>

      {/* Gráficos Principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Vendas Mensais">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="Vendas (R$)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Usuários Ativos vs Novos">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ativos" stroke="#8884d8" name="Usuários Ativos" />
              <Line type="monotone" dataKey="novos" stroke="#82ca9d" name="Novos Usuários" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Segunda Linha de Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard title="Dispositivos Utilizados">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Tendência de Vendas">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Top Produtos">
          <div className="space-y-3 mt-4">
            {topProducts.map((product) => (
              <div key={product.id} className="flex items-center">
                <div className="w-32 text-sm font-medium text-gray-700">{product.name}</div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500" 
                      style={{ width: `${(product.sales / topProducts[0].sales) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="ml-2 text-sm font-medium text-gray-900">{product.sales}</div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Status de Relatórios">
          <div className="space-y-4">
            {statusData.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded-lg border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{item.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === "Concluído" ? "bg-green-100 text-green-800" :
                    item.status === "Em Progresso" ? "bg-blue-100 text-blue-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Atividades Recentes">
          <div className="space-y-4">
            {[
              { id: 1, action: "Relatório mensal gerado", time: "2 horas atrás", user: "Ana Silva" },
              { id: 2, action: "Novo cliente cadastrado", time: "5 horas atrás", user: "Carlos Souza" },
              { id: 3, action: "Atualização de estoque", time: "1 dia atrás", user: "Pedro Alves" },
              { id: 4, action: "Pagamento recebido", time: "2 dias atrás", user: "Sistema" },
            ].map((activity) => (
              <div key={activity.id} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time} • por {activity.user}</p>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  );
}