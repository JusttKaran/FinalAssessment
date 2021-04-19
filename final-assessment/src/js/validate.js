/*Name: Jaskaran Singh
Student ID: 146269196*/

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var inpLat = document.getElementById("Lat");
  var inpLong = document.getElementById("Long");
  var a = document.getElementById("errLat");
  var b = document.getElementById("errLong");
  var check1 = true;
  var check2 = true;

    if(!(inpLat.value >= -90 && inpLat.value <= 90)) {
      check1 = false;
      a.innerText = "* must be a valid Latitude (-90 to 90)";
      event.preventDefault();
    } else {
      a.innerText = "*";
    }
    
    if(!(inpLong.value >= -180 && inpLong.value <= 180)) {
      check2 = false;
      b.innerText = "* must be a valid Longitude (-180 to 180)";
      event.preventDefault();
    } else {
      b.innerText = "*";
    }
    return check1 && check2;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
