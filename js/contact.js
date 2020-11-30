const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".intro-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".contact-text", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".contact-main-section", { opacity: 0 }, { opacity: 1, duration: .15 });
tl.fromTo(".accent-text", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".medic-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");