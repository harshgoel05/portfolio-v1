var myFullpage = new fullpage('#fullpage', {
    navigation:true,
    navigationTooltips: ['Home', 'Skills','Web Services','Portfolio','Contact Me'],
    scrollingSpeed: 1000,
    responsiveSlides: true,
    
    afterLoad: function(origin, destination, direction){
        //section 0
        if(origin ){
            document.querySelector('.nameheading').style.bottom = 0 + 'px';
            document.querySelector('.nameheading').style.opacity = 1;
        }
        else{
            document.querySelector('.nameheading').style.bottom = -20 + '%';
            document.querySelector('.nameheading').style.opacity = 0;
        }
        //section1
        if(destination.index == 1){
            document.querySelector('.skills-icons').style.bottom = 0 + 'px';
            document.querySelector('.skills-icons').style.opacity = 1;
        }
        else{
            document.querySelector('.skills-icons').style.bottom = -20 + '%';
            document.querySelector('.skills-icons').style.opacity = 0;
        }  
        //section2
        if(destination.index == 2){
            document.querySelector('.responsive-texts').style.opacity = 1;
        }
        else{
            document.querySelector('.responsive-texts').style.opacity = 0;
        } 
        if(destination.index == 3){
            document.querySelector('.social-media').style.bottom = 0 + 'px';
            document.querySelector('.social-media').style.opacity = 1;
        }
        else{
            document.querySelector('.social-media').style.opacity = 0;
            document.querySelector('.social-media').style.bottom = -20 + '%';
        } 
    }
});


const particlesJSON = {
    "particles": {
  "number": {
    "value": 50,
    "density": {
      "enable": true,
      "value_area": 600 // Denser the smaller the number.
    }
  },
  "color": { // The color for every node, not the connecting lines.
    "value": "#fff" // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
  },
  "shape": {
      "type": "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
      "stroke": { // The border
        "width": 1,
        "color": "#fff"
      },
    //   "polygon": { // if the shape is a polygon
    //     "nb_sides": 5
    //   },
    //   "image": { // If the shape is an image
    //     "src": "",
    //     "width": 100,
    //     "height": 100
    //   }
  },
  "opacity": {
    "value": 0.7,
    "random": true
  },
  "size": {
    "value": 1,
    "random": true
  },
//   "line_linked": {
//     "enable": true,
//     "distance": 200, // The radius before a line is added, the lower the number the more lines.
//     "color": "#007ecc",
//     "opacity": 0.5,
//     "width": 2
//   },
  "move": {
    "enable": true,
    "speed": 2,
    "direction": "top", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
    "random": true,
    "straight": false, // Whether they'll shift left and right while moving.
    "out_mode": "out", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
    "bounce": false, 
    // "attract": { // Make them start to clump together while moving.
    //   "enable": true,
    //   "rotateX": 600,
    //   "rotateY": 1200
    // }
  }
}
}
// FOR LOADER
function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 3000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('body', true);
  setVisible('#loading', false);
});
