
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface QuickActionCardProps {
  title: string;
  icon: string;
  buttonText: string;
}

const QuickActionCard = ({ title, icon, buttonText }: QuickActionCardProps) => {
  return (
    <Card className="bg-white shadow-sm">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-[#F0F4F8] flex items-center justify-center text-[#388E3C] mr-3">
            <Icon name={icon} size={16} />
          </div>
          <h3 className="text-[#212121] font-medium">{title}</h3>
        </div>
        <Button 
          variant="outline" 
          className="w-full border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white"
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <QuickActionCard
        title="Отчеты"
        icon="FileText"
        buttonText="Сформировать отчет"
      />
      <QuickActionCard
        title="Управление"
        icon="Settings"
        buttonText="Перейти к устройствам"
      />
    </div>
  );
};

export default QuickActions;
