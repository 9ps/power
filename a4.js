var g1 = {
    x: [2017, 2018, 2019, 2020],
    y: [1, 4, 4, 5],
    width: 0.5,
    name: 'Watergate',
    type: 'bar',
    marker: {
      color: '#C20114',
    },
  };
  
  var g2 = {
    x: [2017, 2018, 2019, 2020],
    y: [0, 9, 1, 0],
    width: 0.5,
    name: 'Spygate',
    type: 'bar',
    marker: {
      color: '#7A00A3',
    },
  };
  
  var g3 = {
    x: [2017, 2018, 2019, 2020],
    y: [0, 0, 0, 16 ],
    width: 0.5,
    name: 'Obamagate',
    type: 'bar',
    marker: {
      color: '#2D1FC1',
    },
  };
  
  var data = [g1, g2, g3];
  
  var layout = {
    title: "Count of Tweets mentioning <b>-Gate</b>*",
    plot_bgcolor: "#fff",
    paper_bgcolor: "#fff",
    barmode: 'stack',
    xaxis: { //removes the .5 issue
      tickvals: [2017, 2018, 2019, 2020],
      ticktext: [2017, 2018, 2019, 2020],
    },
    font: {
      size: 16,
      family: "IBM Plex Mono, monospace",
      color: "#222"
    },
    hoverlabel: {
      bgcolor: "#FFF",
    }
  };
  
  Plotly.newPlot('a4', data, layout, {displayModeBar: false});
  