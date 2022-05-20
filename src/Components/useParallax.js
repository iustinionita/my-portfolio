import { useEffect } from "react";

function useParallax() {
  const parallax = () => {
    const elements = document.querySelectorAll(".parallax");
    const scrollY = window.pageYOffset;
    console.log(scrollY);
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

// CODE FOR IN-COMPONENT DECLARED FUNCTION

// const parallax = () => {
//   const elements = document.querySelectorAll(".parallax");
//   elements.forEach((element) => {
//     element.style.cssText = `transform: translateY(${window.pageYOffset * element.dataset.rate}px)`;
//     console.log(`${window.pageYOffset * element.dataset.rate}px`);
//   });
// }

// useEffect(() => {
//   window.addEventListener("scroll", useParallax);

//   return () => window.removeEventListener("scroll", useParallax);
// }, []);
