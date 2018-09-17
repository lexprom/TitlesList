import { runInAction } from 'mobx';
import { types, flow } from 'mobx-state-tree';
import Title from './Title';
import 'babel-polyfill';

const TitlesStore = types.model({
  titles: types.array(Title),
  inputValue: '',
  state: 'pending',
})
  .actions(self => ({
    setInput(text) {
      self.inputValue = text;
    },
    fetchTitles: flow(function* fetchTitles() {
      self.titles.clear();
      self.state = 'pending';
      const url = `http://localhost:4000/items?place=${self.inputValue}`;
      try {
        const rawItems = yield fetch(url);
        const jsonItems = yield rawItems.json();
        const filteredTitles = jsonItems.map(item => ({ id: item.id, title: item.title, place: item.place }));
        runInAction(() => {
          self.titles.replace(filteredTitles);
          self.state = 'done';
        });
      } catch (error) {
        runInAction(() => {
          self.state = 'error';
        });
      }
      self.inputValue = '';
    }),
  }
  ));


const store = TitlesStore.create({});
export default store;
