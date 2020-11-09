"use strict";

var photoDivs = document.getElementsByClassName("imageHolder");

var nextButton = document.getElementById("button_next");

var previousButton = document.getElementById("button_previous");

var randomButton = document.getElementById("button_random");


var currentPhotoNumber = 0;

photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

nextButton.addEventListener('click', function() {
  photoDivs[currentPhotoNumber].classList.add("hideThisDiv");
  currentPhotoNumber = currentPhotoNumber + 1;

  if (currentPhotoNumber === photoDivs.length) {
    currentPhotoNumber = 0;
  }

  photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

});

previousButton.addEventListener('click', function() {
  photoDivs[currentPhotoNumber].classList.add("hideThisDiv");
  currentPhotoNumber = currentPhotoNumber - 1;

  if (currentPhotoNumber < 0) {
    currentPhotoNumber = photoDivs.length - 1;
  }

  photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

});


randomButton.addEventListener('click', function() {
  photoDivs[currentPhotoNumber].classList.add("hideThisDiv");

  var newRandomNumber = Math.random() * photoDivs.length;
  currentPhotoNumber = Math.floor(newRandomNumber);

  photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

});
