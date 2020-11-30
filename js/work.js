const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.to(".large-text", { y: "0%", duration: .5 });
tl.to(".intro-text", { y: "0%", duration: .5, stagger: 0.25 });
tl.to(".work-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 1.25 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".heading-text", { opacity: 0 }, { opacity: 1, duration: .5 });
tl.fromTo(".accent-text", { opacity: 0 }, { opacity: 1, duration: .25 });
tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: .15 });
