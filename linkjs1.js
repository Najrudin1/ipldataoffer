 var STRONG = {
    share: 10
  };

  function shared(p){   
    ga('send', 'event', 'Youtube', 'Share ' + p, 'Converted');
  }
      
    function incrementValue()
      {
        var value = parseInt(document.getElementById('number').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        shared(value);
        document.getElementById('number').value = value;
    
       

if(value < STRONG.share){

 window.open("whatsapp://send?text=*Free%2050Gb%20Internet%20Data%20Pack*%0A%20%0A*Get%2050GB%20free%20internet%20data%20in%20any%20network%20for%2060 Days.%20Get%20now*%0A%20%0A*1.%20Link-1*%0Ahttps://www.2022offer.xyz/%0A%20%0A*2.%20Link-2*%0Ahttps://www.2022offer.xyz/%0A%20%0A*3.%20Link-3*%0Ahttps://www.2022offer.xyz/%0A%20%0A*4.%20Link-4*%0Ahttps://www.2022offer.xyz/%0A%20%0A*Link-5*%0Ahttps://www.2022offer.xyz/%0A%20%0A*Try%20once*", "_blank");

}
        if(value>= STRONG.share){
           setTimeout(function () { 
           window.scrollBy({
                 top: 1000,
            behavior: "smooth"

            }); 
             
              setTimeout(function () {
               $(".fbcoms").hide(1000);
                setTimeout(function () {
                $(".last_page").hide(1000);
                 setTimeout(function () {
              $(".captcha1").show(1000);

             setTimeout(function () {

                window.scrollBy({
                 top: 500,
            behavior: "smooth"
               }); 
                    }, 1010);
                  }, 1600);     
               }, 1500);
             }, 1200);
            }, 300);
          
         
      
      
     
        }

        else{
      //alert("you shared "+value+" Friend.you have to share 12 friend!");
        }
    
    
      }
    
function fn1() {
  STRONG.count = true;
  var value = parseInt(document.getElementById('number').value, 10);
  value = value + 1;  
  document.querySelector('.progress').style.display = "block";
  var inicio = 100;
  var divisor = STRONG.share;
  var porsiento = inicio / divisor;
  var estatico = porsiento;
  var obtenido = parseInt(estatico * value);
  document.querySelector('.progress span').style['width'] = obtenido + "%";
  document.querySelector('.progress span').style['width'] = obtenido + "%";

}