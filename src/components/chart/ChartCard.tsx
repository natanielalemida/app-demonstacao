import { JSX } from "react";

type ChartCardProps = {title: string, children: JSX.Element}
export function ChartCard({ title, children } : ChartCardProps) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
      </div>
    );
  }