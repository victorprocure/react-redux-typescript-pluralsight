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

        await new Promise(resolve => setTimeout(resolve, Delay));
        Object.assign(_authors, authors);

        return _authors;
    }

    static async saveAuthor(author: IAuthor) {
        author = Object.assign({}, author); // to avoid manipulating object passed in.

        await new Promise(resolve => setTimeout(resolve, Delay));
        
        const minAuthorNameLength = 3;
        if (author.firstName.length < minAuthorNameLength) {
            throw (`First name must by at least ${minAuthorNameLength} characters.`);
        }

        if (author.lastName.length < minAuthorNameLength) {
            throw (`Last name must be at least ${minAuthorNameLength} characters.`)
        }

        if (author.id) {
            const existingAuthorIndex = authors.findIndex(a => a.id === author.id);
        } else {
            author.id = generateId(author);
            authors.push(author);
        }

        return author;
    }

    static async deleteAuthor(authorId: string) {
        await setTimeout(() => {
            const indexOfAuthorToDelete = authors.findIndex(a => a.id === authorId);

            authors.splice(indexOfAuthorToDelete, 1);
        }, delay);
    }
}
