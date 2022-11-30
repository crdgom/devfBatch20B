/* console.log('Hello World desde node js...');
console.log(global) */

fetch ("https://opentdb.com/api.php?amount=10")
    .then (resp => resp.json())
    .then (data => console.log(data))
    .catch (error => console.log(error))

    