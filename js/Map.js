 


 var stops = [{lat:37.819967,lng:-122.4808222,name:"SAN FRANCISCO, CA: 36 Miles"}, 
                    {lat:37.4738993,lng:-122.517024,name:"HALF MOON BAY, CA: 109 Miles"}, 
                    {lat:36.5944317,lng:-121.9025185,name:"MONTEREY, CA: 45.6 Miles"},
                    {lat:36.979498,lng:-122.0656834,name:"SANTA CRUZ, CA: 68.8 Miles"}, 
                    {lat:36.979498,lng:-122.0656834,name:"BIG SUR, CA: 133 Miles"}, 
                    {lat:35.6852119,lng:-121.1704138,name:"HEARST CASTLE: 58.6 Miles"}, 
                    {lat:35.1547736,lng:-120.6945125,name:"PISMO BEACH: 50.3 Miles"}, 
                    {lat:34.5295514,lng:-120.3589431,name:"LOMPOC, CA: 50.3 Miles"},
                    {lat:34.4281738,lng:-119.7721071,name:"SANTA BARBARA, CA: 104 Miles"},
                    {lat:34.0207504,lng:-118.6919241,name:"LOS ANGELES, CA: Ending Point"}]; 


        var _map;

        function initMap() 
        {
         // map style
            var customMapType = new google.maps.StyledMapType([
                    {
                        stylers: [
                            
                        ]
                    },



                    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "gamma": "0.82"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "gamma": "1.21"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": "-60"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "gamma": "5.37"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#419d8c"
            },
            {
                "lightness": "-39"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#077ebe"
            },
            {
                "gamma": "5.37"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
                        ]
                    },

                    // {
                    //     "featureType": "water",
                    //     "elementType": "all",
                    //     "stylers": [
                    //         {
                    //             "visibility": "on"
                    //         },
                    //         {
                    //             "color": "#e0f1f9"
                    //         }
                    //     ]
                    // },

                    // {
                    //     "featureType": "transit.line",
                    //     "elementType": "all",
                    //     "stylers": [
                    //         {
                    //             "visibility": "off"
                    //         }
                    //     ]
                    // },

                    ], {
                        name: 'Custom Style'
                    });


            var customMapTypeId = 'custom_style';



            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: {lat: 36.778259, lng: -119.417931}, 
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl:false,
                fullscreenControl: false,
                mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
            }
            }); 

            var bikeLayer = new google.maps.BicyclingLayer();
            bikeLayer.setMap(map);

            var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(62.281819, -150.287132),
            new google.maps.LatLng(62.400471, -150.005608));



          



            

        // 10 points

            map.mapTypes.set(customMapTypeId, customMapType);
            map.setMapTypeId(customMapTypeId);

            _map = map;

            var directionsDisplay = new google.maps.DirectionsRenderer({map: map});

            var stepDisplay = new google.maps.InfoWindow;
            var infoWindow = new google.maps.InfoWindow({map: map});




        // food_icon

            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:37.8037383,lng:-122.506829}, // Round Table Pizza
                map: map,
                icon: foodIcon
            });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3>Cliff House</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/Lou’s Cafe.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 1090 Point Lobos Ave, San Francisco, CA 94121 <br>Phone: (415) 386-3330</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
                                addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:37.8038241,lng:-122.5069712}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3>Bridge Cafe</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/Thai Cafe.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: Golden Gate National Recreation Area, Golden Gate Bridge Plaza, San Francisco, CA 94129 <br>Phone: (415) 426-5225</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);


            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:37.4741305,lng:-122.5170242}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3>Shiki Japanese Cuisine</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/STICKS.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 20 Stone Pine Rd, Half Moon Bay, CA 94019 <br>Phone: (650) 712-8886</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);


            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:37.4741305,lng:-122.5170242}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3>Cetrella - Half Moon Bay</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/Big Sur.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 845 Main St, Half Moon Bay, CA 94019 <br>Phone: (650) 726-4090</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);


            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:36.5945593,lng:-121.9025185}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3>Restaurant 1833</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/Sebastian’s.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 500 Hartnell St, Monterey, CA 93940 <br>Phone: (831) 643-1833</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

          addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);


            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:36.979498, lng:-122.0656834}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3>Laili</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/Splash.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 101 Cooper St, Santa Cruz, CA 95060<br>Phone: (831) 423-4545</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);


            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:36.979498, lng:-122.0656834}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Pacifics Edge Restaurant</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/MesaVerde.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: Hyatt Carmel Highlands, Overlooking Big Sur Coast, 120 Highlands Dr, Carmel-By-The-Sea, CA 93923<br>Phone: (831) 622-5445</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);


            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:35.6853354,lng:-121.2382654}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> SEBASTIANS</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/desktop.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 442 Slo San Simeon Rd, San Simeon, CA 93452<br>Phone: (805) 927-3307</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
         addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);


            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:35.142467,lng:-120.646640}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Giuseppe’s Express</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/greasy-fast-food.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 800 Price St, Pismo Beach, CA 93449<br>Phone: (805) 773-2873</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:34.6540517,lng:-120.5101321}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Angelas Restaurant </h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/images.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 115 S J St, Lompoc, CA 93436<br>Phone: (805) 737-0184</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:34.4180393,lng:-119.7068109}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Cadiz Restaurant & Lounge </h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/eating-together.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 509 State St, Santa Barbara, CA 93101<br>Phone: (805) 770-2760</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var foodIcon = {
                url:'img/map/foodIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:34.053031,lng:-118.2531411}, //
                map: map,
                icon: foodIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Bottega Louie </h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/landscapec3.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 700 S Grand Ave, Los Angeles, CA 90017<br>Phone: (213) 802-1470</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);



        // hotel_icon


            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:37.8103702,lng:-122.4843494}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Pier 2620 Hotel Fishermans Wharf </h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/Stanford.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 2620 Jones St, San Francisco, CA 94133<br>Phone: (415) 885-4700</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
           addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:37.4743616,lng:-122.5170244}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Coastside Inn at Half Moon Bay </h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/Hyatt.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 230 Cabrillo Hwy, Half Moon Bay, CA 94019<br>Phone: (650) 726-3400</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:36.5985167,lng:-121.9218147}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Hotel Abrego </h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/Carmel.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 755 Abrego St, Monterey, CA 93940<br>Phone: (800) 982-1986</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
          addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:36.979498,lng:-122.0656834}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Hotel Paradox, Autograph Collection</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/HearstCastle.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 611 Ocean St, Santa Cruz, CA 95060<br>Phone: (831) 425-7100</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:36.5261999,lng:-121.9120868}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Casa De Carmel</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/PismoBeach.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: Monte Verde St & Ocean Ave, Carmel-By-The-Sea, CA 93923 <br>Phone: (831) 624-2429</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
           addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:35.6394511,lng:-121.1745446}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Sands by the Sea</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/SantaBarbara.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 9355 Hearst Dr, San Simeon, CA 93452<br>Phone: (800) 444-0779</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:35.1549039,lng:-120.6945125}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Pismo Beach Hotel</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/SantaMonica.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 230 Pomeroy Ave, Pismo Beach, CA 93449<br.Phone: (805) 773-4445</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'

           addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:34.6384852,lng:-120.4489524}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Cairns Inn & Suites</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/hotel-yurbban-trafalgar.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 940 E Ocean Ave, Lompoc, CA 93436<br>Phone: (805) 735-7731</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:34.4283912,lng:-119.7370866}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Santa Barbara Inn</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/hotels-piscine-barcelone.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 901 E Cabrillo Blvd, Santa Barbara, CA 93103<br>Phone: (805) 966-2285</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

            var hotelIcon = {
                url:'img/map/hotelIcon.png',
                scaledSize: new google.maps.Size(28,28)
            };
            var foodIconMarker = new google.maps.Marker({
                position: {lat:34.0573238,lng:-118.2708866}, //
                map: map,
                icon: hotelIcon
              });
            var foodStepDisplay = new google.maps.InfoWindow;
            var foodMarkerHTMLContent = 
                                        '<div id="iw-container">' +
                                            '<h3> Miyako Hotel Los Angeles</h3>' +
                                            '<div class="iw-content">' +
                                                '<img src="img/map/majestic-hotel-spa-barcelona.jpg" alt="Lou’s Cafe" height="115" width="83">' +
                                                '<p>Location: 328 E 1st St, Los Angeles, CA 90012<br>Phone: (213) 617-2000</p>' +
                                            '</div>' +
                                            '<div class="iw-bottom-gradient"></div>' +
                                        '</div>'
            addContentToInfoWindowOnMarker(foodStepDisplay,foodMarkerHTMLContent,map,foodIconMarker);

        




            for(var i=1; i<stops.length; i++){
                directionsService = new google.maps.DirectionsService;
                directionsDisplay = new google.maps.DirectionsRenderer;
                directionsDisplay.setMap(map);
                calculateAndDisplayRoute(directionsService, directionsDisplay, stops[i-1], stops[i], stepDisplay);
            }



            var infoWindow = new google.maps.InfoWindow({map: map});



            // Try HTML5 geolocation.


            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');

                var locationIcon = {
                    url:'img/map/myuser2.png',
                    scaledSize: new google.maps.Size(70,83)
                };
                var locationIconMarker = new google.maps.Marker({
                    position: pos, //
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    map: map,
                    icon: locationIcon
                  });
                map.setCenter(pos);
                }, function() {
                  handleLocationError(true, infoWindow, map.getCenter());
                });
                } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }

            window.onresize = resizeMapHandler;

        }

        function resizeMapHandler() 
        {
            $("#map").css("height",window.innerHeight);
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.');
            
        }




        






        function calculateAndDisplayRoute(directionsService, directionsDisplay, positionFrom, positionTo, stepDisplay) {
                directionsService.route({
                    origin: positionFrom,
                    destination: positionTo,
                    travelMode: google.maps.TravelMode.BICYCLING
                }, function(response, status) {
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setMap(_map);
                    directionsDisplay.setOptions( { suppressMarkers: true } );

                    // console.log(positionTo);


                    var image = {
                        url:'img/map/Map_icon.png',
                        scaledSize: new google.maps.Size(40,42)
                    };
                    var start_marker = new google.maps.Marker({
                        position: response.routes[0].legs[0].start_location,
                        map: _map,
                        icon: image
                    });
                    var end_marker = new google.maps.Marker({
                        position: response.routes[0].legs[0].end_location,
                        map: _map,
                        icon: image
                    });

                    showSteps(response, start_marker, stepDisplay, _map, positionFrom.name);
                    showSteps(response, end_marker, stepDisplay, _map, positionTo.name);
                    console.log(positionTo.name);

                });
        }

        function showSteps(directionResult,marker,stepDisplay,map,location){
            
            google.maps.event.addListener(marker,'click',function(){
                stepDisplay.setContent(location);
                stepDisplay.open(map,marker);
            });

        }

        function addContentToInfoWindowOnMarker(infoWindow,content,map,marker)
        {
            google.maps.event.addListener(marker,'click',function(){
                infoWindow.setContent(content);
                infoWindow.open(map,marker);
            });
        }
