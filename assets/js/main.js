
    

    //Name
    //Ltitude , longtitude
    //Image Url
    //scaledSize width,height
    var markers =[
        [
        "1Nom School",
        40.407766068805046,
        49.84653641003396,
        "school-20.png",
        38,
        31],

        [
            "2Nom School",
            40.40786183645595,
            49.846479949035356,
            "school-20.png",
            38,
            31],

            ["3Nom School",
            40.4077780993847,
            49.846752193235915,
            "school-20.png",
            38,
            31],
            ["4Nom School",
            40.40793842515036,
            49.84628548887954,
            "school-20.png",
            38,
            31],
            [
                "5Nom School",
            40.40805586097987,
            49.846265372304785,
            "school-20.png",
            38,
            31
        ],
            [
            "6Nom School",
            40.408064030421585,
            49.845997151409705,
            "school-20.png",
            38,
            31
        ],
        [
            "7Nom School",
            40.40813857652706,
            49.846254643461464,
            "school-20.png",
            38,
            31
        ],
        [
            "1no restourant",
            40.40827286143298,
            49.84944378999311,
            // "restorant.png",
            38,
            31
        ],
        [
            "2no restourant",
            40.40853428221786,
            49.8492882218785,
            "restorant.png",
            38,
            31
        ],
        [
            "3no restourant",
            40.40866703457141,   
            49.84949743417056,
            "restorant.png",
            38,
            31
        ],
        [
            "4no restourant",
            40.4083708943463,
            49.849792477146536,
            "restorant.png",
            38,
            31
        ],
        [
            "5no restourant",
            40.408103345850066,
            49.84985416795061,
            "restorant.png",
            38,
            31
        ],
        [
            "6no restourant",
            40.40821771785646,
            49.85045498273806,
            "restorant.png",
            38,
            31
        ],
        [
            "7no restourant",
            40.408769151591216,
            49.850154575370226,
            "restorant.png",
            38,
            31
        ],
        [
            "8no restourant",
            40.40854245160392,
            49.85080903433512,
            "restorant.png",
            38,
            31
        ],
        [
            "Jugaad",
            40.40781202209257,
            49.8476736666489,
            // "jugad.jpg",
            45,
            45
        ],
        [
            "Jugaad",
            40.40759144600043,
            49.84494854241334,
            "school-20.png",
            38,
            31
        ],
    ]
 

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const markerss = [];

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.40781202209257, lng: 49.8476736666489 },
    zoom: 18,
    mapId: 'c5f38faef437cfb1',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  for (let i = 0; i < markers.length; i++) {
    const currmark = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currmark[1], lng: currmark[2] },
      map,
      title: currmark[0],
      icon: {
        url: currmark[3],
        scaledSize: new google.maps.Size(currmark[4], currmark[5])
      }
    });

    const infowindow = new google.maps.InfoWindow({
      content: currmark[0]
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    markerss.push(marker);
  }

  new MarkerClusterer(map, markerss, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    styles: [
      {
        textColor: 'white',
        url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
        height: 31,
        width: 38
      },
      {
        textColor: 'white',
        url: '',
        height: 31,
        width: 38
      },
      {
        textColor: 'white',
        url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m3.png',
        height: 66,
        width: 66
      }
    ]
  });
}

    
      
     

   
   

initMap()
