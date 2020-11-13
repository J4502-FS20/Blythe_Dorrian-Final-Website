"use strict";

var chartDiv = document.getElementById('chart_container');

var data = [{"PostalCode":"AK","State":"Alaska","Percent":27.9},
{"PostalCode":"AL","State":"Alabama","Percent":19.3},
{"PostalCode":"AR","State":"Arkansas","Percent":15.7},
{"PostalCode":"AZ","State":"Arizona","Percent":26.3},
{"PostalCode":"CA","State":"California","Percent":24},
{"PostalCode":"CO","State":"Colorado","Percent":32.5},
{"PostalCode":"CT","State":"Connecticut","Percent":24.5},
{"PostalCode":"DC","State":"Washington DC","Percent":30.7},
{"PostalCode":"DE","State":"Delaware","Percent":20.1},
{"PostalCode":"FL","State":"Florida","Percent":21.1},
{"PostalCode":"GA","State":"Georgia","Percent":20.2},
{"PostalCode":"HI","State":"Hawaii","Percent":24.4},
{"PostalCode":"IA","State":"Iowa","Percent":22.2},
{"PostalCode":"ID","State":"Idaho","Percent":31.4},
{"PostalCode":"IL","State":"Illinois","Percent":24.8},
{"PostalCode":"IN","State":"Indiana","Percent":15.1},
{"PostalCode":"KS","State":"Kansas","Percent":23.2},
{"PostalCode":"KY","State":"Kentucky","Percent":14.6},
{"PostalCode":"LA","State":"Louisiana","Percent":20.3},
{"PostalCode":"MA","State":"Massachussets","Percent":29.5},
{"PostalCode":"MD","State":"Maryland","Percent":22.9},
{"PostalCode":"ME","State":"Maine","Percent":24},
{"PostalCode":"MI","State":"Michigan","Percent":23.6},
{"PostalCode":"MN","State":"Minnesota","Percent":27.7},
{"PostalCode":"MO","State":"Missouri","Percent":23.6},
{"PostalCode":"MS","State":"Mississippi","Percent":13.5},
{"PostalCode":"MT","State":"Montana","Percent":20.2},
{"PostalCode":"NC","State":"North Carolina","Percent":22.4},
{"PostalCode":"ND","State":"North Dakota","Percent":20.2},
{"PostalCode":"NE","State":"Nebraska","Percent":23.9},
{"PostalCode":"NH","State":"New Hampshire","Percent":30.7},
{"PostalCode":"NJ","State":"New Jersey","Percent":21},
{"PostalCode":"NM","State":"New Mexico","Percent":23},
{"PostalCode":"NV","State":"Nevada","Percent":23.6},
{"PostalCode":"NY","State":"New York","Percent":18.9},
{"PostalCode":"OH","State":"Ohio","Percent":23.9},
{"PostalCode":"OK","State":"Oklahoma","Percent":19},
{"PostalCode":"OR","State":"Oregon","Percent":25.8},
{"PostalCode":"PA","State":"Pennsylvania","Percent":25.6},
{"PostalCode":"RI","State":"Rhode Island","Percent":25.4},
{"PostalCode":"SC","State":"South Carolina","Percent":14.8},
{"PostalCode":"SD","State":"South Dakota","Percent":17.2},
{"PostalCode":"TN","State":"Tennessee","Percent":17.1},
{"PostalCode":"TX","State":"Texas","Percent":23.5},
{"PostalCode":"UT","State":"Utah","Percent":28.2},
{"PostalCode":"VA ","State":"Virginia","Percent":24.2},
{"PostalCode":"VT","State":"Vermont","Percent":29.5},
{"PostalCode":"WA","State":"Washington ","Percent":28.9},
{"PostalCode":"WI","State":"Wisconsin","Percent":23.6},
{"PostalCode":"WV","State":"West Virginia","Percent":16.8},
{"PostalCode":"WY","State":"Wyoming","Percent":27.5}]

var arrayValues = [];

for (var i = 0; i < data.length; i++) {
    arrayValues.push(data[i].Percent);
};

console.log(arrayValues);

var largest = Math.max.apply(Math, arrayValues);

for (var i = 0; i < data.length; i++) {

    chartDiv.innerHTML += '<div class="row" id="r' + i + '">' +
        '<div class="Name">' + data[i].State + '</div>' +
        '<div class="Value" style="width:' + (data[i].Percent * 50) / largest + '%"></div>' +
        '<div class="ValueNumber">' + data[i].Percent + '%</div>' +
        '</div>'
}
