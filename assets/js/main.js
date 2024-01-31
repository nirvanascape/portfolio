

$(function(){


    //gsap
    gsap.registerPlugin(ScrollTrigger); 

    ScrollTrigger.matchMedia({
        '(min-width:500px)':function(){
            //section-1 top title animation
            const tl1 = gsap.timeline({
                scrollTrigger: {
                trigger : '.top-title',
                start : '0% 2%', 
                end : '50%',
                scrub : 1,
                //markers : true
                }
            })

            tl1
            .fromTo('.text-ani-title', { marginTop:'5%', marginBottom:'8%' }, 
            { marginTop: 0, marginBottom:0 })
            .fromTo('.text-ani-title a', { width: '60%'},
            { width: '8%', minWidth:'120px'})
            
        },

        '(min-width: 1001px)' : function(){
            //section-1 scroll slide
            const list = gsap.utils.toArray('.section-1 .main-project-container ul li');
            const scrollTween = gsap.to(list, {
                xPercent: -100 * (list.length - 1),
                ease:'none',
                scrollTrigger: {
                    trigger:'.section-1',
                    pin:true,
                    scrub:1,
                    start:'center center',
                    end:'300%',
                    //markers : true
                }
            })
        }

    })

    //section-3 text animation
        let tl2 = gsap.timeline({
            // ease:'none',
            scrollTrigger: {
                trigger : '.section-3',
                pin: true,
                start : 'top top',
                end : '+=100%',
                scrub : 1,
                //markers : true
            }
        })
    
        let durationText = 5;
        tl2
        .addLabel('a')
        .to('.wrapper', {duration:durationText, backgroundColor : '#222', ease:'none'})
        .from('.overlay .text-html, .overlay .text-css, .overlay .text-javascript, .overlay .text-jquery, .overlay .text-scss, .overlay .text-blender', {duration:durationText, opacity:0, xPercent:'-100', ease:'none'})
        .from('.overlay .text-photoshop, .overlay .text-animate, .overlay .text-illustrator, .overlay .text-xd', {duration:durationText, opacity:0, xPercent:'100', ease:'none'})
        .from('.overlay .text-figma, .overlay .text-github, .overlay .text-zeplin', {duration:durationText, opacity:0, xPercent:'-100', ease:'none'})
    
        .addLabel('b')
        .from('.slide-up .text-html, .slide-up .text-css, .slide-up .text-javascript', {duration:durationText, opacity:0, yPercent:'100', ease:'none'})
        .from('.slide-up .text-jquery, .slide-up .text-scss, .slide-up .text-blender', {duration:durationText, opacity:0, yPercent:'100', ease:'none'})
        .from('.slide-up .text-photoshop, .slide-up .text-animate', {duration:durationText, opacity:0, yPercent:'100', ease:'none'})
        .from('.slide-up .text-illustrator, .slide-up .text-xd', {duration:durationText, opacity:0, yPercent:'100', ease:'none'})
        .from('.slide-up .text-figma, .slide-up .text-github, .slide-up .text-zeplin', {duration:durationText, opacity:0, yPercent:'100', ease:'none'})
    
        .addLabel('c')
        .from('.img-arrow', {duration:durationText, opacity:0, yPercent:'-120', ease:'none'})
        .from('.text-brackets', {duration:durationText, opacity:0, xPercent:'100', ease:'none'})
        .from('.text-and', {duration:durationText, opacity:0, yPercent:'100', ease:'none'})
    
        .addLabel('d')
        .to('.text-photoshop em img', {duration:durationText, opacity:1})
     


    //modal-popup
    $('.btn-open').each(function() {
		var modalID = $(this).attr('href');
		var modalBg = $('.modal-bg');
	
		$(this).on('click', function(e) {
            $('img[usemap]').rwdImageMaps(); //image map plugIn
			e.preventDefault();
			$(modalID).css({display: 'block'});
            $(modalID).scrollTop(0);
            $('body').css({overflow: 'hidden'});

		});

		$('.modal-close').on('click', function() {
			modalBg.fadeOut();
			$(modalID).css({display: 'none'});
			$('body').css({overflowY: 'auto'},{overflowX: 'hidden'});
		});
	});

    //top이동
    $(".modal-top").on("click",function(){
        $('.modal-bg').animate({
        scrollTop : 0
        },400)
        return false;
        });


    //swiper
    var ww = $(window).width();
    var mySwiper0 = undefined;
    function initSwiper0() {
        if (ww < 1000 && mySwiper0 == undefined) {
            mySwiper0 = new Swiper(".swiper0", {
            slidesPerView: 1,
            spaceBetween: 0,
            });
        } else if (ww >= 1000 && mySwiper0 != undefined) {
            mySwiper0.destroy();
            mySwiper0 = undefined;
        }
    }
    initSwiper0();

    var mySwiper1 = undefined;
    function initSwiper1() {
        if (ww < 1800 && mySwiper1 == undefined) {
            mySwiper1 = new Swiper(".swiper1", {
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    500: {
                      slidesPerView: 2.5,  
                      spaceBetween: 20,
                    },
                    1000: {
                      slidesPerView: 3.5,  
                      spaceBetween: 24,
                    },
                    1340: {
                        slidesPerView: 4,  
                        spaceBetween: 24,
                      },
                  },
            });
        } else if (ww >= 1800 && mySwiper1 != undefined) {
            mySwiper1.destroy();
            mySwiper1 = undefined;
        }
    }
    initSwiper1();

    var mySwiper2 = undefined;
    function initSwiper2() {
        if (ww < 1800 && mySwiper2 == undefined) {
            mySwiper2 = new Swiper(".swiper2", {
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    500: {
                      slidesPerView: 2.5,  
                      spaceBetween: 20,
                    },
                    1000: {
                      slidesPerView: 3.5,  
                      spaceBetween: 24,
                    },
                    1340: {
                        slidesPerView: 4,  
                        spaceBetween: 24,
                      },
                  },
            });
        } else if (ww >= 1800 && mySwiper2 != undefined) {
            mySwiper2.destroy();
            mySwiper2 = undefined;
        }
    }
    initSwiper2();

    var mySwiper3 = undefined;
    function initSwiper3() {
        if (ww < 1800 && mySwiper3 == undefined) {
            mySwiper3 = new Swiper(".swiper3", {
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    500: {
                      slidesPerView: 2.5, 
                      spaceBetween: 20,
                    },
                    1000: {
                      slidesPerView: 3.5,  
                      spaceBetween: 24,
                    },
                    1340: {
                        slidesPerView: 4,  
                        spaceBetween: 24,
                      },
                  },
            });
        } else if (ww >= 1800 && mySwiper3 != undefined) {
            mySwiper3.destroy();
            mySwiper3 = undefined;
        }
    }
    initSwiper3();


    $(window).on('resize', function () {
        ww = $(window).width();
        flowHeight = $(".flow-container").height();
        imgHeight = $("h1 img").height();
        initSwiper0();
        initSwiper1();
        initSwiper2();
        initSwiper3();
    });

})




