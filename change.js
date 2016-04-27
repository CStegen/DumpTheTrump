function displayNextImage() {
              blubb = (blubb === images.length - 1) ? 0 : blubb + 1;
              document.getElementById("img").src = images[blubb];
          }
function displayPreviousImage() {
              blubb = (blubb <= 0) ? images.length - 1 : blubb - 1;
              document.getElementById("img").src = images[blubb];
          }

function startTimer() {
              setInterval(displayNextImage, 1000);
          }

var images = [], blubb = -1;
images[0] = "Graphics/logo_final_happy.png";
images[1] = "Graphics/logo_final_angry.png";
images[2] = "Graphics/logo_final_weird.png";