const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".intro-text", { y: "0%", duration: 1.5, stagger: .15 });
tl.to(".intro", { y: "-999%", duration: .5, delay: .5, opacity: 0 });
tl.fromTo(".heading-text", { opacity: 0 }, { opacity: 1, duration: .5 });
tl.fromTo(".first", { opacity: 0 }, { opacity: 1, duration: .25 }, "-=.25");
tl.fromTo(".second", { opacity: 0 }, { opacity: 1, duration: .25 }, "-=.15");
tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: .25 });


