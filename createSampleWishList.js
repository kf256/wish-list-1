function createSampleWishList() {
    importList({"version":"1.0","name":"Sample wish list","list":[
        {"name":"Books","wishes":[
            {"name":"Celestial Echoes","details":[
                {"type":"text","name":"author","value":"unknown"},
                {"type":"text","name":"genre","value":"science fiction"},
                {"type":"number","name":"year of publication","value":2124}
            ]},
            {"name":"Artificial Intelligence for beginners","details":[
                {"type":"text","name":"author","value":"AI"},
                {"type":"text","name":"genre","value":"nonfiction"},
                {"type":"number","name":"year of publication","value":2023}
            ]}
        ]},
        {"name":"Technology","wishes":[
            {"name":"flash drive","details":[
                {"type":"number","name":"size in gigabytes","value":"32"},
                {"type":"text","name":"color","value":"dark black"}
            ]},
            {"name":"3D-printer","details":[
                {"type":"text","name":"size","value":"20cm x 20cm x 20m"}
            ]}
        ]}
    ]});
}