'use server'

export default async function fetchData() {

   await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        return json;
    });

}