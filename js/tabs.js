
function changeTab(evt, tabID) {
   let i, x, tablinks;
   x = document.getElementsByClassName("tab-content");
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablink");
   for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tablink-active", "");
   }
   document.getElementById(tabID).style.display = "block";
   if (evt != '') {
      evt.currentTarget.className += ' tablink-active';
   } else {
      tablinks[0].className = tablinks[0].className += " tablink-active";
   }
}

window.onload = function () {
   changeTab('', 'tab-delivery');
}
