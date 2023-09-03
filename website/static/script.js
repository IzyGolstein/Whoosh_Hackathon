
var map = '';


function editMap(response){
    // Assuming 'map' is your Leaflet map object
    // console.log(response['point_from'].split(','));
    console.log(response['road'], 'aaaaaaa');
    // var roads = response['road'];
    var roads = response['road'];
    console.log(roads, typeof(roads), 'jjjj');
    
    map.eachLayer(function(layer) {
        // Check if the layer is an instance of L.geoJSON
        if (layer instanceof L.GeoJSON || layer instanceof L.polyline || layer instanceof L.LayerGroup) {
        // Remove the layer from the map
        map.removeLayer(layer);
        }
    });
    
    // // Create an empty layer group
    // var roadLayerGroup = L.layerGroup();
    var colors = ['red', 'green', 'black'];
    // // Loop through the roads array and create polylines for each road
    // for (var i = 0; i < roads.length; i++) {
    //     var roadCoordinates = roads[i];
    //     var polyline = L.polyline(roadCoordinates, { color: colors[i] }); // Set color or other options as needed
    //     roadLayerGroup.addLayer(polyline); // Add polyline to the layer group
    // }
    
    // // Add the road layer group to the map
    // roadLayerGroup.addTo(map);
    for (var i = 0; i < roads.length; i++){
        var road = roads[i];
        var linestringRoads = {
            "type": "FeatureCollection",
            "features": [
            {
                "type": "Feature",
                "geometry": {
                "type": "LineString",
                "coordinates": road
                },
                "properties": {}
            }
            ]
        };

        L.geoJSON(linestringRoads, {
            style: {
            color: colors[i],
            weight: 3,
            opacity: 1
            }
        }).addTo(map);
    }
}

function loadMap(){
    map = L.map('map').setView([55.7504461, 37.6174943], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);
    console.log(map);
}

$(document).ready(function() {
    loadMap();
    function getCSRFToken() {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, 10) === 'csrftoken=') {
                    cookieValue = decodeURIComponent(cookie.substring(10));
                    break;
                }
            }
        }
        return cookieValue;
    }

    $('#api-form').submit(function(event) {
        event.preventDefault();
        console.log('here', $(this).serialize());
        
        var data = $(this).serialize();
        var csrfToken = getCSRFToken(); // Retrieve the CSRF token
        console.log($('input[name="waypoints"]:checked'), data);
        $.ajax({
            type: 'POST',
            url: '/api/v1/route/',
            data: data,
            headers: { 'X-CSRFToken': csrfToken }, // Include the CSRF token in the request headers
            success: function(response) {
                // $('#response-container').html(
                //     '<div class="w-full mb-2"> <div class="flex justify-center">' + 
                //         '<p class="px-8 w-full border rounded py-2 text-black-700 items-center"> From: '+response.point_from + '</p></div></div>'+
                //     '<div class="w-full mb-2"> <div class="flex justify-center">' + 
                //     '<p class="px-8 w-full border rounded py-2 text-black-700 items-center"> To: '+response.point_to + '</p></div></div>'+ 
                //     '<div class="w-full mb-2"> <div class="flex justify-center">' + 
                //     '<p class="px-8 w-full border rounded py-2 text-black-700 items-center"> Waypoints: '+response.waypoints + '</p></div></div>');
                editMap(response);
                $('p[name="road_name"]').removeClass('hidden');
                $('#formsErrors').empty();
            },
            error:
            function(xhr, status, error) {
                // Handle error response
                console.log(xhr, status, error);
                var responseJson = JSON.parse(xhr.responseText);
                var errors = responseJson.errors;
                console.log(responseJson.errors);
                var errorMessage = '';

                // Iterate through the errors and create the error message
                for (var field in errors) {
                    if (errors.hasOwnProperty(field)) {
                    errorMessage += field + ': ' + errors[field] + '<br>';
                    }
                }

                // Display the error message in the response container
                $('#formsErrors').html(errorMessage);
                $('#response-container').empty();
                $('p[name="road_name"]').addClass('hidden');
            }
        });
    });
});