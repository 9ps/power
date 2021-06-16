//trump country histogram
//i preprepared data in excel (since its only 10 entries that its not too intensive)

var data = [{
  type: 'bar',
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [0.952380952, 2.857142857, 1.904761905, 9.523809524, 49.52380952, 14.28571429, 10.47619048, 7.619047619, 2.857142857, 0],
  width: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  marker: {
    color: '#2D1FC1'
  },
  hoverinfo: "y",
}];

var layout = {
  title: "Histogram of <b>Obama's</b> Tweets*",
  width: 500,
  plot_bgcolor: "#fff",
  paper_bgcolor: "#fff",
  font: {
    size: 16,
    family: "IBM Plex Mono, monospace",
    color: "#222"
  },
  hoverlabel: { bgcolor: "#FFF"},

  yaxis: {
    range: [0, 50],
    title: {
      text: '% of total'
    }
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

Plotly.newPlot('a1', data, layout, {displayModeBar: false});