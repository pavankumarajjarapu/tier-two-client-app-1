const express = require("express");
const cors = require("cors");
let app = express();
app.use(cors());
app.listen(5128, () => {
  console.log(` 5128 is live now`);
});
app.get("/mobiles", (req, res) => {
  let mobilesArray = [
    "Apple",
    "Nokia",
    "Samsung",
    "Oppo",
    "Vivo",
    "Oneplus",
    "Micrmax",
  ];
  res.json(mobilesArray);
});
app.get("/models", (req, res) => {
  const latestMobilePhones = [
    {
      company: "Samsung",
      modelName: "Galaxy S23 Ultra",
      price: "₹1,24,999",
      imageLink: "https://example.com/samsung-galaxy-s23-ultra.jpg",
    },
    {
      company: "Apple",
      modelName: "iPhone 14 Pro Max",
      price: "₹1,39,900",
      imageLink: "https://example.com/iphone-14-pro-max.jpg",
    },
    {
      company: "OnePlus",
      modelName: "OnePlus 11",
      price: "₹61,999",
      imageLink: "https://example.com/oneplus-11.jpg",
    },
    {
      company: "Xiaomi",
      modelName: "Mi 12 Pro",
      price: "₹62,999",
      imageLink: "https://example.com/mi-12-pro.jpg",
    },
    {
      company: "Realme",
      modelName: "Realme GT 2 Pro",
      price: "₹44,999",
      imageLink: "https://example.com/realme-gt-2-pro.jpg",
    },
    {
      company: "Vivo",
      modelName: "Vivo X80 Pro",
      price: "₹79,999",
      imageLink: "https://example.com/vivo-x80-pro.jpg",
    },
    {
      company: "Oppo",
      modelName: "Oppo Find X5 Pro",
      price: "₹74,999",
      imageLink: "https://example.com/oppo-find-x5-pro.jpg",
    },
    {
      company: "Google",
      modelName: "Pixel 7 Pro",
      price: "₹89,999",
      imageLink: "https://example.com/google-pixel-7-pro.jpg",
    },
    {
      company: "Motorola",
      modelName: "Moto Edge 30 Ultra",
      price: "₹59,999",
      imageLink: "https://example.com/moto-edge-30-ultra.jpg",
    },
    {
      company: "Asus",
      modelName: "ROG Phone 6",
      price: "₹69,999",
      imageLink: "https://example.com/asus-rog-phone-6.jpg",
    },
  ];

  res.json(modelsArray);
});
