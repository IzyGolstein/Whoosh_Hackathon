
# Optimal Electric Scooter Routing Project

Welcome to the Optimal Electric Scooter Routing Project! 🛴💨

In this project, we aimed to develop an innovative solution for finding the best routes for electric scooters. Our focus was on optimizing distance, comfort of road, traffic, and parking spot tracking. Let's take a look at the key components of our project.

## Project Overview!

1. Data Loading 📊:
   - We loaded geo-data from various sources, including open-source library "osmnx" (OpenStreetMap), data provided by the organizers, open sources of the government of Moscow (used API). This data included details about hexes, speed limit zones, parkings, forbidden zones, speed medians, scooters at parkings, routes hex, road index, clashes, quality of road surface.

2. Data Preprorocessing 🔄:
   - Our data preprocessing phase involved merging different datasets based on common column values. We combined information from hexes to create some visualizations.

3. Graph Loading and Analysis 🚂:
   - To gain a deeper understanding of the road network, we created a graph from all our data. We needed this graph to realize our algorithm of building optimal/comfortable roads.

4. Data Filling Algorithm using Decision Trees ⚙️:
   - In addition to route optimization, we developed an algorithm to fill missing data in our datasets using decision tree models. This algorithm involved preparing the data, finding the best hyperparameters through grid search, training the model, and then using it to predict missing values based on available features. It ensured that our datasets were complete and ready for analysis.

5. A* Algorithm for Route Optimization 🗺️:
   - The highlight of our project was the implementation of the A* algorithm for finding the optimal routes for electric scooters. We considered factors such as distance, time,  road conditions, traffic congestion, and the availability of parking. Our algorithm based on Dijkstra's algorithm and uses a few functions of minimization time of road, maximization of comfort etc.

[hexes_speed](https://github.com/IzyGolstein/Whoosh_Hackathon/assets/112851618/616f7f0c-cf45-4e4a-9c34-f17dc2e2ba0d)


