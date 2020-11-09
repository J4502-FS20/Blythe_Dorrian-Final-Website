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

var chartDiv = document.getElementById('chart_container');

var data = [{
        "Name": "Joe Biden",
        "Value": 2739
    },
    {
        "Name": "Bernie Sanders",
        "Value": 1119
    },
    {
        "Name": "Elizabeth Warren",
        "Value": 53
    },
    {
        "Name": "Mike Bloomberg",
        "Value": 46
    },
    {
        "Name": "Pete Buttigieg",
        "Value": 15
    },
    {
        "Name": "Amy Klobuchar",
        "Value": 5
    },
    {
        "Name": "Tulsi Gabbard",
        "Value": 2
    }
];

var arrayValues = [];

for (var i = 0; i < data.length; i++) {
    arrayValues.push(data[i].Value);
};

var largest = Math.max.apply(Math, arrayValues);

for (var i = 0; i < data.length; i++) {

    chartDiv.innerHTML += '<div class="row" id="r' + i + '">' +
        '<div class="Name">' + data[i].Name + '</div>' +
        '<div class="Value" style="width:' + (data[i].Value * 58) / largest + '%"></div>' +
        '<div class="ValueNumber">' + data[i].Value + '</div>' +
        '</div>'
}
