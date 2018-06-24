import { observable, action, computed, runInAction } from 'mobx';

class TitleStore {
    @observable titles = [];
    @observable places = [];
    @observable inputValue = '';

    @computed get getCount() {
        return this.titles.length;
    }

    getTitle(index) {
        return this.titles[index];
    }

    getPlace(index) {
        return this.places[index];
    }

    @computed get currentInputValue() {
        return this.inputValue;
    }

    fetchTitlesPlaces(city) {
        const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${city}&format=json&page=1`;
        fetch(url).then(
            response => {
                response.json().then(
                    data => {
                        this.places = Object.keys(data.items).map(item => data.items[item].place_of_publication);
                        this.titles = Object.keys(data.items).map(item => data.items[item].title);
                    })
            }
        )
        .catch(error => new Error(error));
    }
}

const store = new TitleStore();
export default store;