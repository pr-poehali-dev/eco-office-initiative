
import Sidebar from "@/components/ui/Sidebar";
import { EventLog } from "@/components/ui/Dashboard";
import DashboardHeader from "@/components/dashboard/Header";
import StatsOverview from "@/components/dashboard/StatsOverview";
import EnergyConsumption from "@/components/dashboard/EnergyConsumption";
import QuickActions from "@/components/dashboard/QuickActions";
import SavingTips from "@/components/dashboard/SavingTips";

// Данные для событий
const mockEvents = [
  { id: 1, time: "Сегодня, 10:23", description: "Температура в Офисе 1 достигла оптимального значения", type: "success" as const },
  { id: 2, time: "Сегодня, 09:15", description: "Устройство 'Умный термостат' подключено", type: "info" as const },
  { id: 3, time: "Вчера, 18:42", description: "Превышение лимита потребления в Офисе 2", type: "warning" as const },
  { id: 4, time: "Вчера, 16:30", description: "Ошибка синхронизации с датчиком CO₂", type: "error" as const },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F8] flex">
      <Sidebar />
      
      <div className="flex-1 md:ml-64 p-4 md:p-6">
        <DashboardHeader />
        <StatsOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Левая колонка - потребление энергии */}
          <div className="lg:col-span-2">
            <EnergyConsumption />
            <QuickActions />
          </div>
          
          {/* Правая колонка - события и советы */}
          <div>
            <EventLog events={mockEvents} />
            <SavingTips />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
