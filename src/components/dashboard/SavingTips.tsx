
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Tip {
  icon: string;
  text: string;
}

const tips: Tip[] = [
  {
    icon: "Lightbulb",
    text: "Установите датчики движения для автоматического отключения света в неиспользуемых помещениях."
  },
  {
    icon: "Lightbulb",
    text: "Используйте естественное освещение, разместив рабочие места ближе к окнам."
  },
  {
    icon: "Lightbulb",
    text: "Оптимизируйте температуру кондиционирования: 23-25°C летом и 20-22°C зимой."
  }
];

const SavingTips = () => {
  return (
    <Card className="bg-white shadow-sm mt-6">
      <div className="p-4">
        <h3 className="text-lg font-medium text-[#212121] mb-4">Советы по экономии</h3>
        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex">
              <div className="mr-3 text-[#388E3C]">
                <Icon name={tip.icon} size={20} />
              </div>
              <p className="text-sm text-[#212121]">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SavingTips;
