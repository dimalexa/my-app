import image1 from './images/slide1.jpg';
import image2 from './images/slide2.jpg';
import image3 from './images/slide3.jpg';
import image4 from './images/slide4.jpg';
import image5 from './images/slide5.jpg';

export const getImages = async () => {
  
  return [
    {
      id: 1,
      url: image1, // Это будет ссылка на собранный файл
      title: "Добро пожаловать",
      alt: "Приветственное изображение",
      localPath: require('./images/slide1.jpg').default
    },
    {
      id: 2,
      url: image2,
      title: "Наши продукты",
      alt: "Изображение продуктов"
    },
    {
      id: 3,
      url: image3,
      title: "Специальное предложение",
      alt: "Акционное изображение"
    },
    {
      id: 4,
      url: image4,
      title: "Отзывы клиентов",
      alt: "Довольные клиенты"
    },
    {
      id: 5,
      url: image5,
      title: "Контакты",
      alt: "Контактная информация"
    }
  ];
};