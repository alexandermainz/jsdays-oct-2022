import Module from './module.js';
import { createServer } from 'node:http';
import { faker } from '@faker-js/faker';

console.log('Hallo Welt');

const m = new Module('klaus');
console.log(m);

// Faker-js (https://fakerjs.dev/guide/usage.html)
let names = new Set();
for (let i=0; i < 100; i++) {
  const randomName = faker.name.fullName(); // Rowan Nikolaus
  names.add(randomName);
}
console.log(names);

createServer((req, res) => {
    res.write('eins');
    res.write('zwei');
    res.end('foo');
})
.listen(8080, () =>
  console.log('listening')
);
