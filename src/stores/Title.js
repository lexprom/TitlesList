import { types } from 'mobx-state-tree';

const Title = types.model({
  id: types.number,
  title: types.string,
  place: types.string,
});

export default Title;
