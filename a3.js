//most of this code is from https://plotly.com/javascript/dropdowns/
Plotly.d3.csv("a3.csv", function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

var allCountryNames = unpack(rows, 'country'),
    allDate = unpack(rows, 'date'),
    allVal = unpack(rows, 'val'),
    allTweet = unpack(rows, 'tweet'),
    listofCountries = [],
    currentCountry,
    currentVal = [],
    currentDate = [],
    currentTweet = [];

  for (var i = 0; i < allCountryNames.length; i++ ){
    if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
      listofCountries.push(allCountryNames[i]);
    }
  }
  
  function getCountryData(chosenCountry) {
    currentVal = [];
    currentDate = [];
    currentTweet = [];
    for (var i = 0 ; i < allCountryNames.length ; i++){
      if ( allCountryNames[i] === chosenCountry ) {
        currentVal.push(allVal[i]);
        currentDate.push(allDate[i]);
        currentTweet.push(allTweet[i]);
      } 
    }
  };

// Default Country Data
setBubblePlot('North Korea');

//replacer code
function setBubblePlot(chosenCountry) {
    getCountryData(chosenCountry);
    console.log(currentTweet);
    console.log(currentVal);
    var data = [{
      // customdata: currentTweet,
      x: currentDate,
      y: currentVal,
      // hoverinfo: "%{customdata}", //couldnt get the Tweet to load
      mode: 'markers',
      marker: {
        size: 10, 
        color: '#861388'
      }
    }];

    //   xaxis: {
    //     tickvals:['2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01', '2021-01-01'],
    //     ticktext:['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    //     } //previous attempt to resolve data issue i was having


    var layout = {
      title: 'Sentiment of Tweets mentioning '+ '<b>' + chosenCountry + '</b>',
      plot_bgcolor: "#fff",
      paper_bgcolor: "#fff",
      yaxis: {
        range: [-1.1, 1.1],
        title: "< More Negative    More Positive >",
      },
      xaxis: {
        range: ['01-01-2017', '01-01-2021'],
      },
      font: {
        size: 16,
        family: "IBM Plex Mono, monospace",
        color: "#222"
      },
		hoverlabel: { bgcolor: "#FFF"},

    };

    Plotly.newPlot('plotdiv', data, layout, {displayModeBar: false});
};
  
var innerContainer = document.querySelector('[data-num="0"'),
    plotEl = innerContainer.querySelector('.plot'),
    countrySelector = innerContainer.querySelector('.countrydata');

function assignOptions(textArray, selector) {
  for (var i = 1; i < textArray.length - 1;  i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
  }
  var currentOption = document.createElement('option');
  currentOption.text = textArray[0];
  selector.appendChild(currentOption);
}

assignOptions(listofCountries, countrySelector);

function updateCountry(){
    setBubblePlot(countrySelector.value);
}

//sends update if things change
countrySelector.addEventListener('change', updateCountry, false);
});