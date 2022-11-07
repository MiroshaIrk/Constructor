import { block } from '../utils'
import { TextBlock, TitleBlock } from './block';

export class Sidebar {
  constructor(selector, updateCollback) {
    this.$el = document.querySelector(selector);
    this.update = updateCollback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [
      block('text'),
      block('title')
    ].join('');
  }

  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    const newBlock = type === 'text'
      ? new TextBlock(value, { styles })
      : TitleBlock(value, { styles });
    console.log(newBlock);

    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}

