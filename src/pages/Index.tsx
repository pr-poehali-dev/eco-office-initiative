
import Sidebar from "@/components/ui/Sidebar";
import { EventLog } from "@/components/ui/Dashboard";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/ui/Dashboard";

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
        {/* Header */}
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
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard 
            title="Энергопотребление" 
            value="286 кВт·ч" 
            change="-12%" 
            icon="Zap" 
            trend="down" 
          />
          <StatCard 
            title="Температура" 
            value="22.5°C" 
            change="+0.8°C" 
            icon="Thermometer" 
            trend="up" 
          />
          <StatCard 
            title="CO₂" 
            value="412 ppm" 
            change="-22 ppm" 
            icon="Wind" 
            trend="down" 
          />
          <StatCard 
            title="Экономия" 
            value="12 450 ₽" 
            change="+8%" 
            icon="TrendingUp" 
            trend="up" 
          />
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Energy Consumption */}
          <div className="lg:col-span-2">
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
                  <div className="bg-[#F0F4F8] rounded-lg p-3">
                    <p className="text-[#757575] text-sm">Офис 1</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="font-bold text-[#212121]">124 кВт·ч</p>
                      <span className="text-green-500 text-sm flex items-center">
                        <Icon name="TrendingDown" size={14} className="mr-1" />
                        -8%
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#F0F4F8] rounded-lg p-3">
                    <p className="text-[#757575] text-sm">Офис 2</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="font-bold text-[#212121]">86 кВт·ч</p>
                      <span className="text-green-500 text-sm flex items-center">
                        <Icon name="TrendingDown" size={14} className="mr-1" />
                        -15%
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#F0F4F8] rounded-lg p-3">
                    <p className="text-[#757575] text-sm">Офис 3</p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="font-bold text-[#212121]">76 кВт·ч</p>
                      <span className="text-red-500 text-sm flex items-center">
                        <Icon name="TrendingUp" size={14} className="mr-1" />
                        +2%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card className="bg-white shadow-sm">
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 rounded-full bg-[#F0F4F8] flex items-center justify-center text-[#388E3C] mr-3">
                      <Icon name="FileText" size={16} />
                    </div>
                    <h3 className="text-[#212121] font-medium">Отчеты</h3>
                  </div>
                  <Button variant="outline" className="w-full border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white">
                    Сформировать отчет
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 rounded-full bg-[#F0F4F8] flex items-center justify-center text-[#388E3C] mr-3">
                      <Icon name="Settings" size={16} />
                    </div>
                    <h3 className="text-[#212121] font-medium">Управление</h3>
                  </div>
                  <Button variant="outline" className="w-full border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white">
                    Перейти к устройствам
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Right Column - Events */}
          <div>
            <EventLog events={mockEvents} />
            
            <Card className="bg-white shadow-sm mt-6">
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#212121] mb-4">Советы по экономии</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="mr-3 text-[#388E3C]">
                      <Icon name="Lightbulb" size={20} />
                    </div>
                    <p className="text-sm text-[#212121]">Установите датчики движения для автоматического отключения света в неиспользуемых помещениях.</p>
                  </div>
                  <div className="flex">
                    <div className="mr-3 text-[#388E3C]">
                      <Icon name="Lightbulb" size={20} />
                    </div>
                    <p className="text-sm text-[#212121]">Используйте естественное освещение, разместив рабочие места ближе к окнам.</p>
                  </div>
                  <div className="flex">
                    <div className="mr-3 text-[#388E3C]">
                      <Icon name="Lightbulb" size={20} />
                    </div>
                    <p className="text-sm text-[#212121]">Оптимизируйте температуру кондиционирования: 23-25°C летом и 20-22°C зимой.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
