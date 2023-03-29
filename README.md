# Belly Button Challenge

<img width="1440" alt="Screenshot 2023-03-26 at 1.13.41 PM.png" src="https://raw.githubusercontent.com/adampaganini/Belly-Button-Challenge/main/Screenshot%202023-03-26%20at%201.13.41%20PM.png">

## Deployment
* Here is a link to the dashboard: https://adampaganini.github.io/Belly-Button-Challenge/

## Background
In this assignment, an interactive dashboard was built to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Methods
 
 1. The D3 library was used to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

 2. A horizontal bar chart with a dropdown menu to display the top 10 OTUs found in each individual was created.

 3. A bubble chart was created to display each sample.

 4. The sample metadata, i.e., an individual's demographic information is shown in the 'Demographic Info' box.

 5. Each key-value pair from the metadata JSON object is also displayed on the page.

 6. When a new sample is selected the display adjusts to the new sample. 

 7. The app is deployed to a free static page hosting service on GitHub Pages at https://adampaganini.github.io/Belly-Button-Challenge/.
  
## Advanced Challenge Assignment
 * Adapt the Gauge Chart from [https://plot.ly/javascript/gauge-charts/](https://plotly.com/javascript/gauge-charts/) to plot the weekly washing frequency of the individual.
 * You will need to modify the example gauge code to account for values ranging from 0 through 9.
 * Update the chart whenever a new sample is selected.
 
 <img width="321" alt="Screenshot 2023-01-10 at 11 19 42 AM" src="https://raw.githubusercontent.com/adampaganini/Belly-Button-Challenge/main/Screenshot%202023-03-29%20at%201.05.14%20PM.png">
 

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

© 2023 edX Boot Camps LLC





