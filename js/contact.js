const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(".contact-text", { opacity: 0 }, { opacity: 1, duration: .75 });
tl.fromTo(".contact-form", { opacity: 0 }, { opacity: 1, duration: .5 });
tl.fromTo(".accent-text", { opacity: 0 }, { opacity: 1, duration: .5 });
tl.fromTo(".medic-text", { opacity: 0 }, { opacity: 1, duration: .25 }, "-=1");
tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: .5 }, "-=.75");