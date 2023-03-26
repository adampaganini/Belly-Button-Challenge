const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
//const dataPromise = d3.json(url);
//console.log("Data Promise: ", dataPromise);

//main func / init. func
function main() {
    //selector point to id
    var selector = d3.select("#selDataset");
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(data);
        var names = data.names;
        names.forEach((name) => {
            selector.append('option').text(name).property("value", name);
        });
        var firstName = names[0];
        demoInfo(firstName);
        charts(firstName);
    });
}
main();

function optionChanged(newName){
    demoInfo(newName);
    charts(newName);
}

function demoInfo(name){
    d3.json(url).then((data) => {
        var metaData = data.metadata;
        var metaArray = metaData.filter(nameObj=>nameObj.id==name);
        var metaResult = metaArray[0];

        var panel = d3.select("#sample-metadata");
        panel.html("");

        Object.entries(metaResult).forEach(([key, value])=>{
            panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
        })
    });
}

function charts(name){
    d3.json(url).then((data) => {
        var metaData = data.metadata;
        var metaArray = metaData.filter(nameObj=>nameObj.id==name);
        var metaResult = metaArray[0];
        var wfreq = metaResult.wfreq;

        // space for samples variables
        var sampleData = data.samples;
        var sampleArray = sampleData.filter(nameObj=>nameObj.id==name);
        var sampleResult = sampleArray[0];
        var otu_ids = sampleResult.otu_ids;
        var otu_labels = sampleResult.otu_labels;
        var sampleValues = sampleResult.sample_values;

        // bar chart
        var barData = [{
            type: 'bar',
            x: sampleValues.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map(otu_id=>`OTU ${otu_id}`).reverse(),
            text:otu_labels, 
            orientation: 'h'
          }];
          var barLayout = {
            title: 'Top 10 Bacteria',
            xaxis: {title: 'bacterial load (ppm)'}
          }

          Plotly.newPlot('bar', barData, barLayout);

        // bubble chart
        var bubbleData = [{
            x: otu_ids,
            y: sampleValues,
            text: otu_labels,
            mode: 'markers',
            marker: {
              color: otu_ids,
              size: sampleValues,
              colorscale: 'Blues'
            }
          }];
          
          var bubbleLayout = {
            title: 'Total Bacterial Culture Amount',
           // showlegend: false,
           // height: 600,
           // width: 600
          };
          
          Plotly.newPlot('bubble', bubbleData, bubbleLayout);

        //gauge chart
        var gaugeData = [
            {
              type: "indicator",
              mode: "gauge+number",
              value: wfreq,
              title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
              delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
              gauge: {
                axis: { range: [null, 10], tickwidth: 1, tickcolor: "darkblue" },
                bar: { color: "darkblue" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                  { range: [0, 10], color: "#F0FFFF" },
                  { range: [250, 400], color: "royalblue" }
                ]
                }
              }
          ];
          
          var gaugeLayout = {
            width: 500,
            height: 400,
            margin: { t: 25, r: 25, l: 25, b: 25 },
            // paper_bgcolor: "lavender",
            //font: { color: "darkblue", family: "Arial" }
          };
          
          
          Plotly.newPlot('gauge', gaugeData, gaugeLayout);
          
        
    });
}


//Plotly.newPlot('data', data);