import { observable, action, computed } from 'mobx';

class Title {
    id = Math.random();
    @observable title;
    @observable place;

    constructor(title,place) {
        this.title = title;
        this.place = place;
    }

}

class TitlesStore {
   @observable titles = [];
}

const store = new TitlesStore();
store.titles.push (
    new Title("Title 1","Place 1"),
    new Title("Title 2","Place 2"),
    new Title("Title 3","Place 3")
);
export default store;