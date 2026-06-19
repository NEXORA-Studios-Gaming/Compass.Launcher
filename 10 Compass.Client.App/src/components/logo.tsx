import React, { useMemo } from "react";

interface LogoProps {
    whiteColor?: string;
    secondColor?: string;
    width?: number;
    height?: number;
    className?: string;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (n: number) => {
        const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function mixColors(color1: string, color2: string, ratio: number): string {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    if (!rgb1 || !rgb2) return color1;

    const r = rgb1.r * (1 - ratio) + rgb2.r * ratio;
    const g = rgb1.g * (1 - ratio) + rgb2.g * ratio;
    const b = rgb1.b * (1 - ratio) + rgb2.b * ratio;

    return rgbToHex(r, g, b);
}

export const Logo: React.FC<LogoProps> = ({
    whiteColor = "#F5F9FF",
    secondColor = "#FF0000",
    width = 372,
    height = 372,
    className = "",
}) => {
    const gradientId = useMemo(() => `logo-gradient-${Math.random().toString(36).substr(2, 9)}`, []);

    const mixedColor = useMemo(() => mixColors(secondColor, whiteColor, 0.05), [whiteColor, secondColor]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 372 372"
            fill="none"
            className={className}>
            <path
                d="M186.5 16L35 190L187 355.5L338 190L186.5 16ZM186.5 40.5L68 190L187 340L305.5 190L186.5 40.5Z"
                fillRule="evenodd"
                fill={whiteColor}
            />

            <path d="M186.5 60.5L133.5 205.5L187 173.5L239.5 205.5L186.5 60.5Z" fill={`url(#${gradientId})`} />

            <path d="M186.5 194L186.5 329L146 218.41L186.5 194Z" fill={whiteColor} />

            <path d="M186.5 194L186.5 329L227 218.41L186.5 194Z" fill={whiteColor} opacity="0.85" />

            <defs>
                <linearGradient
                    id={gradientId}
                    x1="187.48049926757812"
                    y1="60.5"
                    x2="187.48049926757812"
                    y2="171.18719482421875"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor={mixedColor} />
                    <stop offset="1" stopColor={whiteColor} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Logo;
