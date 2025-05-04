import { useState } from "react";

export function useSetup() {
    
  const [timeRange, setTimeRange] = useState('6m');

    const salesData = [
      { name: 'Jan', value: 4000 },
      { name: 'Fev', value: 3000 },
      { name: 'Mar', value: 5000 },
      { name: 'Abr', value: 2780 },
      { name: 'Mai', value: 1890 },
      { name: 'Jun', value: 2390 },
    ];
    
    const userData = [
      { name: 'Jan', novos: 4000, ativos: 2400 },
      { name: 'Fev', novos: 3000, ativos: 1398 },
      { name: 'Mar', novos: 5000, ativos: 9800 },
      { name: 'Abr', novos: 2780, ativos: 3908 },
      { name: 'Mai', novos: 1890, ativos: 4800 },
      { name: 'Jun', novos: 2390, ativos: 3800 },
    ];
    
    const pieData = [
      { name: 'Desktop', value: 400 },
      { name: 'Mobile', value: 300 },
      { name: 'Tablet', value: 200 },
    ];
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    
    const statusData = [
      { id: 1, title: "Relatório Mensal", status: "Concluído", progress: 100 },
      { id: 2, title: "Análise de Vendas", status: "Em Progresso", progress: 65 },
      { id: 3, title: "Pesquisa de Mercado", status: "Pendente", progress: 0 },
      { id: 4, title: "Relatório Financeiro", status: "Concluído", progress: 100 },
    ];
    
    const topProducts = [
      { id: 1, name: "Produto A", sales: 1245 },
      { id: 2, name: "Produto B", sales: 980 },
      { id: 3, name: "Produto C", sales: 752 },
      { id: 4, name: "Produto D", sales: 621 },
      { id: 5, name: "Produto E", sales: 430 },
    ];
    
    return {
        COLORS,
        statusData,
        topProducts,
        pieData,
        userData,
        salesData,
        timeRange,
        setTimeRange
    }
}