let price = document.getElementById ( 'number' )

let region = document.getElementById ( 'provinces' )

function calculate ()
{       
    let index = region.options[region.selectedIndex].value
    let full_price = (index * price.value).toFixed(2) + "$"
    let tax_percentage = ( (index - 1) * 100 )

    if (tax_percentage == 14.975000000000005)
    {
     tax_percentage = tax_percentage.toFixed(3) + "%"
    }
    else
    {
      tax_percentage = tax_percentage.toFixed(0) + "%"
    }
    
    alert (full_price + "\r\n" + region.options[region.selectedIndex].text + "'s" + " sales tax is " + tax_percentage + ".")
}

// Enter button

document.getElementById ('enter').addEventListener ('click', calculate);

// Enter key

var input = document.getElementById( 'number' );

input.addEventListener("keyup", function(event) 
{
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById( 'enter' ).click();
  }
});

// Dark Mode & Light Mode

var dark_mode = "false"

function dark_light_mode ()
{
  let backdrop = document.getElementsByTagName ("BODY") [0];
  let boxes = document.getElementsByClassName ("boxes");
  let i;

  if (dark_mode == "false")
  {
    backdrop.style.backgroundColor = "black";

    for (i = 0; i < boxes.length; i++)
    {
      boxes[i].style.backgroundColor = "dimgray";
      boxes[i].style.color = "white"
      boxes[i].style.border = "thin solid lavenderblush"
    }

    document.getElementById ('DarkMode').textContent = "Light Mode";
    dark_mode = "true";
  }

  else if (dark_mode == "true")
  {
    backdrop.style.backgroundColor = "seashell";

    for (i = 0; i < boxes.length; i++)
    {
      boxes[i].style.backgroundColor = "white";
      boxes[i].style.color = "black"
      boxes[i].style.border = "thin solid lightgray"
    }
    document.getElementById ('DarkMode').textContent = "Dark Mode";
    dark_mode = "false";
  }
}

document.getElementById ('DarkMode').addEventListener ('click', dark_light_mode);