import { observable } from 'mobx';

export default class Title {
    id = Math.random();

    @observable title;

    @observable place;

    constructor(title, place) {
      this.title = title;
      this.place = place;
    }
}
