import { faker, FakerError } from "@faker-js/faker";

class UserDataGenerator {
    #data = [];

    get data() {
        if (this.#data.length > 0)
            return this.#data;

        this.#data = new Array(100).fill('').map((data) => ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        }));
        return this.#data;
    }
}

let g = new UserDataGenerator();
for (const o of g.data)
 console.log(o.firstName, o.lastName);
 