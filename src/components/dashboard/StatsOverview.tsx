
import { StatCard } from "@/components/ui/Dashboard";

const statsData = [
  {
    title: "Энергопотребление",
    value: "286 кВт·ч",
    change: "-12%",
    icon: "Zap",
    trend: "down" as const
  },
  {
    title: "Температура",
    value: "22.5°C",
    change: "+0.8°C",
    icon: "Thermometer",
    trend: "up" as const
  },
  {
    title: "CO₂",
    value: "412 ppm",
    change: "-22 ppm",
    icon: "Wind",
    trend: "down" as const
  },
  {
    title: "Экономия",
    value: "12 450 ₽",
    change: "+8%",
    icon: "TrendingUp",
    trend: "up" as const
  }
];

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          trend={stat.trend}
        />
      ))}
    </div>
  );
};

export default StatsOverview;
