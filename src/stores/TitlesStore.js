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
      const Self = self;// eslint no-param-reassign не стал добавлять правило
      Self.inputValue = text;
    },
    fetchTitles: flow(function* fetchTitles() {
      const Self = self;// eslint no-param-reassign
      Self.titles.clear();
      Self.state = 'pending';
      const url = `http://localhost:4000/items?place=${Self.inputValue}`;
      try {
        const rawItems = yield fetch(url);
        const jsonItems = yield rawItems.json();
        const filteredTitles = jsonItems.map(item => Title.create(
          { id: Math.random(), title: item.title, place: item.place },
        ));
        runInAction(() => {
          Self.titles = [...filteredTitles];
          Self.state = 'done';
        });
      } catch (error) {
        runInAction(() => {
          Self.state = 'error';
        });
      }
      Self.inputValue = '';
    }),
  }
  ));


const store = TitlesStore.create({});
export default store;
