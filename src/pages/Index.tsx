import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  const accommodations = [
    {
      id: 1,
      name: "Люкс Шатер",
      price: "8,000₽",
      features: ["Кровать King Size", "Частная терраса", "Мини-кухня", "WiFi"],
      image: "/img/07c88e82-21ba-424b-8acd-cf1252809a15.jpg"
    },
    {
      id: 2,
      name: "Семейный Шатер", 
      price: "12,000₽",
      features: ["2 спальни", "Гостиная зона", "Барбекю", "Детская площадка"],
      image: "/img/8115aa44-da8a-4265-9b3f-f31c3b1e2ac1.jpg"
    },
    {
      id: 3,
      name: "Романтик Шатер",
      price: "10,000₽", 
      features: ["Джакузи", "Камин", "Панорамные окна", "Завтрак в номер"],
      image: "/img/96e7f875-aa8c-479f-b9f6-a3289f3cf304.jpg"
    }
  ];

  const services = [
    { icon: "Utensils", title: "Ресторан", description: "Авторская кухня из местных продуктов" },
    { icon: "Waves", title: "СПА-процедуры", description: "Массаж и релаксация на природе" },
    { icon: "Mountain", title: "Активный отдых", description: "Пешие прогулки и велосипедные маршруты" },
    { icon: "Campfire", title: "Вечерние посиделки", description: "Костер, гитара и звездное небо" }
  ];

  const reviews = [
    { name: "Анна К.", rating: 5, text: "Потрясающее место для отдыха! Чистый воздух, красивая природа и отличный сервис." },
    { name: "Михаил С.", rating: 5, text: "Идеально подходит для семейного отдыха. Дети в восторге от природы!" },
    { name: "Елена П.", rating: 5, text: "Романтическая атмосфера и невероятные закаты. Обязательно вернемся!" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="font-playfair text-2xl font-bold text-primary">EcoRetreat</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#accommodation" className="text-foreground hover:text-primary transition-colors">Размещение</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#territory" className="text-foreground hover:text-primary transition-colors">Территория</a>
              <a href="#booking" className="text-foreground hover:text-primary transition-colors">Бронирование</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary text-primary-foreground">Забронировать</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(/img/96e7f875-aa8c-479f-b9f6-a3289f3cf304.jpg)`}}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Отдых в гармонии с природой
          </h1>
          <p className="font-source text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Откройте для себя уникальный опыт глэмпинга в самом сердце природы
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Забронировать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section id="accommodation" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-primary">Размещение</h2>
            <p className="font-source text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальное место для вашего незабываемого отдыха
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-playfair text-xl font-semibold">{item.name}</h3>
                    <Badge variant="secondary" className="text-lg font-bold">{item.price}</Badge>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-primary">Галерея</h2>
            <p className="font-source text-lg text-muted-foreground">
              Погрузитесь в атмосферу нашего глэмпинга
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-4">
              <img 
                src="/img/8115aa44-da8a-4265-9b3f-f31c3b1e2ac1.jpg" 
                alt="Глэмпинг"
                className="w-full rounded-lg hover:scale-105 transition-transform cursor-pointer"
              />
              <img 
                src="/img/07c88e82-21ba-424b-8acd-cf1252809a15.jpg" 
                alt="Интерьер"
                className="w-full rounded-lg hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="/img/96e7f875-aa8c-479f-b9f6-a3289f3cf304.jpg" 
                alt="Территория"
                className="w-full rounded-lg hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="/img/8115aa44-da8a-4265-9b3f-f31c3b1e2ac1.jpg" 
                alt="Отдых"
                className="w-full rounded-lg hover:scale-105 transition-transform cursor-pointer"
              />
              <img 
                src="/img/07c88e82-21ba-424b-8acd-cf1252809a15.jpg" 
                alt="Комфорт"
                className="w-full rounded-lg hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-primary">Услуги</h2>
            <p className="font-source text-lg text-muted-foreground">
              Все для вашего комфортного отдыха
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold">{service.title}</h3>
                  <p className="font-source text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Territory */}
      <section id="territory" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-primary">Территория</h2>
            <p className="font-source text-lg text-muted-foreground mb-8">
              Изучите нашу уникальную территорию
            </p>
          </div>
          <Tabs defaultValue="nature" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="nature">Природа</TabsTrigger>
              <TabsTrigger value="activities">Активности</TabsTrigger>
              <TabsTrigger value="facilities">Удобства</TabsTrigger>
              <TabsTrigger value="dining">Питание</TabsTrigger>
            </TabsList>
            <TabsContent value="nature" className="space-y-6">
              <div className="text-center">
                <h3 className="font-playfair text-2xl font-semibold mb-4">Девственная природа</h3>
                <p className="font-source text-muted-foreground mb-6">
                  50 гектаров нетронутого леса, кристально чистое озеро и горные вершины на горизонте
                </p>
                <img 
                  src="/img/96e7f875-aa8c-479f-b9f6-a3289f3cf304.jpg" 
                  alt="Природа"
                  className="w-full rounded-lg"
                />
              </div>
            </TabsContent>
            <TabsContent value="activities" className="space-y-6">
              <div className="text-center">
                <h3 className="font-playfair text-2xl font-semibold mb-4">Активный отдых</h3>
                <p className="font-source text-muted-foreground mb-6">
                  Пешие маршруты, велосипедные прогулки, рыбалка и водные виды спорта
                </p>
                <img 
                  src="/img/8115aa44-da8a-4265-9b3f-f31c3b1e2ac1.jpg" 
                  alt="Активности"
                  className="w-full rounded-lg"
                />
              </div>
            </TabsContent>
            <TabsContent value="facilities" className="space-y-6">
              <div className="text-center">
                <h3 className="font-playfair text-2xl font-semibold mb-4">Удобства</h3>
                <p className="font-source text-muted-foreground mb-6">
                  СПА-зона, библиотека, детская площадка и зоны для барбекю
                </p>
                <img 
                  src="/img/07c88e82-21ba-424b-8acd-cf1252809a15.jpg" 
                  alt="Удобства"
                  className="w-full rounded-lg"
                />
              </div>
            </TabsContent>
            <TabsContent value="dining" className="space-y-6">
              <div className="text-center">
                <h3 className="font-playfair text-2xl font-semibold mb-4">Ресторан</h3>
                <p className="font-source text-muted-foreground mb-6">
                  Авторская кухня из экологически чистых местных продуктов
                </p>
                <img 
                  src="/img/96e7f875-aa8c-479f-b9f6-a3289f3cf304.jpg" 
                  alt="Ресторан"
                  className="w-full rounded-lg"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-4">Готовы к незабываемому отдыху?</h2>
          <p className="font-source text-xl mb-8 opacity-90">
            Забронируйте свой идеальный отдых уже сегодня
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center space-x-2 text-primary-foreground/90">
              <Icon name="Phone" size={20} />
              <span className="font-source">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/90">
              <Icon name="Mail" size={20} />
              <span className="font-source">booking@ecoretreat.ru</span>
            </div>
            <Button size="lg" variant="outline" className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Забронировать онлайн
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-primary">Отзывы гостей</h2>
            <p className="font-source text-lg text-muted-foreground">
              Что говорят наши гости о своем отдыхе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="font-source text-muted-foreground mb-4">"{review.text}"</p>
                  <p className="font-playfair font-semibold">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-primary">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-source text-left">
                Что входит в стоимость проживания?
              </AccordionTrigger>
              <AccordionContent className="font-source text-muted-foreground">
                В стоимость включено проживание, завтрак, пользование всей территорией, WiFi и парковка.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-source text-left">
                Можно ли приезжать с домашними животными?
              </AccordionTrigger>
              <AccordionContent className="font-source text-muted-foreground">
                Да, мы принимаем гостей с домашними животными за дополнительную плату 1000₽ за ночь.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-source text-left">
                Есть ли трансфер от города?
              </AccordionTrigger>
              <AccordionContent className="font-source text-muted-foreground">
                Да, мы предоставляем трансфер от ж/д станции. Стоимость 2000₽ в одну сторону.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-primary">Контакты</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-4">Как нас найти</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-source">Московская область</p>
                      <p className="font-source text-muted-foreground">д. Лесная, 15</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <p className="font-source">+7 (999) 123-45-67</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <p className="font-source">info@ecoretreat.ru</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-4">Время работы</h3>
                <p className="font-source text-muted-foreground">Круглосуточно, 7 дней в неделю</p>
                <p className="font-source text-muted-foreground">Администрация: 8:00 - 22:00</p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-playfair text-xl font-semibold mb-4">Свяжитесь с нами</h3>
              <p className="font-source text-muted-foreground mb-6">
                Готовы ответить на все ваши вопросы и помочь с бронированием
              </p>
              <Button className="w-full bg-primary text-primary-foreground mb-4">
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </Button>
              <Button variant="outline" className="w-full">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-playfair text-2xl font-bold mb-4">EcoRetreat</h3>
          <p className="font-source opacity-90 mb-4">
            Отдых в гармонии с природой
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <Icon name="Instagram" size={20} className="hover:opacity-80 cursor-pointer" />
            <Icon name="Facebook" size={20} className="hover:opacity-80 cursor-pointer" />
            <Icon name="Youtube" size={20} className="hover:opacity-80 cursor-pointer" />
          </div>
          <p className="font-source text-sm opacity-80">
            © 2024 EcoRetreat. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}