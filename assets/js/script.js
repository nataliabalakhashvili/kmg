$(document).ready(function(){

	// responsive menu items animation
    var menuItem = $('.resp-nav li').length;
    var res, resActive;
    for(var i = 1; i <= menuItem; i++){
    	res = i / 12 + 0.5; 
    	resActive = menuItem / 12 - i / 12; 
    	console.log('res' + res,'resActive' + resActive )
    	$('.resp-nav li:nth-child(' + i + ') a').css('transition-delay', res + 's');
    }

    // particles top
	particlesJS('particles-top',
  		{
	    "particles": {
	      "number": {
	        "value": 400,
	        "density": {
	          "enable": true,
	          "value_area": 1000
	        }
	      },
	      "color": {
	        "value": "#c6c6c6"
	      },
	      "shape": {
	        "type": "circle",
	        "stroke": {
	          "width": 0,
	          "color": "#000000"
	        },
	        "polygon": {
	          "nb_sides": 6
	        },
	        "image": {
	          "src": "img/github.svg",
	          "width": 100,
	          "height": 100
	        }
	      },
	      "opacity": {
	        "value": 0.8,
	        "random": false,
	        "anim": {
	          "enable": false,
	          "speed": 1,
	          "opacity_min": 0.1,
	          "sync": false
	        }
	      },
	      "size": {
	        "value": 4,
	        "random": true,
	        "anim": {
	          "enable": false,
	          "speed": 100,
	          "size_min": 0.1,
	          "sync": false
	        }
	      },
	      "line_linked": {
	        "enable": true,
	        "distance": 110,
	        "color": "#c6c6c6",
	        "opacity": 0.4,
	        "width": 1
	      },
	      "move": {
	        "enable": true,
	        "speed": 1.5,
	        "direction": "center",
	        "random": false,
	        "straight": false,
	        "out_mode": "out",
	        "attract": {
	          "enable": false,
	          "rotateX": 600,
	          "rotateY": 1200
	        }
	      }
	    },
	    "interactivity": {
	      "detect_on": "canvas",
	      "events": {
	        "onhover": {
	          "enable": true,
	          "mode": "repulse"
	        },
	        "onclick": {
	          "enable": true,
	          "mode": "push"
	        },
	        "resize": true
	      },
	      "modes": {
	        "grab": {
	          "distance": 400,
	          "line_linked": {
	            "opacity": 1
	          }
	        },
	        "bubble": {
	          "distance": 200,
	          "size": 40,
	          "duration": 2,
	          "opacity": 8,
	          "speed": 3
	        },
	        "repulse": {
	          "distance": 200
	        },
	        "push": {
	          "particles_nb": 4
	        },
	        "remove": {
	          "particles_nb": 2
	        }
	      }
	    },
	    "retina_detect": true,
	    "config_demo": {
	      "hide_card": false,
	      "background_color": "#b61924",
	      "background_image": "",
	      "background_position": "50% 50%",
	      "background_repeat": "no-repeat",
	      "background_size": "cover"
	    }
	  }
	);
	

	// particles bottom
	particlesJS('particles-bottom',
  		{
	    "particles": {
	      "number": {
	        "value": 200,
	        "density": {
	          "enable": true,
	          "value_area": 600
	        }
	      },
	      "color": {
	        "value": "#c6c6c6"
	      },
	      "shape": {
	        "type": "circle",
	        "stroke": {
	          "width": 0,
	          "color": "#000000"
	        },
	        "polygon": {
	          "nb_sides": 6
	        },
	        "image": {
	          "src": "img/github.svg",
	          "width": 100,
	          "height": 100
	        }
	      },
	      "opacity": {
	        "value": 0.8,
	        "random": false,
	        "anim": {
	          "enable": false,
	          "speed": 1,
	          "opacity_min": 0.1,
	          "sync": false
	        }
	      },
	      "size": {
	        "value": 4,
	        "random": true,
	        "anim": {
	          "enable": false,
	          "speed": 100,
	          "size_min": 0.1,
	          "sync": false
	        }
	      },
	      "line_linked": {
	        "enable": true,
	        "distance": 110,
	        "color": "#c6c6c6",
	        "opacity": 0.4,
	        "width": 1
	      },
	      "move": {
	        "enable": true,
	        "speed": 1.5,
	        "direction": "center",
	        "random": false,
	        "straight": false,
	        "out_mode": "out",
	        "attract": {
	          "enable": false,
	          "rotateX": 600,
	          "rotateY": 1200
	        }
	      }
	    },
	    "interactivity": {
	      "detect_on": "canvas",
	      "events": {
	        "onhover": {
	          "enable": true,
	          "mode": "repulse"
	        },
	        "onclick": {
	          "enable": true,
	          "mode": "push"
	        },
	        "resize": true
	      },
	      "modes": {
	        "grab": {
	          "distance": 400,
	          "line_linked": {
	            "opacity": 1
	          }
	        },
	        "bubble": {
	          "distance": 200,
	          "size": 40,
	          "duration": 2,
	          "opacity": 8,
	          "speed": 3
	        },
	        "repulse": {
	          "distance": 200
	        },
	        "push": {
	          "particles_nb": 4
	        },
	        "remove": {
	          "particles_nb": 2
	        }
	      }
	    },
	    "retina_detect": true,
	    "config_demo": {
	      "hide_card": false,
	      "background_color": "#b61924",
	      "background_image": "",
	      "background_position": "50% 50%",
	      "background_repeat": "no-repeat",
	      "background_size": "cover"
	    }
	  }
	);

	// animate on scroll
    AOS.init();

    // burgerbar animation 
    $('.burger-bar').on('click',function(){
    	if($('.burger-bar, .responsive-menu, .resp-nav').hasClass('active')){
    		$('.resp-nav').removeClass('active');
    		setTimeout(function(){
    			$('.burger-bar, .responsive-menu').removeClass('active');
    		},1800);
    	} else {
    		$('.burger-bar, .responsive-menu, .resp-nav').addClass('active');
    	}
    });

    // megic line
    setTimeout((function() {
	    var $el, leftPos, newWidth,
	        $mainNav = $("#mainMenu");
	    $mainNav.append("<li id='magic-line'></li>");
	    var $magicLine = $("#magic-line");
	    
	    $magicLine
	        .width($(".current_page_item").width() - 60)
	        .css("left", $(".current_page_item a").position().left + 30)
	        .data("origLeft", $magicLine.position().left)
	        .data("origWidth", $magicLine.width());
	    $("#mainMenu li a").hover(function() {
	        $el = $(this);
	        leftPos = $el.position().left + 30;
	        newWidth = $el.parent().width() - 60;
	        $magicLine.stop().animate({
	            left: leftPos,
	            width: newWidth
	        });
	    }, function() {
	        $magicLine.stop().animate({
	            left: $magicLine.data("origLeft"),
	            width: $magicLine.data("origWidth")
	        });    
	    });
	}),300);

	// partners owl carousel
	$('.partners-content .owl-carousel').owlCarousel({
	    loop:false,
	    margin:80,
	    nav:true,
	    navText: ['<img src="assets/img/arrow-right.svg" style="transform: rotate(180deg)">','<img src="assets/img/arrow-right.svg">'],
	    dots: false,
	    responsive:{
	        0:{
	            items:1.3,
	            loop: true,
	            center: true,
	            margin: 20
	        },
	        600:{
	            items:2
	        }
	    }
	});

	$('.partners-content .image, .partners-content .name, .partners-content .info').on('click', function(){
		$('.partners-popup').addClass('active');
		$('header, .burger-bar, footer').addClass('z-index-low');
	});
	$('.each-cont').on('click', function(){
		var thisImg = $(this).attr('data-img');
		var thisTitle = $(this).attr('data-title');
		var thisUrl = $(this).attr('data-url');
		var thisDesc = $(this).attr('data-description');
		$('.influential-popup').addClass('active');
		$('.influential-popup-img').css('background-image','url(' + thisImg + ')');
		$('.influential-popup-title').text(thisTitle);
		$('.influential-popup-description').text(thisDesc);
		$('.influential-popup-url').text(thisUrl);
		$('header, .burger-bar, footer').addClass('z-index-low');
	});
	$('.collapsible').collapsible();

	$('.each-expertise a').on('click', function(){
		$('.expertises-popup').addClass('active');
		$('header, .burger-bar, footer').addClass('z-index-low');
	});
	$('.popup .close').on('click', function(){
		$('header, .burger-bar, footer').removeClass('z-index-low');
		$(this).parents().parents('.popup').removeClass('active');
	});
	$('.popup-after').on('click', function(){
		$('header, .burger-bar, footer').removeClass('z-index-low');
		$('.popup').removeClass('active');
	});

	// var delay = 0;
	// $(".partner-country").each(function(){
	// 	var th = $(this);
	// 	setTimeout(function(){
	// 		th.attr("class","partner-country active");
	// 	},delay);
	// 	delay += 200;
	// })

	$('.tooltipped').tooltip({delay: 0});
});
