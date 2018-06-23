import { observable, action, computed } from 'mobx';

class TitleStore {
    @observable titles = ['Title1', 'Title2', 'Title3', 'Title4'];

    @observable places = ['Some st. 1', 'Some st. 2', 'Some st. 3', 'Some st. 4']

    getTitle(index) {
        return this.titles[index];
    }

    getPlace(index) {
        return this.places[index];
    }
}

const store = new TitleStore();
export default store;