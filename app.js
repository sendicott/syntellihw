let data = [4, 8, 15, 16, 23, 42];

//---------------Appending text to DOM within divs---------------
// window.addEventListener("load", function() {
//     let div = d3.select("div");

//     div.append("section")
//         .html("Hello, world")
//         .style("color", "orange")
//         .style("font-size", "44px");

//     div.append("section")
//         .html("Happy Halloween");

//     div.append("section")
//         .html("Hello again!");

//     div.append("section")
//         .html("Happy November");
// });
//---------------Appending text to DOM within divs---------------

//---------------Basic Bar Chart---------------
// window.addEventListener("load", function() {
//     d3.select(".chart")
//         .selectAll("div")
//             .data(data)
//         .enter().append("div")
//             .style("width", function(d) {return d * 10 + "px"; })
//             .style("background-color", "#F7B05B")
//             .style("color", "#5E5B52")
//             .text(function(d){return d; });
// });
//---------------Basic Bar Chart---------------

//---------------Basic Bar Chart with method chaining---------------
// window.addEventListener("load", function() {
//     let chart = d3.select(".chart");

//     let bar = chart.selectAll("div");

//     let barUpdate = bar.data(data);

//     barUpdate.enter().append("div")
//         .style("width", function(d) { return d * 10 + "px"; })
//         .style("background-color", "#738290")
//         .style("color", "#FFFCF7")
//         .style("text-align", "right")
//         .style("padding-right", "5px")
//         .style("border-bottom", "1px solid #FFFCF7")
//         .text(function(d) { return d; });

// });
//---------------Basic Bar Chart with method chaining---------------

//---------------Basic Bar Chart with a linear scale---------------
// window.addEventListener("load", function() {
//     let scale = d3.scaleLinear()
//         .domain([0, d3.max(data)])
//         .range([0, 420]);

//     let chart = d3.select(".chart");

//     let bar = chart.selectAll("div");

//     let barUpdate = bar.data(data);

//     barUpdate.enter().append("div")
//         .style("width", function(d) { return scale(d) + "px"; })
//         .style("background-color", "#738290")
//         .style("color", "#FFFCF7")
//         .style("text-align", "right")
//         .style("padding-right", "5px")
//         .style("border-bottom", "1px solid #FFFCF7")
//         .text(function(d) { return d; });
// });
//---------------Basic Bar Chart with a linear scale---------------

window.addEventListener("load", function() {
    let scale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

    let chart = d3.select(".chart");

    let bar = chart.selectAll("div");

    let barUpdate = bar.data(data);

    barUpdate.enter().append("div")
        .style("width", function(d) { return scale(d) + "px"; })
        .style("background-color", "#738290")
        .style("color", "#FFFCF7")
        .style("text-align", "right")
        .style("padding-right", "5px")
        .style("border-bottom", "1px solid #FFFCF7")
        .text(function(d) { return d; });
});