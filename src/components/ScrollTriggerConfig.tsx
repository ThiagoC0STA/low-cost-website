'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollTriggerConfig() {
  useEffect(() => {
    ScrollTrigger.config({ limitCallbacks: true });
  }, []);
  return null;
}
