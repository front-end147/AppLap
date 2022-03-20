const toggle = document.querySelector("#toggle"),
      navMenu = document.querySelector(".nav__ul");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  toggle.classList.toggle("fa-xmark");
});


const slidePrice = document.querySelector("#slidePrice"),
      slideSpans = slidePrice.querySelectorAll("span"),
      pricingSection = document.querySelector("#pricing"),
      businessPrice = pricingSection.querySelector(".plan.business .price"),
      proPrice = pricingSection.querySelector(".plan.pro .price");

slideSpans.forEach(slideSpan => {
  slideSpan.addEventListener("click", (e) => {
    if(e.target.id == "month") {
      slidePrice.classList.add("monthlyActive");
      slidePrice.classList.remove("annuallyActive");
      slidePrice.querySelector("#month").classList.add("active");
      slidePrice.querySelector("#annual").classList.remove("active");
      businessPrice.innerHTML = "$0";
      businessPrice.setAttribute("data-time", "/month");
      proPrice.innerHTML = "$10";
      proPrice.setAttribute("data-time", "/month");
    }
    else {
      slidePrice.classList.add("annuallyActive");
      slidePrice.classList.remove("monthlyActive");
      slidePrice.querySelector("#annual").classList.add("active");
      slidePrice.querySelector("#month").classList.remove("active");
      businessPrice.innerHTML = "$5";
      businessPrice.setAttribute("data-time", "/year");
      proPrice.innerHTML = "$70";
      proPrice.setAttribute("data-time", "/year");
    }
  });
});

const links = document.querySelectorAll(".link");

links.forEach (link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.nav) {
      document.getElementById(e.target.dataset.nav).scrollIntoView({behavior: "smooth"});
    }
  });
});

const items = document.querySelectorAll(".FAQ .item"),
      allItemsQ = document.querySelectorAll(".FAQ .item .question");

allItemsQ.forEach(itemQ => {
  itemQ.addEventListener("click", (e) => {
    items.forEach(item => {
      item.classList.remove("active");
    });
    e.target.parentElement.classList.add("active");
  });
});