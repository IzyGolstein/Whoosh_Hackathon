вывывыывывывы
# Optimal Electric Scooter Routing Project

Welcome to the Optimal Electric Scooter Routing Project! 🛴💨

In this project, we aimed to develop an innovative solution for finding the best routes for electric scooters. Our focus was on optimizing distance, road conditions, traffic, and charging station availability. Let's take a look at the key components of our project:

## Project Overview

1. Data Loading 📊:
   - We loaded spatial data from various sources, including GeoPackage files and CSV files. This data included details about hexes, speed limit zones, parkings, forbidden zones, speed medians, scooters at parkings, routes hex, road index, and clashes. We left no stone unturned when it came to data collection!

2. Data Processing 🔄:
   - Our data processing phase involved merging different datasets based on common column values. We combined information from hexes with routes_hex to create a comprehensive picture of the road network.

3. Geospatial Analysis 🌍:
   - We leveraged geospatial analysis techniques to extract coordinates of nodes and edges from the loaded graph data. This allowed us to perform manipulations and processing on the geospatial data. For example, we combined road attributes into a single column and split linestrings for improved accuracy.

4. Graph Loading and Analysis 🚂:
   - To gain a deeper understanding of the road network, we loaded or downloaded a graph from OpenStreetMap (OSM) based on a specified place name and filter expression. This graph data enabled us to perform analysis on railway and subway crossings, providing valuable insights.

6. Data Filling Algorithm using Decision Trees ⚙️:
   - In addition to route optimization, we developed an algorithm to fill missing data in our datasets using decision tree models. This algorithm involved preparing the data, finding the best hyperparameters through grid search, training the model, and then using it to predict missing values based on available features. It ensured that our datasets were complete and ready for analysis.

5. A* Algorithm for Route Optimization 🗺️:
   - The highlight of our project was the implementation of the A* algorithm for finding the optimal routes for electric scooters. We considered factors such as distance, road conditions, traffic congestion, and the availability of charging stations. Our algorithm dynamically adjusted the routes based on real-time data, ensuring the most efficient and practical paths.

8. Conclusion 🎉:
   - In conclusion, our Optimal Electric Scooter Routing Project delivered cutting-edge solutions for finding the best routes for electric scooters. We explored various data sources, employed advanced algorithms, and utilized optimization techniques to ensure efficient and enjoyable scooter journeys. This project represents our dedication to innovation and our commitment to revolutionizing urban mobility.

Thank you for exploring our project and joining us on this electrifying journey! 🚀💡🔋

