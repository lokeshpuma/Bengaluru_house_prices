function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i = 0; i < uiBHK.length; i++) {
        if(uiBHK[i].checked) {
            return parseInt(uiBHK[i].value);
        }
    }
    return -1; // Invalid value
}

function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i = 0; i < uiBathrooms.length; i++) {
        if(uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }
    return -1; // Invalid value
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");
    
    // Validation
    if (!sqft.value || sqft.value <= 0) {
        alert("Please enter a valid area in square feet");
        return;
    }
    
    if (bhk === -1) {
        alert("Please select number of BHK");
        return;
    }
    
    if (bathrooms === -1) {
        alert("Please select number of bathrooms");
        return;
    }
    
    if (!location.value) {
        alert("Please select a location");
        return;
    }
    
    var url = "http://127.0.0.1:5000/predict_home_price";
    
    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    }, function(data, status) {
        console.log(data.estimated_price);
        
        // Display the result
        estPrice.style.display = "block";
        document.getElementById("priceValue").innerHTML = "₹ " + data.estimated_price.toLocaleString();
        
        // Smooth scroll to result
        estPrice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }).fail(function(xhr, status, error) {
        console.error("Error:", error);
        alert("Error estimating price. Please make sure the server is running.");
    });
}

function onPageLoad() {
    console.log("Document loaded");
    
    var url = "http://127.0.0.1:5000/get_location_names";
    
    $.get(url, function(data, status) {
        console.log("Got response for get_location_names request");
        
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            
            // Clear existing options except the first one
            $('#uiLocations').empty();
            $('#uiLocations').append('<option value="" disabled selected>Choose a location</option>');
            
            // Add all locations
            for(var i = 0; i < locations.length; i++) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    }).fail(function(xhr, status, error) {
        console.error("Error loading locations:", error);
        alert("Error loading locations. Please make sure the server is running at http://127.0.0.1:5000");
    });
}

window.onload = onPageLoad;
