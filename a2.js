//obama country histogram
//i preprepared data in excel (since its only 10 entries that its not too intensive)

var data = [{
  type: 'bar',
  y: [0.196463654, 1.080550098, 2.652259332, 11.64047151, 29.02750491, 25.14734774, 17.23968566, 7.858546169, 3.290766208, 1.866404715],
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  width: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  marker: {
    color: '#C20114'
  },
  hoverinfo: "y",
  }];
  
  var layout = {
    title: "Histogram of <b>Trump's</b> Tweets*",
    plot_bgcolor: "#fff",
    paper_bgcolor: "#fff",
    width: 500,
    font: {
      size: 16,
      family: "IBM Plex Mono, monospace",
      color: "#222"
    },
    
    hoverlabel: {
      bgcolor: "#FFF",
    },
    yaxis: {
      range: [0, 50],
    },
  
    xaxis: {
      showticklabels: false,
      title: {
        text: '< More Negative         More Positive >',
        font: {
          size: 16,
        },
      },
    }
  };
  
  Plotly.newPlot('a2', data, layout, {displayModeBar: false});