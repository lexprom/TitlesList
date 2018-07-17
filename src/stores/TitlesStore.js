import {
  observable, action, runInAction,
} from 'mobx';
import Title from './Title';
import 'babel-polyfill';

class TitlesStore {
    @observable titles = [];

    @observable inputValue = '';

    @observable state = 'pending';


    @action setInput(text) {
      this.inputValue = text;
    }

    @action async fetchTitles() {
      this.titles.clear();
      this.state = 'pending';
      const url = `http://localhost:4000/items?place=${this.inputValue}`;
      try {
        const rawItems = await fetch(url);
        const jsonItems = await rawItems.json();
        const filteredTitles = jsonItems.map(item => new Title(item.title, item.place));
        runInAction(() => {
          this.titles = [...filteredTitles];
          this.state = 'done';
        });
      } catch (error) {
        runInAction(() => {
          this.state = 'error';
        });
      }
      this.inputValue = '';
    }
}

const store = new TitlesStore();
export default store;
