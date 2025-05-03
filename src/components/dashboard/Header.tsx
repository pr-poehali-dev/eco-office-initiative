
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-[#212121]">Эко Офис - Обзор</h1>
        <p className="text-[#757575]">Панель мониторинга и управления</p>
      </div>
      <div className="mt-4 md:mt-0">
        <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white">
          <Icon name="Plus" size={16} className="mr-2" />
          Новое действие
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
