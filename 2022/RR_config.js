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
          "r1":"Tablet A",
          "b1":"Tablet B<br>",
          "r2":"Tablet C",
          "b2":"Tablet D<br>",
          "r3":"Tablet E",
          "b3":"Tablet F"
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
      "Cross (left red/blue taped area)": {
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
      "Tried to climb": {
        "code":"lsr",
        "title": "last succcessful rung",
        "type":"radio",
        "choices":{
          "1":"Not Attempted/Successfully Climbed<br>",
          "2":"Low Tried<br>",
          "3":"Mid Tried<br>",
          "4":"High Tried<br>",
          "5":"Transversal Tried"
        },
        "defaultValue":"x"
      }
    },
    "postmatch": {
      "Notes (Leave blank if you have nothing else to mention)": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":200
      }
    }
  }
}`;
