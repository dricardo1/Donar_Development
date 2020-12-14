const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".large-text", { y: "0%", duration: .5, stagger: 0.25 });
tl.to(".work-text", { y: "0%", duration: .5, stagger: 0.25 });
tl.to(".intro", { y: "-100%", duration: .5 } );
tl.fromTo(".accent-text", { opacity: 0 }, { opacity: 1, duration: .5 });
tl.fromTo(".btn-work", { opacity: 0 }, { opacity: 1, duration: .75 });
