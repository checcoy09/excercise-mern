import * as React from 'react';
class Developer {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    getName() {
    return this.firstName + ' ' + this.lastName;
    }
}
const robin = new Developer('Cherry', 'Napalit');
console.log(robin.getName());
const dennis = new Developer('Mark Nielrey', 'Salas');
console.log(dennis.getName());
const list = [ {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'mark',
    num_comments: 5,
    points: 4,
    objectID: 0,
},
{
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'mark, salas',
    num_comments: 2,
    points: 2,
    objectID: 1,
},
];
function App() { 
    return (
    <div>
    <h1>My Hacker Stories</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    <ul>
        {list.map(function (item) {
            return <li key={item.objectID}>
            <span>
            <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </li>
            })}
            </ul>
    <hr />
    </div>); 
}
function List() {
    return (
    <ul>
        {list.map(function (item) {
            return (<li key={item.objectID}>
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                </li>
            );
        })}
        <div>
            <Search />
            <hr />
            <List />
            </div>
    </ul>
    );
}
function Search() {
    return (
    <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />
    </div>
    );
}
export default App;