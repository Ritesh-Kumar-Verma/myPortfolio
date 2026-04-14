
import React, { useEffect } from 'react';

const CursorLight = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="fixed inset-0 pointer-events-none z-0 
  [background:radial-gradient(80vh_circle_at_var(--x,_50%)_var(--y,_50%),rgba(12,104,179,0.2),transparent_80%)]
  transition-[background] duration-100 ease-linear">
</div>

};

export default CursorLight;
