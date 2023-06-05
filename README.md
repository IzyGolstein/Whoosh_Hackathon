# Optimal Electric Scooter Routing Project

Welcome to the Optimal Electric Scooter Routing Project! 🛴💨

In this project, we aimed to develop an innovative solution for finding the best routes for electric scooters. Our focus was on optimizing distance, road comfort, traffic, and parking spot tracking. Let's take a look at the key components of our project.

## Project Overview!

1. Data Loading 📊:
   - We loaded geo-data from various sources, including the open-source library "osmnx" (OpenStreetMap), data provided by the organizers, and open sources of the government of Moscow (used API). This data included details about hexes, speed limit zones, parkings, forbidden zones, speed medians, scooters at parkings, routes hex, road index, clashes, and the quality of road surface.

2. Data Preprocessing 🔄:
   - Our data preprocessing phase involved merging different datasets based on common column values. We combined information from hexes to create some visualizations.

3. Graph Loading and Analysis 🚂:
   - To gain a deeper understanding of the road network, we created a graph from all our data. We needed this graph to realize our algorithm of building optimal/comfortable roads.

   ![Graph](https://github.com/IzyGolstein/Whoosh_Hackathon/assets/112851618/471dcc40-1dfe-4baa-b67c-1bb7acb9de5f | width=400)

4. Data Filling Algorithm using Decision Trees ⚙️:
   - In addition to route optimization, we developed an algorithm to fill missing data in our datasets using decision tree models. This algorithm builds nested deep trees to predict missing values based on available features. It ensured that our datasets were complete and ready for analysis. To illustrate the data filling process, here's a comparison of variables before and after filling:

   Before Filling:
   ![Before](https://github.com/IzyGolstein/Whoosh_Hackathon/assets/112851618/72337b91-1c41-45c8-883b-7d856847ef36 | width=400)

   After Filling:
   ![After](https://github.com/IzyGolstein/Whoosh_Hackathon/assets/112851618/84503b3b-1f92-44a0-8815-aa13dca33d47 | width=400)

5. A* Algorithm for Route Optimization 🗺️:
   - The highlight of our project was the implementation of the A* algorithm for finding the optimal routes for electric scooters. We considered factors such as distance, time, road conditions, traffic congestion, and the availability of parking. Our algorithm is based on Dijkstra's algorithm and uses several functions for minimizing road time, maximizing comfort, etc. The result of algorithm usage is presented below:

   ![Optimal Route](https://github.com/IzyGolstein/Whoosh_Hackathon/assets/112851618/e637038c-e4d5-4130-b302-bd5b37d0f256 | width=400)

