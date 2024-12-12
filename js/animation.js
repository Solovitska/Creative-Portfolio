document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.to(".header-container", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  })
    .to(
      ".logo",
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.6"
    )
    .to(
      ".header-buttons",
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.6"
    )
    .to(
      "nav ul li",
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .to(
      ".hero-wrapper-title",
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.15"
    )
   
});
