const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const header_frame = document.getElementById("header_frame");
const header = document.getElementById("header");

const content = document.getElementById("content");

const input_file = document.getElementById("input_file");

let loc = [];

let list = [];

let list_name = "";

createSampleWishList();

async function loadFile() {
    if (input_file.files.length === 0) return;
    const blob = input_file.files[0];
    const json = await blob.text();
    const obj = JSON.parse(json);
    importList(obj);
}
input_file.addEventListener("input", loadFile); // load a file when one is selected
loadFile(); // load file if it is still selected