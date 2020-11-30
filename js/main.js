const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".intro-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".intro", { y: "-100%", duration: .75 });
tl.fromTo(".heading-text", { opacity: 0 }, { opacity: 1, duration: .5 });
tl.fromTo(".first", { opacity: 0 }, { opacity: 1, duration: .25 });
tl.fromTo(".second", { opacity: 0 }, { opacity: 1, duration: .25 });
tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: .25 });


