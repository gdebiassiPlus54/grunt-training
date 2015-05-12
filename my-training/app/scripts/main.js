var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/photos/',
  method: 'GET'
}).then(function(images) {  

 

  $.each(images.slice(0,6), function(i, data) {


      mostrarBlock();
             



    function mostrarBlock(){
      $(".content-blocks").append(' <div class="large-4 columns">' +
                                      '<img src="'+images[i].url+'"/>'+
                                      '<h4>'+images[i].title+'</h4>'+
                                   '</div>'+'');
      }


    });

});