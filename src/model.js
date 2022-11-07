import maket from './assets/maket.jpg';
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from "./classes/block";

const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores libero quia labore nobis, ipsum, officiis cum culpa a architecto ducimus pariatur hic, eos ad quae quas at! Odio, nesciunt eum?'


export const model = [
  new TitleBlock('Конструктор сайтов на чистом JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),

  new ImageBlock(maket, {
    styles: {
      padding: '2rem 0',
      displey: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'image',
  }),

  new ColumnsBlock([
    'Приложение на чистом JS, без использования библиотек',
    'Узнаешь как работают принципы SOLID и ООП в JS за один курс',
    'JS - это просто, интересно. Научись создавать любые UI своими руками'
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      color: '#fff',
      padding: '2rem',
      'font-weight': 'bold'
    }
  }),

  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
];