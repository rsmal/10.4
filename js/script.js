  var carouselData = [{
              text: 'Spain',
              image: 'https://tinyurl.com/ydfh9r2x',
              id: 'carousel-cell1',
              coords: {lat: 40.500652, lng: -5.258251}

          }, {
              text: 'France',
              image: 'https://tinyurl.com/ycpsddow',
              id: 'carousel-cell2',
              coords: {lat: 45.141550, lng: 2.432749}
          }, {
              text: 'Portugal',
              image: 'https://tinyurl.com/y8fahhnp',
              id: 'carousel-cell3',
              coords: {lat: 39.124545, lng: -8.089669}
          }, {
              text: 'Africa',
              image: 'https://tinyurl.com/y8fahhnp',
              id: 'carousel-cell4',
              coords: {lat: 1.578815, lng: 19.495853}
          }, {
              text: 'Norway',
              image: 'https://tinyurl.com/ydfh9r2x',
              id: 'carousel-cell5',
              coords: {lat: 60.806387, lng: 9.438137}
          }];





var templateList = document.getElementById('template-list').innerHTML;
var templateItem = document.getElementById('template-slide').innerHTML;
    Mustache.parse(templateItem);
 
    var listItems = '';
 
    for (var i = 0; i < carouselData.length; i++) {
        console.log(carouselData);
        listItems += Mustache.render(templateItem, carouselData[i]);
    }
 
    var fullProductList = Mustache.render(templateList, {carousel: listItems });
    result.insertAdjacentHTML('beforeend', fullProductList);


// vanilla JS
var flkty = new Flickity( '.carousel', {
  hash: true,
  cellAlign: 'left'
});

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});


(function(){

window.initMap = function() {
    
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: carouselData[0].coords
        });
      

      function addListenerToCurrentMarker(marker, i){
        marker.addListener('click', function(){
            flkty.selectCell(i);
        });
      }    
      
        for (var i = 0; i < carouselData.length; i++ ){

            var marker = new google.maps.Marker({
            position: carouselData[i].coords,
            map: map
            });
          addListenerToCurrentMarker(marker, i);       
        } 


            


        flkty.on('change', function(index) {
        map.panTo(carouselData[index].coords); 
        map.setZoom(10);
});    
};
})(); 