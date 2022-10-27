const img = document.querySelector('img');
const input = document.querySelector('input');
const button = document.querySelector('button');

let urlNoSearch =
	'https://api.giphy.com/v1/gifs/translate?api_key=jdaDVbpka0tZrwQoyuiOmMhdbhoVzhtJ&s=';

async function getGifs() {
	let inputText = input.value;
	let urlWithSearch = `${urlNoSearch}${inputText}`;
	const response = await fetch(urlWithSearch, { mode: 'cors' });
	const gifData = await response.json();
	img.src = gifData.data.images.original.url;
}

button.addEventListener('click', getGifs);

// let inputText = input.value;
// 	let urlWithSearch = `${urlNoSearch}${inputText}`;
// 	fetch(urlWithSearch, { mode: 'cors' })
// 		.then((response) => response.json())
// 		.then((response) => (img.src = response.data.images.original.url))
// 		.catch(() => {
// 			img.src =
// 				'https://media.giphy.com/media/Vbtc9VG51NtzT1Qnv1/giphy.gif';
// 		});
