import { useEffect, useRef } from 'react';

export const CursorEffect = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorDotRef.current && cursorTrailRef.current) {
        cursorDotRef.current.style.left = e.clientX + 'px';
        cursorDotRef.current.style.top = e.clientY + 'px';
        
        setTimeout(() => {
          if (cursorTrailRef.current) {
            cursorTrailRef.current.style.left = e.clientX + 'px';
            cursorTrailRef.current.style.top = e.clientY + 'px';
          }
        }, 100);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorTrailRef} className="cursor-trail" />
    </>
  );
};