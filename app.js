let h1 = document.querySelector("h1");
let div = document.getElementById("image_placer");
let submit = document.getElementById("submit");

submit.addEventListener("click" , async () => {
    let img = await getImg();
    console.log(img);
    div.style.backgroundImage = `url(${img})`
});

let api = "https://dog.ceo/api/breeds/image/random";

async function getImg() {
    try {
        let response = await axios.get(api);
        return response.data.message;
    }
    catch(e) {
        console.log("Error", e);
        return "NO IMAGE FETCH"
    }
}

