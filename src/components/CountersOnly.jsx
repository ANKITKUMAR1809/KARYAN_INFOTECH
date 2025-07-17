import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ target, suffix = "", title }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ count: target });
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);
    }
  }, [inView, controls, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-blue-950">
        {count}{suffix}
      </div>
      <p className="text-sm text-blue-950 mt-1">{title}</p>
    </div>
  );
};

const CountersOnly = () => {
  return (
    <section className="w-full py-20 px-6 md:px-24 bg-orange-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Counter target={2000} suffix="+" title="Project Completed" />
        <Counter target={1000} suffix="+" title="Winning Awards" />
        <Counter target={95} suffix="%" title="Satisfied Customers" />
        <Counter target={9} suffix="+" title="Years Experience" />
      </div>
    </section>
  );
};

export default CountersOnly;
