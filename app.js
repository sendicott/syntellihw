let data = [4, 8, 15, 16, 23, 42];

// window.addEventListener("load", function() {
//     let section = d3.selectAll("section");

//     section.append("div")
//         .html("Hello, world")
//         .style("color", "orange")
//         .style("font-size", "44px");

//     section.append("div")
//         .html("Goodbye, world");

//     section.append("div")
//         .html("Hello again!");

//     section.append("div")
//         .html("Okay goodbye for real this time");
// });

// window.addEventListener("load", function() {
//     d3.select(".chart")
//         .selectAll("div")
//             .data(data)
//         .enter().append("div")
//             .style("width", function(d) {return d * 10 + "px"; })
//             .text(function(d){return d; });
// });

window.addEventListener("load", function() {
    let chart = d3.select(".chart");

    let bar = chart.selectAll("div");

    let barUpdate = bar.data(data);

    let barEnter = barUpdate.enter().append("div");
    barEnter.style("width", function(d) { return d * 10+ "px"; });
    barEnter.style("background-color", "#738290");
    barEnter.style("color", "#FFFCF7");
    barEnter.style("text-align", "right");
    barEnter.style("padding-right", "5px");
    barEnter.style("border-bottom", "1px solid #FFFCF7");
    barEnter.text(function(d) { return d; });

});