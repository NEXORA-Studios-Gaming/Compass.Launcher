import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getCssVariable(variableName: string): string | null {
    if (!variableName.startsWith("--")) {
        variableName = `--${variableName}`;
    }

    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const value = computedStyle.getPropertyValue(variableName).trim();

    return value || null;
}

export function getColorValue(colorName: string): string | null {
    if (!colorName.startsWith("--")) {
        if (!colorName.startsWith("color-")) {
            colorName = `color-${colorName}`;
        }
        colorName = `--${colorName}`;
    }

    return getCssVariable(colorName);
}
