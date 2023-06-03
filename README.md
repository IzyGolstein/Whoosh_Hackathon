# Optimal Electric Scooter Routing Hackathon Solution

Welcome to the Optimal Electric Scooter Routing Hackathon Solution! 🛴💨

In this hackathon, we set out to find the absolute best route for electric scooters. We considered all the important stuff like distance, road conditions, traffic, and charging stations. Let's dive into the awesome things we did:

## What's Inside?

1. Data Loading 📊:
   - We loaded all the cool spatial data from GeoPackage files. Hexes, speed limit zones, parkings, and forbidden zones. Yeah, we got it all covered!
   - CSV files also gave us additional data like speed median, scooters at parkings, routes hex, road index, and clashes. We needed all that juicy information!

2. Data Processing 🔄:
   - We merged different DataFrames based on common column values. Hexes with routes_hex? Yeah, we made it happen!

3. Geospatial Analysis 🌍:
   - We played around with coordinates of nodes and edges. Extracting them, manipulating them. All that fancy geospatial stuff!
   - We even assigned hexagon values to roads based on the closest hexagon. It's all about precision, you know!

4. Graph Loading and Analysis 🚂:
   - We loaded and downloaded a graph from OpenStreetMap (OSM). We needed to know everything about the roads, railways, and subway crossings!
   - With our graph analysis skills, we retrieved some cool graph information. We're like detectives, finding hidden treasures in the data!

5. Routing Algorithm using A* 🗺️:
   - Hold on tight! This is where the magic happens. We implemented the super-smart A* algorithm to find the absolute best route for electric scooters.
   - We took into account everything that matters - distance, road conditions, traffic congestion, and even charging stations. Scooters gotta stay charged, you know!
   - Our algorithm is so smart, it can dynamically update the route based on real-time data and changing conditions. Nothing can stop us!

6. Optimization Techniques ⚡:
   - We didn't settle for good, we aimed for greatness! We applied some optimization techniques to make our routing algorithm even better.
   - Battery life, charging time, user preferences - we considered it all. We fine-tuned parameters and heuristics for that extra oomph!

7. Results and Evaluation 📈:
   - We crunched the numbers and analyzed the heck out of the optimal routes we generated. We needed to know how awesome they are!
   - We compared our solution with existing routing methods. Spoiler alert: We rocked it! Travel time, user satisfaction, and operational efficiency, all off the charts!

8. Conclusion 🎉:
   - It's time to wrap things up. We summarized our amazing findings and insights from the optimal electric scooter routing solution.
   - We even discussed future enhancements and applications because we're all about the future. We're trailblazers, paving the way for awesome electric scooter journeys!
   - Oh, and let's not forget to thank our awesome team members, contributors, and sponsors. We couldn't have done it without them!

## Algorithm for Filling Missing Values using Decision Trees:

Hey, we had another trick up our sleeves! We had an algorithm to fill in missing values in our data using decision tree models. Check it out:

1. Prepare data:
   - We made a copy of the data, focusing on the target column with non-null values. Gotta keep things organized!
   - We separated the features and the target variable. It's like separating the cool from the cooler!

2. Find best hyperparameters:
   - We did some grid searching with cross-validation to find the perfect hyperparameters for our decision tree model.
   - We used mean squared error as our scoring metric. Can't settle for anything less!

3. Train the best model:
   - Ah, the moment of truth! We retrieved the best model from our grid search results. It's the superstar model!

4. Fill missing values:
   - When we found rows with missing values, we put our model to work. It predicted those missing values like a boss using the other available features.
   - We replaced those predicted values in the original data. Voila! Missing values no more!

5. Rinse and repeat:
   - We repeated steps 2-4 for each column with missing values. We made sure nothing slipped through the cracks!

Our algorithm is like a magician, making missing values disappear using decision tree models. Each column is treated independently, and the predictions are based on the available features. It's all about making our data complete and awesome!

So, buckle up and get ready for the electrifying world of optimal electric scooter routing! 🚀💡🔋
