import { useEffect, useRef } from 'react';

/**
 * Adds a "visible" class when the element enters the viewport.
 * Also reveals all child elements with the "fade-in" class.
 */
function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.fade-in').forEach((el) => {
            el.classList.add('visible');
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

export default useScrollAnimation;
