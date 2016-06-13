var BarChart = function(title, data, categories) {
  
  var container = document.getElementById("barChart");

  var chart = new Highcharts.Chart({
    chart: {
      type: "bar",
      renderTo: container 
    },
    title: {
      text: title
    },
    series: [data],
      xAxis: {
        categories: categories
      },
  });

}