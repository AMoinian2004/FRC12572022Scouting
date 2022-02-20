var config_data = `
{
  "title":"FRC 1257 Scouting App 2022",
  "page_title":"FRC 1257 Rapid React Scouting App",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"Bridgewater",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
       "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Tablet": {
        "code":"r",
        "type":"robot",
         "choices":{
          "r1":"Tablet 1",
          "b1":"Tablet 4<br>",
          "r2":"Tablet 2",
          "b2":"Tablet 5<br>",
          "r3":"Tablet 3",
          "b3":"Tablet 6"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      }
    },
    "auton": {
      "Cross": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Human Shots": {
        "code":"hs",
        "title": "Lower Cargo Scored",
        "type":"counter"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
        "Upper Cargo Dropped": {
        "code":"du",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Dropped": {
        "code":"dl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "f":"Attempted but Failed<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Last successful rung": {
        "code":"lsr",
        "title": "last succcessful rung",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "x":"Successful/Not Attempted"
        },
        "defaultValue":"x"
      }
    },
    "postmatch": {
      "Notes": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      }
    }
  }
}`;
