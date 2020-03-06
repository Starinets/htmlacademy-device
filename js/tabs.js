var servicesTabs = document.getElementsByClassName("tab-content");
var servicesTabslinks = document.getElementsByClassName("tablink");

function changeTab(evt, tabID) {
   for (let i = 0; i < servicesTabs.length; i++) {
      servicesTabs[i].style.display = "none";
      servicesTabslinks[i].className = servicesTabslinks[i].className.replace(" tablink-active", "");
   }
   document.getElementById(tabID).style.display = "block";
   if (evt != '') {
      evt.currentTarget.className += ' tablink-active';
   } else {
      servicesTabslinks[0].className = servicesTabslinks[0].className += " tablink-active";
   }
}

window.onload = function () {
   changeTab('', 'tab-delivery');
}
