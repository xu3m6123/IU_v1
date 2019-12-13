'use strict';




$(function(){

    //configuration
    //var width=$('.main_img').css('width');
    var animationSpeed=1000;
    var listSpeed=500;
    var pause=3000;
    var currentSlide=1;
    //cache DOM
    var $slider =$('#main_img_bar');
    var $sliderContainer=$slider.find('.main_img_bar_slides');
    var $slides =$sliderContainer.find('.slide');

    var interval;

    function startSlide(){
         interval = setInterval(function(){//setInterval是計時器，功能為每一段時間做一次事件，循環不斷
            $sliderContainer.animate({'margin-left':'-='+$('.main_img').css('width')},animationSpeed, function(){currentSlide++;
                if(currentSlide === 2){
                    $('#img_circle1').toggleClass('showin');
                    $('#img_circle2').toggleClass('showin');
                }
                if(currentSlide === 3){
                    $('#img_circle2').toggleClass('showin');
                    $('#img_circle3').toggleClass('showin');
                }
                if(currentSlide === 4){
                    $('#img_circle3').toggleClass('showin');
                    $('#img_circle4').toggleClass('showin');
                }
                if(currentSlide === 5){
                    $('#img_circle4').toggleClass('showin');
                    $('#img_circle5').toggleClass('showin');
                }
            if(currentSlide === $slides.length){
                currentSlide=1;
                $sliderContainer.css('margin-left',0);
                $('#img_circle5').toggleClass('showin');
                    $('#img_circle1').toggleClass('showin');
            };});//參考參數$(selector).animate(obj, time, callback)
            //console.log(new Date());檢查回傳速度，與最後數字有關
        },pause);
    }
    function pauseSlide(){
        clearInterval(interval);
    }
    
    $slider.on('mouseenter',pauseSlide).on('mouseleave',startSlide);

    startSlide();
    //setInterval
    //animate margin-left
    //if it's last slide, go to position 1 (0px);
    
    //listen for mouseenter and pause
    //resume on mouseleave
    $('#list_btn').click(function(){
        if($('.first_nav').hasClass('haveback')!=true){
            $('.first_nav').addClass('haveback');
            $('.first_nav').addClass('canback');
        }
        if($('.first_nav').hasClass('canback')==true){//增加
            $('.first_nav').addClass('goback');
            $('.first_nav').addClass('first_nav_show');
            $('.first_nav').removeClass('first_nav_hide');
        }
        if($('#form').hasClass('searchgoback')==true){//回去
            $('#form').addClass('form_hide');
            $('#form').removeClass('form_show');
            $('#form').removeClass('searchgoback');
            $('#form').removeClass('searchhaveback'); 
        }
    });
    $('body').mouseup(function(){
        if($('.first_nav').hasClass('goback')==true){//回去
            $('.first_nav').addClass('first_nav_hide');
            $('.first_nav').removeClass('first_nav_show');
            $('.first_nav').removeClass('goback');
            $('.first_nav').removeClass('haveback'); 
        }
    });//以上list

    $('#search_btn_show').click(function(){
        if($('#form').hasClass('searchhaveback')!=true){
            $('#form').addClass('searchhaveback');
            $('#form').addClass('searchcanback');
        }
        if($('#form').hasClass('searchcanback')==true){//增加
            $('#form').addClass('searchgoback');
            $('#form').addClass('form_show');
            $('#form').removeClass('form_hide');
        }
    });
    $('div:not(#form)').click(function(){//$('屬性:not(claa or id)')指選擇屬性除了有claa or id的屬性物件
        if($('#form').hasClass('searchgoback')==true){//回去
            $('#form').addClass('form_hide');
            $('#form').removeClass('form_show');
            $('#form').removeClass('searchgoback');
            $('#form').removeClass('searchhaveback'); 
        }
    });//以上sreach
});
