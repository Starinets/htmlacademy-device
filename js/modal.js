var writeAsModal = document.querySelector(".write-us-modal");
var writeAsButtonShow = document.querySelector(".write-us-show");
var writeAsButtonClose = document.querySelector(".write-as-modal-close");
var writeAsButtonSend = document.querySelector(".write-as-modal-submit");

var mapModal = document.querySelector(".map-modal");
var mapButtonShow = document.querySelector(".map-show");
var mapButtonClose = document.querySelector(".map-modal-close");

var writeAsForm = writeAsModal.querySelector("form");
var writeAsUserName = writeAsModal.querySelector("#writetous-name");
var writeAsUserEmail = writeAsModal.querySelector("#writetous-email");
var writeAsUserMessage = writeAsModal.querySelector("#writetous-boby");

var isStorageSupport = true;
var storageUserName = "";
var storageUserEmail = "";

try {
   storageName = localStorage.getItem("user-name");
   storageEmail = localStorage.getItem("user-email");
} catch (err) {
   isStorageSupport = false;
}

writeAsButtonShow.addEventListener("click", function (evt) {
   evt.preventDefault();
   writeAsModal.classList.add("modal-show");
   if (storageUserName || storageUserEmail) {
      if (storageUserName) {
         writeAsUserName.value = storageUserName;
         writeAsUserName.focus();
      }
      if (storageUserEmail) {
         writeAsUserEmail.value = storageUserEmail;
         writeAsUserEmail.focus();
      }
   } else {
      writeAsUserName.focus();
   }
});

writeAsButtonClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   writeAsModal.classList.remove("modal-error");
   writeAsModal.classList.add("modal-hide");
   setTimeout(function () {
      writeAsModal.classList.remove("modal-hide");
      writeAsModal.classList.remove("modal-show");
   }, 600);
});

writeAsForm.addEventListener("submit", function (evt) {
   if (!writeAsUserName.value || !writeAsUserEmail.value) {
      evt.preventDefault();
      writeAsModal.classList.remove("modal-error");
      writeAsModal.offsetWidth = writeAsModal.offsetWidth;
      writeAsModal.classList.add("modal-error");
   } else {
      if (isStorageSupport) {
         localStorage.setItem("user-name", writeAsUserName.value);
         localStorage.setItem("user-email", storageUserEmail.value);
      }
   }
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      evt.preventDefault();
      if (writeAsModal.classList.contains("modal-show")) {
         writeAsModal.classList.add("modal-hide");
         setTimeout(function () {
            writeAsModal.classList.remove("modal-hide");
            writeAsModal.classList.remove("modal-show");
         }, 600);
      }
      if (mapModal.classList.contains("modal-show")) {
         mapModal.classList.add("modal-hide");
         setTimeout(function () {
            mapModal.classList.remove("modal-hide");
            mapModal.classList.remove("modal-show");
         }, 600);
      }
   }
});

mapButtonShow.addEventListener("click", function (evt) {
   evt.preventDefault();
   mapModal.classList.add("modal-show");
});

mapButtonClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   mapModal.classList.add("modal-hide");
   setTimeout(function () {
      mapModal.classList.remove("modal-hide");
      mapModal.classList.remove("modal-show");
   }, 600);
});
