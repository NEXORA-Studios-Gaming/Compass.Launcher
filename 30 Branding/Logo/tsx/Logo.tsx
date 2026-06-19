// @ts-nocheck Delete this line before using

import React, { useMemo } from 'react';

interface LogoProps {
  /** 白色色值（漸層結束色） */
  whiteColor?: string;
  /** 紅色色值（用於混合 5% 到白色中） */
  secondColor?: string;
  /** 圖標寬度 */
  width?: number;
  /** 圖標高度 */
  height?: number;
  /** 額外的 CSS 類名 */
  className?: string;
}

/**
 * 將 Hex 顏色轉換為 RGB 對象
 */
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

/**
 * 將 RGB 轉換為 Hex 顏色
 */
function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * 混合兩種顏色
 * @param color1 第一個顏色
 * @param color2 第二個顏色
 * @param ratio color2 的比例 (0-1)
 */
function mixColors(color1: string, color2: string, ratio: number): string {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) return color1;

  const r = rgb1.r * (1 - ratio) + rgb2.r * ratio;
  const g = rgb1.g * (1 - ratio) + rgb2.g * ratio;
  const b = rgb1.b * (1 - ratio) + rgb2.b * ratio;

  return rgbToHex(r, g, b);
}

/**
 * Compass Launcher Logo 組件
 * 支持傳入白色和紅色，自動混合 5% 紅色到白色中作為漸層起始色
 */
export const Logo: React.FC<LogoProps> = ({
  whiteColor = '#F5F9FF',
  secondColor = '#FF0000',
  width = 372,
  height = 372,
  className = '',
}) => {
  // 生成唯一的 gradient ID
  const gradientId = useMemo(
    () => `logo-gradient-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  // 計算混合色：5% 紅色 + 95% 白色
  const mixedColor = useMemo(
    () => mixColors(whiteColor, secondColor, 0.05),
    [whiteColor, secondColor]
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 372 372"
      fill="none"
      className={className}
    >
      {/* 外框 - 使用白色 */}
      <path
        d="M186.5 16L35 190L187 355.5L338 190L186.5 16ZM186.5 40.5L68 190L187 340L305.5 190L186.5 40.5Z"
        fillRule="evenodd"
        fill={whiteColor}
      />

      {/* 上半部分箭頭 - 使用漸層（5%紅+95%白 漸變到 白） */}
      <path
        d="M186.5 60.5L133.5 205.5L187 173.5L239.5 205.5L186.5 60.5Z"
        fill={`url(#${gradientId})`}
      />

      {/* 下半部分箭頭左側 - 使用白色 */}
      <path d="M186.5 194L186.5 329L146 218.41L186.5 194Z" fill={whiteColor} />

      {/* 下半部分箭頭右側 - 使用稍暗的白色 */}
      <path d="M186.5 194L186.5 329L227 218.41L186.5 194Z" fill={whiteColor} opacity="0.85" />

      <defs>
        <linearGradient
          id={gradientId}
          x1="187.48049926757812"
          y1="60.5"
          x2="187.48049926757812"
          y2="171.18719482421875"
          gradientUnits="userSpaceOnUse"
        >
          {/* 漸層起始色：5% 紅色 + 95% 白色 */}
          <stop offset="0" stopColor={mixedColor} />
          {/* 漸層結束色：白色 */}
          <stop offset="1" stopColor={whiteColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
