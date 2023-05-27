const cheerio = require("cheerio");
const axios = require("axios");
var Kavenegar = require('kavenegar');

let textContent;
async function performScraping() {
  const axiosResponse = await axios.request({
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
    method: "GET",
    url: "https://www.sanjesh.org/fa-IR/Portal/4925/page/%DA%A9%D8%A7%D8%B1%D8%B4%D9%86%D8%A7%D8%B3%DB%8C-%D8%A7%D8%B1%D8%B4%D8%AF-",
  });
  const $ = cheerio.load(axiosResponse.data);
  const htmlElement = $("#ctl01_ctl00_rptNewsList_ctl01_lblTitle");
  if (textContent !== htmlElement[0].children[0].data && textContent) {
    clearInterval(intervalId);
    var api = Kavenegar.KavenegarApi({apikey: '704879616135453256303351706550347179355A706B4161665A6E365279344A4562637A4D3539716A5A4D3D'});
    api.Send({ message: "موفق باشی :)))" , sender: "1000596446" , receptor: "!!!!Enter your Phone Number here !!!!!" });
    return console.log("movafagh bashi :)))");
  }
  textContent = htmlElement[0].children[0].data;
  // test;
  if (axiosResponse) {
    console.log(htmlElement[0].children[0].data);
  }
}

const intervalId = setInterval(function resultChecker() {
  performScraping();
}, 5000);
