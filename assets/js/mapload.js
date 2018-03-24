jQuery(function ($) {
    
    'use strict';

    var map;

    map = new GMaps({
        el: '#map-wrapper',
        lat: 25.253028, //Replace Here Location Google Map Lat
        lng: 87.001904, //Replace Here Location Google Map Lng
        scrollwheel:false,
        zoom: 16,
        zoomControl : true,
        panControl : true,
        streetViewControl : true,
        mapTypeControl: false,
        overviewMapControl: false,
        clickable: true
    });

    var image = '';
    map.addMarker({
        lat: 25.253028, //Replace Here Location Google Map Lat
        lng: 87.001904, //Replace Here Location Google Map Lat
        icon: image,
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#d9d9d9',
    });


    var styles = [ 

    /*{
        "featureType": "road",
        "stylers": [
        { "color": "#ffffff" }
        ]
    },{
        "featureType": "water",
        "stylers": [
        { "color": "#99b3cc" }
        ]
    },{
        "featureType": "landscape",
        "stylers": [
        { "color": "#f2efe9" }
        ]
    },{
        "elementType": "labels.text.fill",
        "stylers": [
        { "color": "#d3cfcf" }
        ]
    },{
        "featureType": "poi",
        "stylers": [
        { "color": "#bfbfbf" }
        ]
    },{
        "elementType": "labels.text",
        "stylers": [
        { "saturation": 1 },
        { "weight": 0.1 },
        { "color": "#000000" }
        ]
    }*/

    ];

    map.addStyle({
        styledMapName:"Styled Map",
        styles: styles,
        mapTypeId: "map_style"  
    });

    map.setStyle("map_style");
}());