document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Generate random bright color
    function getRandomColor() {
        return `hsl(${Math.random() * 360}, 70%, 60%)`;
    }
    
    // Change all box colors
    function changeColors() {
        gsap.to(".color-box", {
            backgroundColor: () => getRandomColor(),
            duration: 1,
            stagger: 0.1,
            ease: "power2.inOut"
        });
    }
    
    // 1. Individual Box Animations
    const box1Anim = gsap.to("#box1", {
        x: 200,
        rotation: 360,
        scale: 1.2,
        duration: 2,
        paused: true,
        ease: "elastic.out(1, 0.5)"
    });
    
    const box2Anim = gsap.to("#box2", {
        y: -100,
        borderRadius: "50%",
        duration: 1.5,
        paused: true,
        ease: "bounce.out"
    });
    
    // 2. Timeline Animation
    const box3Timeline = gsap.timeline({ paused: true });
    box3Timeline.to("#box3", { 
            x: -150,
            duration: 1
        })
        .to("#box3", {
            rotation: -180,
            duration: 0.8
        }, "-=0.5")
        .to("#box3", {
            scale: 1.5,
            duration: 0.5
        });
    
    // 3. ScrollTrigger Animation
    gsap.to("#box4", {
        rotation: 720,
        scrollTrigger: {
            trigger: "#box4",
            start: "top 80%",
            end: "top 30%",
            scrub: 2,
            markers: true
        }
    });
    
    // 4. Stagger Animation (all boxes)
    const staggerAnim = gsap.to(".color-box", {
        y: () => gsap.utils.random(-50, 50),
        x: () => gsap.utils.random(-50, 50),
        duration: 1,
        stagger: 0.2,
        ease: "back.out",
        paused: true
    });
    
    // 5. Click Animation
    document.querySelectorAll('.color-box').forEach(box => {
        box.addEventListener('click', function() {
            gsap.to(this, {
                scale: 0.8,
                duration: 0.2,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });
            
            // Change color on click
            gsap.to(this, {
                backgroundColor: getRandomColor(),
                duration: 0.5
            });
        });
    });
    
    // 6. Random Effects Function
    function applyRandomEffects() {
        const effects = [
            () => gsap.to(".color-box", { 
                rotation: () => gsap.utils.random(-360, 360),
                duration: 2,
                stagger: 0.1,
                ease: "elastic.out(1, 0.3)"
            }),
            () => gsap.to(".color-box", {
                scale: () => gsap.utils.random(0.5, 1.5),
                borderRadius: () => `${gsap.utils.random(0, 50)}%`,
                duration: 1.5,
                stagger: 0.1
            }),
            () => gsap.from(".color-box", {
                opacity: 0,
                y: () => gsap.utils.random(100, 300),
                duration: 1,
                stagger: 0.2,
                ease: "back.out"
            }),
            () => gsap.to(".color-box", {
                x: () => gsap.utils.random(-200, 200),
                y: () => gsap.utils.random(-100, 100),
                duration: 1.5,
                stagger: {
                    each: 0.1,
                    from: "random"
                }
            })
        ];
        
        const randomEffect = effects[Math.floor(Math.random() * effects.length)];
        randomEffect();
    }
    
    // Control buttons
    document.getElementById("playAll").addEventListener("click", () => {
        box1Anim.play();
        box2Anim.play();
        box3Timeline.play();
        staggerAnim.play();
    });
    
    document.getElementById("reverseAll").addEventListener("click", () => {
        box1Anim.reverse();
        box2Anim.reverse();
        box3Timeline.reverse();
        staggerAnim.reverse();
    });
    
    document.getElementById("restartAll").addEventListener("click", () => {
        box1Anim.restart();
        box2Anim.restart();
        box3Timeline.restart();
        staggerAnim.restart();
    });
    
    document.getElementById("randomEffects").addEventListener("click", applyRandomEffects);
    document.getElementById("colorChange").addEventListener("click", changeColors);
    
    // Initial animation on page load
    gsap.from(".color-box", {
        scale: 0,
        rotation: 180,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: "back.out"
    });
});
