let usaAreaCenterCoordinates =[39.82,98.58]
let zoomLevel = 6

let map= L.map('bridgespans-maps').setView(usaAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let largestUSBridgeCoordinates =[30.20, -90.12]
let largestUsBridgeMarker = L.marker(largestUSBridgeCoordinates)
    .bindPopup('Lake Pontchartrain Causeway').addTo(map)


///defining data as an arrayy of objects

var data = [
    {
        name: "Verrazano-Narrows bridge",
        lat: 40.6066,
        lng: -74.0447,
        description: "Verrazano-narrows bridge, NY",
        span: 1298.4,

    },
    {
        name: "Golden Gate Bridge",
        lat: 37.8199,
        lng: -122.4783,
        description: "Golden Gate Bridge, CA",
        span:1280.2,

    },
    {
        name: "Mackinac Bridge",
        lat: 45.8184,
        lng: -84.7278,
        description: "Mackinac Bridge , MI",
        span: 1158.0,
    },
    {
        name: "George Washington Bridge",
        lat: 40.8517,
        lng: -73.9527,
        description: "George Washington Bridge NY and NJ",
        span: 1067.0,

    },
    {
        name: "Tacoma Narrows Bridge",
        lat: 47.2690,
        lng: -122.5517,
        description: "Tacoma Narrows Bridge, WA",
        span: 853.44,
    },
    ]

// Loop over data to create markers and popups
for (var i = 0; i < data.length; i++) {
    // Creating markers
    var marker = L.marker([data[i].lat, data[i].lng]).addTo(map);

    var popupContent =  data[i].name +  + "Span: " + data[i].span;


    // Creating a  popup
    var popup = L.popup().setContent(data[i].description);

    // Add popup to marker
    marker.bindPopup(popup);
}


///longest US Bridges chart
let context = document.getElementById('bridgeChart').getContext("2d");
let bridgeChart = new chart(context, {
        type: "bar",
        data: {
            labels: bridgespansData.map(item => item.name),
            datasets: [{
                label: "span",
                data: bridgespansData.map(item => item.span),
                backgroundColor: ["blue", "yellow", "red", "orange"],
                borderWidth:1
            }]
        },
        options:{
            title:{
                display:true,
                text:'largest bridges in the usa by span'
            },
            scales:{
                yAxes:[{
                    ticks: {
                        beginsAtZero: true,
                    }
                }]
            }
        }
    }

)///L.icon =function(options){
   // return new L.Icon(options;
//}

///L.marker([47.2690, -122.5517], {icon:bridgeIcon}).addTo(map).bindPopup('Tacoma bridge')