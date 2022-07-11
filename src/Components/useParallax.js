import { useEffect } from "react";

function useParallax() {
  const parallax = () => {
    const elements = document.querySelectorAll(".parallax");
    const scrollY = window.pageYOffset;
    elements.forEach((element) => {
      const startPoint = element.dataset.start;
      const endPoint = element.dataset.end;
      if (startPoint <= scrollY && endPoint >= scrollY) {
        if (element.dataset.direction === "horizontal") {
          element.style.cssText = `transform: translateX(${
            (scrollY - startPoint) * element.dataset.rate
          }px)`;
        } else if(element.dataset.direction === "vertical"){
          element.style.cssText = `transform: translateY(${
            (scrollY - startPoint) * element.dataset.rate
          }px)`;
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", parallax);

    return () => window.removeEventListener("scroll", parallax);
  }, []);
}

export default useParallax;
