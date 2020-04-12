const PLANE_DATA = [
    {
        "name": "Supermarine Spitfire",
        "image": "spitfire",
        "groundattack": 6,
        "dogfight": 10,
        "production": 22600,
        "payload": 500,
        "topspeed": 369,
        "range": 423
    },
    {
        "name": "Boeing B29 Superfortress",
        "image": "b29",
        "groundattack": 0,
        "dogfight": 0,
        "production": 3970,
        "payload": 16000,
        "topspeed": 350,
        "range": 5830
    }, {
        "name": "Messerschmitt bf-109",
        "image": "bf109",
        "groundattack": 5,
        "dogfight": 9,
        "production": 34852,
        "payload": 500,
        "topspeed": 387,
        "range": 450
    }, {
        "name": "Focke Wulf 190",
        "image": "fw190",
        "groundattack": 8,
        "dogfight": 10,
        "production": 20051,
        "payload": 2600,
        "topspeed": 426,
        "range": 500
    }, {
        "name": "North American P51 Mustang",
        "image": "p51",
        "groundattack": 9,
        "dogfight": 9,
        "production": 15586,
        "payload": 2000,
        "topspeed": 437,
        "range": 1000
    }, {
        "name": "Hawker Hurricane",
        "image": "hurricane",
        "groundattack": 5,
        "dogfight": 7,
        "production": 14487,
        "payload": 1000,
        "topspeed": 341,
        "range": 480
    }, {
        "name": "Boeing B17 Flying Fortress",
        "image": "b17",
        "groundattack": 0,
        "dogfight": 0,
        "production": 12731,
        "payload": 8000,
        "topspeed": 287,
        "range": 2000
    }, {
        "name": "Avro Lancaster",
        "image": "lancaster",
        "groundattack": 0,
        "dogfight": 0,
        "production": 7377,
        "payload": 14000,
        "topspeed": 282,
        "range": 2530
    }, {
        "name": "de Havilland Mosquito",
        "image": "mosquito",
        "groundattack": 9,
        "dogfight": 6,
        "production": 7781,
        "payload": 4000,
        "topspeed": 300,
        "range": 1500
    }, {
        "name": "Mitsubishi Zero",
        "image": "zero",
        "groundattack": 7,
        "dogfight": 7,
        "production": 10939,
        "payload": 250,
        "topspeed": 351,
        "range": 1130
    }, {
        "name": "Yakovlev Yak-3",
        "image": "yak",
        "groundattack": 4,
        "dogfight": 8,
        "production": 4848,
        "payload": 0,
        "topspeed": 400,
        "range": 404
    }, {
        "name": "Junkers JU87 Stuka",
        "image": "ju87",
        "groundattack": 10,
        "dogfight": 3,
        "production": 6000,
        "payload": 1100,
        "topspeed": 255,
        "range": 490
    }, {
        "name": "Douglas C-47 Skytrain (Dakota)",
        "image": "dakota",
        "groundattack": 0,
        "dogfight": 0,
        "production": 16079,
        "payload": 0,
        "topspeed": 229,
        "range": 1600
    }, {
        "name": "Vought F4U Corsair",
        "image": "corsair",
        "groundattack": 8,
        "dogfight": 8,
        "production": 12571,
        "payload": 4000,
        "topspeed": 446,
        "range": 1000
    }, {
        "name": "Republic P-47 Thunderbolt",
        "image": "p47",
        "groundattack": 10,
        "dogfight": 7,
        "production": 15600,
        "payload": 2500,
        "topspeed": 433,
        "range": 1000
    }, {
        "name": "Hawker Typhoon",
        "image": "typhoon",
        "groundattack": 10,
        "dogfight": 6,
        "production": 3317,
        "payload": 2000,
        "topspeed": 405,
        "range": 690
    }, {
        "name": "Lockheed P-38 Lightning",
        "image": "p38",
        "groundattack": 6,
        "dogfight": 7,
        "production": 10037,
        "payload": 3000,
        "topspeed": 443,
        "range": 1305
    }, {
        "name": "Grumman F6F Hellcat",
        "image": "hellcat",
        "groundattack": 8,
        "dogfight": 9,
        "production": 12275,
        "payload": 2000,
        "topspeed": 380,
        "range": 944
    }, {
        "name": "Heinkel HE 111",
        "image": "he111",
        "groundattack": 0,
        "dogfight": 0,
        "production": 7300,
        "payload": 4410,
        "topspeed": 249,
        "range": 1212
    }, {
        "name": "Messerschmitt ME262",
        "image": "me262",
        "groundattack": 0,
        "dogfight": 6,
        "production": 1430,
        "payload": 0,
        "topspeed": 540,
        "range": 650
    }, {
        "name": "North American B-25 Mitchell",
        "image": "b25",
        "groundattack": 0,
        "dogfight": 0,
        "production": 9984,
        "payload": 3000,
        "topspeed": 272,
        "range": 1350
    }, {
        "name": "Consolidated B-24 Liberator",
        "image": "b24",
        "groundattack": 0,
        "dogfight": 0,
        "production": 18482,
        "payload": 5000,
        "topspeed": 303,
        "range": 1700
    }, {
        "name": "Junkers JU88",
        "image": "ju88",
        "groundattack": 9,
        "dogfight": 6,
        "production": 15183,
        "payload": 3100,
        "topspeed": 317,
        "range": 1553
    }, {
        "name": "Dornier Do 17",
        "image": "do17",
        "groundattack": 0,
        "dogfight": 0,
        "production": 2139,
        "payload": 1100,
        "topspeed": 258,
        "range": 850
    }, {
        "name": "Nakajima Ki-43",
        "image": "nakajima",
        "groundattack": 5,
        "dogfight": 7,
        "production": 5919,
        "payload": 1100,
        "topspeed": 329,
        "range": 497
    }, {
        "name": "Fairey Swordfish",
        "image": "swordfish",
        "groundattack": 6,
        "dogfight": 1,
        "production": 2391,
        "payload": 1500,
        "topspeed": 139,
        "range": 522
    }, {
        "name": "Fiat G.50 Freccia",
        "image": "freccia",
        "groundattack": 3,
        "dogfight": 4,
        "production": 683,
        "payload": 0,
        "topspeed": 293,
        "range": 277
    }, {
        "name": "Fiat BR.20 Stork",
        "image": "stork",
        "groundattack": 0,
        "dogfight": 0,
        "production": 510,
        "payload": 7900,
        "topspeed": 220,
        "range": 1710
    }, {
        "name": "Northrop P-61 Black Widow",
        "image": "blackWidow",
        "groundattack": 2,
        "dogfight": 7,
        "production": 706,
        "payload": 250,
        "topspeed": 369,
        "range": 610
    }, {
        "name": "Bristol Beaufighter",
        "image": "beaufighter",
        "groundattack": 7,
        "dogfight": 5,
        "production": 5928,
        "payload": 1500,
        "topspeed": 369,
        "range": 1479
    },

]

export default PLANE_DATA;