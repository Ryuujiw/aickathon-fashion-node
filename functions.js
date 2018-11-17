var result = {
     "person": {
          "boundingBox": {
               "x": 168,
               "y": 4,
               "w": 299,
               "h": 896
          },
          "colors": [
               {
                    "hex": "#ebc4cd",
                    "colorName": "pink",
                    "colorGeneralCategory": "Red",
                    "ratio": 0.24675324675324675
               },
               {
                    "hex": "#e4b6b8",
                    "colorName": "pink_light",
                    "colorGeneralCategory": "Red",
                    "ratio": 0.36363636363636365
               },
               {
                    "hex": "#d9a6a6",
                    "colorName": "tan",
                    "colorGeneralCategory": "Brown",
                    "ratio": 0.48888888888888888
               }
          ],
          "styles": [
               {
                    "styleName": "Romantic",
                    "confidence": 0.4469371946294496
               },
               {
                    "styleName": "Elegant",
                    "confidence": 0.14566914378339832
               },
               {
                    "styleName": "Vintage",
                    "confidence": 0.11145916723322409
               }
          ],
          "garments": [
               {
                    "typeName": "Skirt",
                    "boundingBox": {
                         "x": 170,
                         "y": 303,
                         "w": 297,
                         "h": 301
                    },
                    "confidence": 0.5021743178367615
               },
               {
                    "typeName": "Dress",
                    "boundingBox": {
                         "x": 174,
                         "y": 140,
                         "w": 293,
                         "h": 465
                    },
                    "confidence": 0.49173223972320557
               }
          ]
     }
};

var a_colour = result.person.colors;
var a_styles = result.person.styles;
var a_garment = result.person.garments;

getBestColours(a_colour, 1);

function getBestColours (parent, numbers){
	if(parent.length < numbers){
		numbers = parent.length;
	}

	var ratio = new Array();
	for(i = 0; i < parent.length; i++){
		ratio.push(parent[i].ratio);
	} // all

	for(i = 0; i < numbers; i++){
		var max = Math.max.apply(null, ratio);
          for(j = 0; j < parent.length; j++){
               if(ratio[j] == max){
                  console.log(ratio[j]);
                  ratio.splice(j, 1);
			}
		}
	}
}

getBestConfidence(a_garment, 3);

function getBestConfidence (parent, numbers){
	if(parent.length < numbers){
		numbers = parent.length;
	}

	var confidence = new Array();
	for(i = 0; i < parent.length; i++){
		confidence.push(parent[i].confidence);
     } // all

	for(i = 0; i < numbers; i++){
          var max = Math.max.apply(null, confidence);
          for(j = 0; j < parent.length; j++){
               if(confidence[j] == max){
                  console.log(confidence[j]);
                  confidence.splice(j, 1);
                  //INSERT DATABASE
			}
		}
	}
}