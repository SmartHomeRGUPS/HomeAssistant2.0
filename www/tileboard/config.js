/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/

var CONFIG = {
   customTheme:CUSTOM_THEMES.TRANSPARENT, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: 'http://192.168.1.182:8123',
   wsUrl: 'ws://192.168.1.182:8123/api/websocket',
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
   debug: false, // Prints entities and state change info to the console.
   pingConnection: true, //ping connection to prevent silent disconnections
   locale: 'en-us', // locale for date and number formats - available locales: it, de, es, fr, pt, ru, nl, pl, en-gb, en-us (default). See readme on adding custom locales.
   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // HORIZONTALLY, VERTICALLY, GRID
   onReady: function () {},

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         margin: '30px 130px 0',
         fontSize: '28px'
      },
      right: [
         {
            type: HEADER_ITEMS.CUSTOM_HTML,
            html: 'Average Temperature In Room'
         },
         {
            type: HEADER_ITEMS.WEATHER,
            styles: {
               margin: '0'
            },
            icon: '&weather.mycity.state',
            state: '&weather.mycity.state',
            icons: {
               'clear-day': 'clear',
               'clear-night': 'nt-clear',
               'cloudy': 'cloudy',
               'exceptional': 'unknown',
               'fog': 'fog',
               'hail': 'sleet',
               'lightning': 'chancestorms',
               'lightning-rainy': 'tstorms',
               'partly-cloudy-day': 'partlycloudy',
               'partly-cloudy-night': 'nt-partlycloudy',
               'partlycloudy': 'partlycloudy',
               'pouring': 'rain',
               'snowy': 'snow',
               'snowy-rainy': 'sleet',
               'wind': 'unknown',
               'windy': 'unknown',
               'windy-variant': 'unknown'
            },
            states: {
               'clear-night': 'Clear, night',
               'cloudy': 'Cloudy',
               'exceptional': 'Exceptional',
               'fog': 'Fog',
               'hail': 'Hail',
               'lightning': 'Lightning',
               'lightning-rainy': 'Lightning, rainy',
               'partlycloudy': 'Partly cloudy',
               'pouring': 'Pouring',
               'rainy': 'Rainy',
               'snowy': 'Snowy',
               'snowy-rainy': 'Snowy, rainy',
               'sunny': 'Sunny',
               'windy': 'Windy',
               'windy-variant': 'Windy'
            },
            fields: {
               temperature: '&weather.mycity.attributes.temperature',
               temperatureUnit: '°C',
            }
          }
      ],
      left: [
         {
            type: HEADER_ITEMS.CUSTOM_HTML,
            html: '<b><i>SmartHy</b></i>'
         },
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'EEEE, dd LLLL', //https://docs.angularjs.org/api/ng/filter/date
         },
         // {
         //    type: HEADER_ITEMS.DATE,
         //    dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         // },
         // {
         //    type: HEADER_ITEMS.TIME,
         // },
      ]
   },

   /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 300, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/bg1.jpeg' },
         {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: 'Welcome to the <b>TileBoard</b>',
                  styles: { fontSize: '40px' }
               }
            ]
         },
         { bg: 'images/bg3.jpg' }
      ]
   },*/

   pages: [
      {
         title: 'Main Room',
         bg: 'images/bg1.jpeg',
         icon: 'mdi-numeric-1-box-outline',
         groups: [
            {
               title: 'Light',
               height: 2,
               width: 3,
               items: [
                  {
                     position: [0,0],
                     width: 2,
                     type: TYPES.SWITCH,
                     id: "group.all_lights",
                     title: 'AllLight',
                     states: {
                        on: "on",
                        off: "off",
                     },
                     icons: {
                        on: 'mdi-lightbulb-on',
                        off: "mdi-lightbulb",
                     },
                  },
                  {
                     position: [0,1],
                     width: 2,
                     type: TYPES.SWITCH,
                     id: "group.auditorium_lights",
                     title: "Light in Main Room",
                     states: {
                        on: 'on',
                        off: 'off',
                     },
                     icons: {
                        on: 'mdi-lightbulb-on',
                        off: "mdi-lightbulb",
                     },
                  },
                  {
                     position: [0,2],
                     width: 2,
                     type: TYPES.SWITCH,
                     id: "group.glass_lights",
                     title: "Light in Glass Room",
                     states: {
                        on: 'on',
                        off: 'off',
                     },
                     icons: {
                        on: 'mdi-lightbulb-on',
                        off: "mdi-lightbulb",
                     },
                  },
               ],
            },
            {
               title: 'Sensors',
               height: 2,
               width: 3,
               items: [
                  {
                     position: [0,0],
                     type: TYPES.SENSOR_ICON,
                     id: 'binary_sensor.water_leak_sensor_1f28',
                     title: 'water check',
                     states: {
                        on: "On",
                        off: "Off",
                     },
                     icons: {
                        on: 'mdi-hot-tub',
                        off: 'mdi-hot-tub'
                     },
                  },
                  {
                      title:"Smoke", //nomi
                      id: 'binary_sensor.smoke_sensor_fa9e', //idraqami
                      position:[1,0], //ajratilganJ
                      type: TYPES.SENSOR_ICON,
                      states: {
                        on: "On",
                        off: "Off",
                     },
                     icons: {
                        on: 'mdi-bell',
                        off: 'mdi-bell-off',
                     },
                  },
                  {
                    title:'Door',
                    position:[0,1],
                    type: TYPES.SENSOR_ICON,
                    id: 'binary_sensor.door_and_window_sensor_12b8',
                    states:{
                        on:"open",
                        off:"close",
                    },
                    icons:{
                        off:"mdi-lock",
                        on:"mdi-lock-open",
                    },
                  },
               ],
            },
         ],
      },
      {
         title: 'Second page',
         bg: 'images/bg2.png',
         icon: 'mdi-numeric-2-box-outline',
         groups: [
            {

            }
         ]
      },
   ],
}
