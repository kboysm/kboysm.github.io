(function () {

    let controller = new ScrollMagic.Controller();
    let sectionOneOpacity = document.querySelector('.one');

    let wipeAnimation = new TimelineMax()
        // animate to second
        .to("#slideContainer", 1, { z: -500, opacity: 0, ease: Linear.ease })
        .to("#slideContainer", 1, { x: "-25%" })
        .to("#slideContainer", 1, { z: 0, opacity: 1, ease: Linear.ease, height: "100%" })
        // animate to third
        .to("#slideContainer", 1, { z: -500, delay: 0.6, opacity: 0, ease: Linear.ease })
        .to("#slideContainer", 1, { x: "-50%" })
        .to("#slideContainer", 1, { z: 0, opacity: 1, ease: Linear.ease, height: "100%" })
        // animate to forth
        .to("#slideContainer", 1, { z: -500, delay: 0.6, opacity: 0, ease: Linear.ease })
        .to("#slideContainer", 1, { x: "-75%" })
        .to("#slideContainer", 1, { z: 0, opacity: 1, ease: Linear.ease, height: "100%" })


    let scene = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: 0,
        duration: "200%" //이 값이 클 수록 천천히 덮어씀
    }).setTween(".one", 1, { opacity: 0, height: "100%" }) // trigger a TweenMax.to tween
        .setTween(".two", 1, { height: "100%" })
        .setTween(".three", 1, { height: "100%" })
        .setTween(".four", 1, { height: "100%" })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);

    setTimeout(() => {
        sectionOneOpacity.style.opacity = 1;
        sectionOneOpacity.style.transition = '.6s';

    }, 1000)


}())
