// components/TypingEffect.js
"use client";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypingEffect() {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['برنامه نویس و طراح سایت', 'طراحی رابط کاربری و تجربه کاربری جذاب  ', 'توسعه‌دهنده React, Next.js', 'مهندس و توسعه دهند نرم افزار'],
      typeSpeed:60,
      backSpeed: 30,
      backDelay: 1400,
      startDelay: 500,
      loop: true
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span className="text-2xl" ref={el}></span>
  );
}

export default TypingEffect;
