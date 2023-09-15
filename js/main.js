
    
    $('.intro-item-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__zoomIn',
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    $('.skill-item-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplay: true,
        margin: 30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });


    $('.my-work-item-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__zoomIn',
        smartSpeed: 1000,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    // Start Typewriter Effect
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    // End Typewriter Effect

    // Start Animation
    wow = new WOW(
    {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
    })
    wow.init();
    // End Animation


