var createCarousel = function (slidesCount) {
    
    var count = slidesCount;
    var carousel = document.querySelector('#carousel');
    
    carousel.appendChild(document.createElement('ul')).setAttribute('class', 'slides');
    var slides = carousel.querySelector('.slides');
    carousel.appendChild(document.createElement('div')).setAttribute('class', 'indicators');
    var indicators = carousel.querySelector('.indicators');
    carousel.appendChild(document.createElement('div')).setAttribute('class', 'controls');
    var  controls = carousel.querySelector('.controls');

    var style = carousel.insertBefore(document.createElement('style'), slides);
    
    style.innerHTML = '.slides { position: relative } .controls { position: relative } .indicators { display: flex }'

    for (i = 1; i <= count; i++) {
        
        var slide = slides.appendChild(document.createElement('li'));
        slide.setAttribute('class','slides__item');
        slide.appendChild(document.createElement('a')).setAttribute('href', '#');
        
        var indicator = indicators.appendChild(document.createElement('span'));
        indicator.setAttribute('class', 'indicators__item');
        indicator.setAttribute('data-slide-to', i-1);
        indicator.innerHTML = 'some indicator';

        if (i === 1) {
            slide.classList.add('active');
            indicator.classList.add('active');
        }
    }

    

    for (c = 0; c < 3; c++) {
        
        var control = controls.appendChild(document.createElement('div'));
            control.setAttribute('class','controls__item');
        
        switch(c) {
            case 0:
                control.classList.add('controls__prev');
                control.appendChild(document.createElement('i')).className = 'fas fa-chevron-left';
                break;
            case 1:
                control.classList.add('controls__next');
                control.appendChild(document.createElement('i')).className = 'fas fa-chevron-right';
                break;
            case 2:
                control.classList.add('controls__pause');
                control.appendChild(document.createElement('i')).className = 'fas fa-play';
                break;
        }
    }

    var pointer = null;

    carousel.addEventListener('click', function(e){
        var target = e.target;
        
        if(target.classList.contains('indicators__item')) {
            target.style.color = 'red'; 

            if (pointer !== null) {
                pointer.removeAttribute('style');
            }
            pointer = target;
        }
    });

};

createCarousel(5);