import { Delay } from './delay';
import { IAuthor } from '../models/author';

const authors: IAuthor[] = [
    {
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
    },
    {
        id: 'scott-allen',
        firstName: 'Scott',
        lastName: 'Allen'
    },
    {
        id: 'dan-wahlin',
        firstName: 'Dan',
        lastName: 'Wahlin'
    }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author: IAuthor) => {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class AuthorApi {
    static async getAllAuthors() {
        let _authors: IAuthor[];

        await setTimeout(() => {
            Object.assign(_authors, authors);
        }, delay);

        return _authors;
    }

    static async saveAuthor(author: IAuthor) {
        author = Object.assign({}, author); // to avoid manipulating object passed in.

        await setTimeout(() => {
            const minAuthorNameLength =3;
            if(author.firstName.length < minAuthorNameLength) {
                throw(`First name must by at least ${minAuthorNameLength} characters.`);
            }

            if(author.lastName.length < minAuthorNameLength) {
                throw(`Last name must be at least ${minAuthorNameLength} characters.`)
            }

            if(author.id) {
                const existingAuthorIndex = authors.findIndex(a => a.id === author.id);
            } else {
                author.id = generateId(author);
                authors.push(author);
            }
        }, delay);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minAuthorNameLength = 3;
                if (author.firstName.length < minAuthorNameLength) {
                    reject(`First Name must be at least ${minAuthorNameLength} characters.`);
                }

                if (author.lastName.length < minAuthorNameLength) {
                    reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
                }

                if (author.id) {
                    const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
                    authors.splice(existingAuthorIndex, 1, author);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    author.id = generateId(author);
                    authors.push(author);
                }

                resolve(author);
            }, delay);
        });
    }

    static async deleteAuthor(authorId: string) {
        await setTimeout(() => {
            const indexOfAuthorToDelete = authors.findIndex(a => a.id === authorId);

            authors.splice(indexOfAuthorToDelete, 1);
        }, delay);
    }
}
