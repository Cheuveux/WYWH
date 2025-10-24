import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";


gsap.registerPlugin(Draggable);

export function providerCard() {
    Draggable.create(".provider-card", {
    type: "x,y",
    edgeResistance: 0.85,
    iinertia: true,
    bounds: window,
    onPress() {
        gsap.to(this.target, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
            opacity : 1,
        });
    },
    onRelease() {
  const rect = this.target.getBoundingClientRect();
  const cardHeight = rect.height;
  const targetY = window.innerHeight - cardHeight - 10; // 10px de marge
  const currentY = gsap.getProperty(this.target, "y"); // position actuelle transform
  const fallDistance = targetY - rect.top;

  gsap.to(this.target, {
    y: currentY + fallDistance,
    rotation: gsap.utils.random(-10, 10),
    scale: 0.8,
    duration: 1.2,
    opacity : 0.7,
    ease: "power3.in",
    onComplete: () => {
      gsap.to(this.target, {
        y: "+=1",
        duration: 0.3,
        ease: "bounce.out",
      });
    }
  });
},
    onDrag()
    {
        gsap.to(this.target, {
            rotation: this.x / 50,
            duration: 0.1,
            opacity : 1,
        });
    }

});
}