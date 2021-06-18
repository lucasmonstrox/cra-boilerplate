import * as faker from 'faker';

const makeTodo = (data = {}) => ({
  id: faker.datatype.uuid(),
  name: faker.random.words(3).substring(0, 19),
  done: faker.datatype.boolean(),
  ...data,
});

export default makeTodo;
