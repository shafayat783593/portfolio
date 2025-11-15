import React, { useRef, useEffect } from 'react';

const DynamicRipple = ({
    children,
    theme = 'blue',
    intensity = 3,
    speed = 3,
    rounded = 'md',
    className = '',
    ...props
}) => {
    const containerRef = useRef(null);

    // Theme colors mapping
    const themeColors = {
        blue: 'rgba(59, 130, 246, 0.3)',
        purple: 'rgba(147, 51, 234, 0.3)',
        green: 'rgba(34, 197, 94, 0.3)',
        amber: 'rgba(245, 158, 11, 0.3)',
        cyan: 'rgba(6, 182, 212, 0.3)'
    };

    // Speed mapping
    const speedValues = {
        1: 1.5,
        2: 1.2,
        3: 1,
        4: 0.8,
        5: 0.6
    };

    // Intensity mapping
    const intensityValues = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5
    };

    // Border radius mapping
    const borderRadius = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full'
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const createRipple = (e) => {
            const ripple = document.createElement('div');
            const rect = container.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: ${themeColors[theme]};
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation ${speedValues[speed]}s ease-out;
        pointer-events: none;
      `;

            // Add intensity
            for (let i = 0; i < intensityValues[intensity]; i++) {
                const delayedRipple = ripple.cloneNode(true);
                delayedRipple.style.animationDelay = `${i * 0.1}s`;
                container.appendChild(delayedRipple);
            }

            // Remove ripples after animation
            setTimeout(() => {
                const ripples = container.querySelectorAll('div[style*="ripple-animation"]');
                ripples.forEach(r => {
                    if (r.parentNode === container) {
                        container.removeChild(r);
                    }
                });
            }, speedValues[speed] * 1000 + intensityValues[intensity] * 100);
        };

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
        document.head.appendChild(style);

        container.addEventListener('mouseenter', createRipple);
        container.addEventListener('mousemove', createRipple);

        return () => {
            container.removeEventListener('mouseenter', createRipple);
            container.removeEventListener('mousemove', createRipple);
            document.head.removeChild(style);
        };
    }, [theme, intensity, speed]);

    return (
        <div
            ref={containerRef}
            className={`
        relative overflow-hidden 
        ${borderRadius[rounded]} 
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default DynamicRipple;