const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".intro-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".intro", { y: "-100%", duration: .75, delay: .25});
tl.fromTo(".contact-text", { opacity: 0 }, { opacity: 1, duration: .75 });
tl.fromTo(".contact-main-section", { opacity: 0 }, { opacity: 1, duration: .25 }, "-=1");
tl.fromTo(".accent-text", { opacity: 0 }, { opacity: 1, duration: .5 });
tl.fromTo(".medic-text", { opacity: 0 }, { opacity: 1, duration: .25 }, "-=1");
tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: .75 }, "-=1");