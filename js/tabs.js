var servicesTabs = document.getElementsByClassName("tab-content");
var servicesTabslinks = document.getElementsByClassName("tablink");

var slidersButton = document.getElementsByClassName("slider-radio");
var slidersSection = document.getElementsByClassName("slider-section");

function changeTab(evt, tabID) {
   for (let i = 0; i < servicesTabs.length; i++) {
      servicesTabs[i].style.display = "none";
      servicesTabslinks[i].className = servicesTabslinks[i].className.replace(" tablink-active", "");
   }
   document.getElementById(tabID).style.display = "block";
   if (evt != "") {
      evt.currentTarget.className += " tablink-active";
   } else {
      servicesTabslinks[0].className = servicesTabslinks[0].className += " tablink-active";
   }
}

function changeSlider(evt, sliderID) {
   for (let i = 0; i < slidersButton.length; i++) {
      slidersButton[i].className = slidersButton[i].className.replace(" checked", "");
      slidersSection[i].className = slidersSection[i].className.replace(" active", "");
   }
   console.log(document.querySelector(sliderID).className);
   document.querySelector(sliderID).className += " active";

   if (evt != "") {
      evt.currentTarget.className += " checked";
   }
}

window.onload = function () {
   var tabLinkDelivery = document.querySelector(".tablink-delivery");
   var tabLinkWarranty = document.querySelector(".tablink-warranty");
   var tabLinkCredit = document.querySelector(".tablink-credit");

   tabLinkDelivery.addEventListener("click", function (evt) {
      changeTab(evt, "tab-delivery");
   })
   tabLinkWarranty.addEventListener("click", function (evt) {
      changeTab(evt, "tab-warranty");
   })
   tabLinkCredit.addEventListener("click", function (evt) {
      changeTab(evt, "tab-credit");
   })

   changeTab("", "tab-delivery");

   var radio1 = document.querySelector(".slider-radio.radio1");
   var radio2 = document.querySelector(".slider-radio.radio2");
   var radio3 = document.querySelector(".slider-radio.radio3");

   radio1.addEventListener("click", function (evt) {
      changeSlider(evt, ".slider1");
   });

   radio2.addEventListener("click", function (evt) {
      changeSlider(evt, ".slider2");
   });

   radio3.addEventListener("click", function (evt) {
      changeSlider(evt, ".slider3");
   });
}
