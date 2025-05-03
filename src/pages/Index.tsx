
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      {/* Hero section */}
      <header className="bg-gradient-to-r from-[#E5DEFF] to-[#F2FCE2] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#1A1F2C] mb-4">ЭкоОфис</h1>
          <p className="text-xl text-[#403E43] max-w-2xl mb-8">
            Современные решения для создания экологичного и устойчивого рабочего пространства
          </p>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
            Узнать больше
          </Button>
        </div>
      </header>

      {/* Benefits section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
          Преимущества эко-офиса
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover-scale">
            <div className="mb-4 text-[#9b87f5]">
              <Icon name="Leaf" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">Забота о природе</h3>
            <p className="text-[#403E43]">
              Уменьшите углеродный след вашей компании и внесите вклад в сохранение окружающей среды
            </p>
          </Card>
          
          <Card className="p-6 hover-scale">
            <div className="mb-4 text-[#9b87f5]">
              <Icon name="TrendingUp" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">Экономия ресурсов</h3>
            <p className="text-[#403E43]">
              Снизьте потребление электроэнергии, воды и расходных материалов, оптимизируя затраты
            </p>
          </Card>
          
          <Card className="p-6 hover-scale">
            <div className="mb-4 text-[#9b87f5]">
              <Icon name="Users" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">Здоровье сотрудников</h3>
            <p className="text-[#403E43]">
              Создайте комфортную атмосферу, которая положительно влияет на самочувствие и продуктивность команды
            </p>
          </Card>
        </div>
      </section>

      {/* Featured solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
            Наши решения
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 flex flex-col md:flex-row gap-4 hover-scale">
              <div className="w-full md:w-1/3 bg-[#F2FCE2] rounded-md flex items-center justify-center p-4">
                <Icon name="LightbulbOff" size={64} className="text-[#9b87f5]" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Энергосберегающие технологии</h3>
                <p className="text-[#403E43] mb-3">
                  Светодиодное освещение, умные датчики присутствия и системы управления энергопотреблением
                </p>
                <Button variant="outline" className="text-[#6E59A5]">Подробнее</Button>
              </div>
            </Card>
            
            <Card className="p-6 flex flex-col md:flex-row gap-4 hover-scale">
              <div className="w-full md:w-1/3 bg-[#F2FCE2] rounded-md flex items-center justify-center p-4">
                <Icon name="Recycle" size={64} className="text-[#9b87f5]" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Системы переработки отходов</h3>
                <p className="text-[#403E43] mb-3">
                  Раздельный сбор мусора, переработка бумаги и пластика, компостирование органических отходов
                </p>
                <Button variant="outline" className="text-[#6E59A5]">Подробнее</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#E5DEFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
            Готовы сделать ваш офис экологичным?
          </h2>
          <p className="text-lg text-[#403E43] max-w-2xl mx-auto mb-8">
            Свяжитесь с нами для консультации или запишитесь на бесплатный аудит вашего текущего офисного пространства
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
              Связаться с нами
            </Button>
            <Button variant="outline" className="border-[#9b87f5] text-[#6E59A5]">
              Узнать больше о наших услугах
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
