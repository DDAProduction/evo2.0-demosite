function regular_map() {
    var var_location = new google.maps.LatLng(50.4296661, 30.430748);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_map = new google.maps.Map(document.getElementById("map"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Kyiv"
    });
}

// Initialize maps
regular_map();