// const button = document.getElementById("btn");
// async function showMessage() {
// 	const text = document.getElementById("text").value;
// 	const delayVal = document.getElementById("delay").value;
// 	const output = document.getElementById("output");
// 	await new Promise((resolve) => {
// 		setTimeout((delayVal) => {
// 			resolve(text);
// 		}, delayVal);
// 	});
// 	output.innerText = text;
// }
// btn.addEventListener("click", showMessage);

const button = document.getElementById("btn");
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const output = document.getElementById("output");
async function showMessage() {
	const message = text.value;
	const delayVal = delay.value;
	await new Promise((resolve) => {
		setTimeout((delayVal) => {
			resolve(message);
		}, delayVal);
	});
	output.innerText = message;
}
btn.addEventListener("click", showMessage);