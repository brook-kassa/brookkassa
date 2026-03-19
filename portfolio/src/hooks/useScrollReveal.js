import { useEffect, useRef } from 'react';

/**
 * Intersection Observer hook for scroll-reveal animations.
 * Returns a ref to attach to the container element.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition =
              'opacity 600ms cubic-bezier(0.4,0,0.2,1), transform 600ms cubic-bezier(0.4,0,0.2,1)';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );

    // Observe immediate children with reveal-hidden class
    const targets = el.querySelectorAll('.reveal-hidden');
    targets.forEach((t, i) => {
      t.style.transitionDelay = `${i * 80}ms`;
      observer.observe(t);
    });

    // Also observe the el itself if it has the class
    if (el.classList.contains('reveal-hidden')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useMousePosition() {
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => {
      position.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return position;
}
