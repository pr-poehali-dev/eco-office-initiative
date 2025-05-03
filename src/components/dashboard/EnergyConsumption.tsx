
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface OfficeConsumptionProps {
  officeName: string;
  consumption: string;
  change: string;
  trend: "up" | "down";
}

const OfficeConsumption = ({ officeName, consumption, change, trend }: OfficeConsumptionProps) => {
  const trendColor = trend === "down" ? "text-green-500" : "text-red-500";
  const trendIcon = trend === "down" ? "TrendingDown" : "TrendingUp";

  return (
    <div className="bg-[#F0F4F8] rounded-lg p-3">
      <p className="text-[#757575] text-sm">{officeName}</p>
      <div className="flex justify-between items-center mt-1">
        <p className="font-bold text-[#212121]">{consumption}</p>
        <span className={`${trendColor} text-sm flex items-center`}>
          <Icon name={trendIcon} size={14} className="mr-1" />
          {change}
        </span>
      </div>
    </div>
  );
};

const officesData = [
  { officeName: "Офис 1", consumption: "124 кВт·ч", change: "-8%", trend: "down" as const },
  { officeName: "Офис 2", consumption: "86 кВт·ч", change: "-15%", trend: "down" as const },
  { officeName: "Офис 3", consumption: "76 кВт·ч", change: "+2%", trend: "up" as const }
];

const EnergyConsumption = () => {
  return (
    <Card className="bg-white shadow-sm">
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 className="text-lg font-medium text-[#212121]">Статистика энергопотребления</h3>
          <Tabs defaultValue="week">
            <TabsList className="bg-[#F0F4F8]">
              <TabsTrigger value="week">Неделя</TabsTrigger>
              <TabsTrigger value="month">Месяц</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="chart-container">
          <TabsContent value="week" className="h-full mt-0">
            <div className="flex items-center justify-center h-full bg-[#F0F4F8] rounded-lg">
              <div className="text-center">
                <Icon name="BarChart" size={48} className="mx-auto text-[#757575] mb-2" />
                <p className="text-[#757575]">График энергопотребления за неделю</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="month" className="h-full mt-0">
            <div className="flex items-center justify-center h-full bg-[#F0F4F8] rounded-lg">
              <div className="text-center">
                <Icon name="BarChart" size={48} className="mx-auto text-[#757575] mb-2" />
                <p className="text-[#757575]">График энергопотребления за месяц</p>
              </div>
            </div>
          </TabsContent>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {officesData.map((office, index) => (
            <OfficeConsumption
              key={index}
              officeName={office.officeName}
              consumption={office.consumption}
              change={office.change}
              trend={office.trend}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default EnergyConsumption;
