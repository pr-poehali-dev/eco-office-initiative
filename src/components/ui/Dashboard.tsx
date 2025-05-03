
import { Card } from "./card";
import Icon from "./icon";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  icon: string;
  trend: "up" | "down" | "neutral";
}

const StatCard = ({ title, value, change, icon, trend }: StatCardProps) => {
  const trendColor = trend === "up" 
    ? "text-red-500" 
    : trend === "down" 
      ? "text-green-500" 
      : "text-gray-500";
  
  const trendIcon = trend === "up" 
    ? "TrendingUp" 
    : trend === "down" 
      ? "TrendingDown" 
      : "Minus";

  return (
    <Card className="bg-white shadow-sm">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[#757575] text-sm">{title}</p>
            <h3 className="text-2xl font-bold text-[#212121] mt-1">{value}</h3>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#F0F4F8] flex items-center justify-center text-[#388E3C]">
            <Icon name={icon} size={20} />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className={`inline-flex items-center ${trendColor}`}>
            <Icon name={trendIcon} size={16} className="mr-1" />
            {change}
          </span>
          <span className="text-[#757575] text-sm ml-2">vs предыдущая неделя</span>
        </div>
      </div>
    </Card>
  );
};

type Event = {
  id: number;
  time: string;
  description: string;
  type: "info" | "warning" | "success" | "error";
}

type EventLogProps = {
  events: Event[];
}

const EventLog = ({ events }: EventLogProps) => {
  const getIconByType = (type: Event["type"]) => {
    switch(type) {
      case "info": return "Info";
      case "warning": return "AlertTriangle";
      case "success": return "CheckCircle";
      case "error": return "XCircle";
      default: return "Circle";
    }
  };

  const getColorByType = (type: Event["type"]) => {
    switch(type) {
      case "info": return "text-blue-500";
      case "warning": return "text-yellow-500";
      case "success": return "text-[#4CAF50]";
      case "error": return "text-[#F44336]";
      default: return "text-[#757575]";
    }
  };

  return (
    <Card className="bg-white shadow-sm">
      <div className="p-4">
        <h3 className="text-lg font-medium text-[#212121] mb-4">Последние события</h3>
        <div className="space-y-3">
          {events.map((event) => (
            <div key={event.id} className="flex items-start">
              <div className={`mt-0.5 mr-3 ${getColorByType(event.type)}`}>
                <Icon name={getIconByType(event.type)} size={16} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#212121]">{event.description}</p>
                <p className="text-xs text-[#757575]">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export { StatCard, EventLog };
