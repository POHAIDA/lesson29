// завдання 1

// function getData (url){
//     let result = fetch(url);
//     result.then(response =>
//         {
//             if(response.ok){
//             	return response.json();
//             }
//            throw new Error(`Error: ${response.status}`);
//         })
//         .then(data => {
//             console.log(data.filter(result => result.title[0] === 'a'));
//     })
//     .catch(error => console.log(error.message))
// }

// getData('https://jsonplaceholder.typicode.com/todos');

//завдання 2

// async function getAsincData(url){
//     try{
//         let result = await fetch(url);
//         if(result.ok){
//             let response = await result.json();
//             console.log(response.filter(result => result.title[0] === 'a'))
//         } else {
//             throw new Error(`Error: ${result.status}`);
//         }
//     } catch(error){
//         console.log(error.message)
//     }
// }
// getAsincData('https://jsonplaceholder.typicode.com/todos');

// завдання 3

// async function getAsincData(url){
//     try{
//         let result = await fetch(url)
//         if(result.ok){
//             let response = await result.json();
//             let filtera = response.filter(result => result.title[0] === 'a')
//             for (const title of filtera) {
//                  document.querySelector('.user-a').innerHTML += JSON.stringify(title) + '<br>'
//             }
//             let filterab = response.filter(result => result.title[0] === 'a' && result.title[1] === 'b')
//             for (const title of filterab) {
//                 document.querySelector('.userAB').innerHTML += JSON.stringify(title)
//             }
//         } else {
//             throw new Error(`Error: ${result.status}`);
//         }
//     } catch(error){
//         console.log(error.message)
//     }
// }
// getAsincData('https://jsonplaceholder.typicode.com/todos');

//4 Завдання

let adda = document.querySelector('.add-a')
adda.addEventListener('click', getAsincData)
async function getAsincData() {
  
    let result = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (result.ok) {
        let response = await result.json();
        let filtera = response.filter(result => result.title[0] === 'a')
        for (const title of filtera) {
            document.querySelector('.user-a').innerHTML += JSON.stringify(title) + '<br>'
        }
        document.querySelector('.userAB').innerHTML = ''
    }
}

let addab = document.querySelector('.add-ab')
addab.onclick = getAsincData1
async function getAsincData1() {
        let result = await fetch('https://jsonplaceholder.typicode.com/todos')
        if(result.ok){
            let response = await result.json(); 
            let filterab = response.filter(result => result.title[0] === 'a' && result.title[1] === 'b')
            for (const title of filterab) {
                document.querySelector('.userAB').innerHTML = JSON.stringify(title)
            }document.querySelector('.user-a').innerHTML = ''
    } 
}
document.querySelector('.add-all').onclick = getAsincData2
async function getAsincData2(){
        let result = await fetch('https://jsonplaceholder.typicode.com/todos')
        if(result.ok){
            let response = await result.json();
            let filtera = response.filter(result => result.title[0] === 'a')
            for (const title of filtera) {
                 document.querySelector('.user-a').innerHTML += JSON.stringify(title) + '<br>'
            }
            let filterab = response.filter(result => result.title[0] === 'a' && result.title[1] === 'b')
            for (const title of filterab) {
                document.querySelector('.userAB').innerHTML = JSON.stringify(title)
            }
        } 
    }



