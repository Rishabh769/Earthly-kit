const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SUSTAINABLE KIT",
    price: 10.99 ,
    img: "./assets//kit.webp",
    des:" This starter kit is all you need to start the revolution.Consists of:   2 Bamboo Straws1 Plant Based Reusable Cup with 2 lids 1 Natural Loofah1 box of 50 Bamboo Cotton Eartips1 Bamboo Toothbrush",    
    
  },
  {
    id: 2,
    title: "Bamboo toothbrush",
    price:3.59,
    img: "./assets/brush.webp",
    des:"Earthly Bamboo Toothbrush are BPA free, Biodegradable and have charcoal infused bristles that help remove stains effectively. We guarantee your satisfaction. See for yourself!"
    
    
  },
  {
    id: 3,
    title: "BAMBOO STRAWS",
    price: 1.99,
    img: "./assets/straw.webp",
    des:"We collaborated with artisans in Veitnam, Earthly Organic Bamboo Straws are 100% Compostable, Vegan and BPA free. They can be reused, thrown in a compost bin, or even in your backyard. Serve with cold beverages like ice tea, cold coffee and many more. "
  
  },
  {
    id: 4,
    title: "REUSABLE CUPS",
    price: 2.39,
    img: "./assets/cup3.webp",
    des:"Barista's love it! Easy to clean, hassle free and Plant Based. Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times.So, every batch is unique, Just. Like. You."
   
  },
  {
    id: 5,
    title: "BAMBOO COTTON EARTIPS",
    price: 1.35,
    img: "../assets/earbud-transformed.png",
    des:"Earthly cotton eartips are BPA free, Biodegradable and Plant Based.These eartips have cotton refined through many process to make them biodegradable. Each box of bamboo cotton eartips contains 50 sticks.  We guarantee your satisfaction. See for yourself!"
   
  },
  {
    id: 6,
    title: "LOOFAH",
    img: "./assets/loofa.png",
    price: 2.99,
    des:"Natural loofah sponges actually come from the fruits of vine-growing Luffa plants. These plants are part of the gourd family (Cucurbitaceae) making them relatives of watermelons, cucumbers and pumpkins. When a luffa fruit dries out and is peeled, you are left with its fibrous interior, which can be used as a sponge.It is biodegradable and is an organic, eco-friendly exfoliating body scrubber. Both men and women can use it, suitable for shower and bathtub."
   
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductdes = document.querySelector(".productdes");



menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "€" + choosenProduct.price;
    currentProductdes.textContent = choosenProduct.des;

    currentProductImg.src = choosenProduct.img;


  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
