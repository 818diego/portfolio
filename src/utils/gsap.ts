import { useEffect, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

function ensureRegistered(): void {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'power3.out', duration: 0.8 });
  registered = true;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

type ScopeFn = () => void | (() => void);

export function useGsapScope(fn: ScopeFn, scope?: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    ensureRegistered();
    const ctx = gsap.context(fn, scope?.current ?? undefined);
    ScrollTrigger.refresh();
    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope]);
}

export type FadeUpOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
};

export function fadeUp(target: gsap.DOMTarget, opts: FadeUpOptions = {}): gsap.core.Tween {
  ensureRegistered();
  const { y = 30, duration, delay = 0, stagger = 0, start = 'top 85%' } = opts;
  if (prefersReducedMotion()) {
    return gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.01, delay, stagger });
  }
  return gsap.from(target, {
    y,
    opacity: 0,
    duration: duration ?? 0.8,
    delay,
    stagger,
    scrollTrigger: { trigger: target, start, toggleActions: 'play none none none' }
  });
}

export type StaggerRevealOptions = {
  y?: number;
  x?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
  start?: string;
};

export function staggerReveal(target: gsap.DOMTarget, opts: StaggerRevealOptions = {}): gsap.core.Tween {
  ensureRegistered();
  const { y = 24, x = 0, stagger = 0.1, duration, delay = 0, start = 'top 85%' } = opts;
  if (prefersReducedMotion()) {
    return gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.01, delay, stagger });
  }
  return gsap.from(target, {
    x,
    y,
    opacity: 0,
    duration: duration ?? 0.7,
    delay,
    stagger,
    scrollTrigger: { trigger: target, start, toggleActions: 'play none none none' }
  });
}

export type SlideInXOptions = {
  x?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
};

export function slideInX(target: gsap.DOMTarget, direction: 'left' | 'right', opts: SlideInXOptions = {}): gsap.core.Tween {
  ensureRegistered();
  const { x = 40, duration, delay = 0, stagger = 0, start = 'top 85%' } = opts;
  if (prefersReducedMotion()) {
    return gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.01, delay, stagger });
  }
  const fromX = direction === 'left' ? -x : x;
  return gsap.from(target, {
    x: fromX,
    opacity: 0,
    duration: duration ?? 0.8,
    delay,
    stagger,
    scrollTrigger: { trigger: target, start, toggleActions: 'play none none none' }
  });
}

export type ScaleInOptions = {
  scale?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
};

export function scaleIn(target: gsap.DOMTarget, opts: ScaleInOptions = {}): gsap.core.Tween {
  ensureRegistered();
  const { scale = 0.92, duration, delay = 0, stagger = 0, start = 'top 85%' } = opts;
  if (prefersReducedMotion()) {
    return gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.01, delay, stagger });
  }
  return gsap.from(target, {
    scale,
    opacity: 0,
    duration: duration ?? 0.7,
    delay,
    stagger,
    scrollTrigger: { trigger: target, start, toggleActions: 'play none none none' }
  });
}

export function instantShow(target: gsap.DOMTarget): void {
  ensureRegistered();
  gsap.set(target, { opacity: 1, x: 0, y: 0, scale: 1 });
}