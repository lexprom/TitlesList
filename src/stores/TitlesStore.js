import { observable, action, computed, runInAction } from 'mobx';
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
        const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${this.inputValue}&format=json&page=1`
        try {
            const rawItems = await fetch(url);
            const jsonItems = await (await rawItems.json());
            let filteredTitles = jsonItems.items.map(item => new Title(item.title, item.place_of_publication));
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
        this.inputValue = '';
    }
}

const store = new TitlesStore();
export default store;