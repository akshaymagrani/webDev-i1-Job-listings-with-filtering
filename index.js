// index.js
        
// Trying to use import to get the json data from data.json file within the same folder 
// -> probably the best way to import json file - Avoiding the 'fetch' dance.
import * as data from './data.json' assert {type: "json"}; // why assert? this returned a object file. 
console.log(Object.keys(data.default[1])); // contains all the data from json in a object. 

// Adding 'Featured' dynamically.
var parentCard = document.getElementsByClassName("company"); 
var card = document.getElementsByClassName("card"); // getting all the card references.
function addFeaturedText()
{
    for(let i = 0; i < data.default.length; i++) 
    {
        // feature_child 
        var feature_child = document.createElement('p'); // creating an instance of p tag for feature text.
        feature_child.innerHTML = 'Featured'; 
        feature_child.setAttribute("class","featured txt-white"); // adding classes to the p tag using the setAttribute method.
        
        if(data.default[i].featured === true) 
        {
            console.log(data.default[i].featured);
            parentCard[i].appendChild(feature_child);
            card[i].classList.add("br-r"); // adding a border on the left if the card has the 'Featured' text.
        }
    }
}
document.addEventListener("load", addFeaturedText()); // made a mistake and did not add () after function name. 

// Problem Statement : 
        // 1.   If any of the btn is clicked, loop through the cards to check 
        //      if the it contains the same text therein.
        //      if false, add a display-none class to the card.

        // 2.   on clicking close filter, remove the btn and associated close btn from the filter row.

        // 3.   return back to normal case : click 'Clear' btn, to window reload, 
        var btn = document.getElementsByClassName("filter_btn");
        console.log(btn);

        
        // problem : on clicking the btn I want to obtain its innerHTML / innerText
        
        function addEventListenerByClass(className, event, fn) {
            var list = document.getElementsByClassName(className);
            for (var i = 0, len = list.length; i < len; i++) {
                list[i].addEventListener(event, fn, false);
            }
        }
        
        addEventListenerByClass('filter_btn', 'click', filter);
        
        function filter(e){
            console.log(e.target.innerHTML);
            let btnInnerText = e.target.innerHTML;
            let valueList = Object.values(data.default);
            console.log(valueList.length, valueList);
            // obtain the button element on which the click was performed. Read its innerText / innerHTML to a variable.
            // check if the variable value is present in any of the json data
            // if not present, add class display - none to the associated card
            for (let i = 0; i < card.length; i++) 
            {
                // console.log(Object.values(data.default[i]));
                let valueList = Object.values(data.default[i]);
                
                for (let j = 0; j < valueList[i].length; j++) 
                {
                    console.log(valueList[j]);
                    // loop through all the values of json for all cards and for those in which it is not present add display none classname.
                    // if (valueList[j] != btnInnerText) 
                    // {
                    //     card[i].classList.add("display-none");
                    // }
                }
            }

            
        }
