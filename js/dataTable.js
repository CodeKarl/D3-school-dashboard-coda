function makeTable(data) {
  var table = d3.select('#table').append('table');

  var tbody = table.append('tbody');
  var tr = tbody.selectAll('tr')
  .data(data).enter()
  .append('tr')
  tr.append('td').html(function(d) { return d.name; });
  tr.append('td').html(function(d) { return d.rate });
  tr.append('td').html(function(d) { return d.comment });

  var thead = table.append('thead').append('tr')
  thead.append('th').text("name");
  thead.append('th').text("comment");
  thead.append('th').attr("class", "rate").text("rate");
}