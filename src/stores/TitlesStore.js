import { observable, action, computed, runInAction } from 'mobx';
import 'babel-polyfill';

class Title {
    id = Math.random();
    @observable title;
    @observable place;

    constructor(title, place) {
        this.title = title;
        this.place = place;
    }
}

class TitleStore {
    @observable titles = [];
    @observable inputValue = '';
    @observable state = 'pending';

    @action async fetchTitles(city) {
        this.titles = [];
        this.state = 'pending';
        const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${city}&format=json&page=1`
        try {
            const rawItems = await fetch(url);
            const jsonItems = await rawItems.json();
            let filteredTitles = Object.keys(jsonItems.items).map(id => new Title(jsonItems.items[id].publisher, jsonItems.items[id].place_of_publication));
            runInAction(() => {
                this.titles = filteredTitles;
                this.state = 'done';
            });
        }
        catch (error) {
            runInAction(() => {
                this.state = "error";
            })
        }
    }
}

const store = new TitleStore();
export default store;