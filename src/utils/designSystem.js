// Design System - Luxury Fashion Brand
// Black + Pink + Emerald Green color palette

export const colors = {
  // Primary Colors
  black: "#000000",
  white: "#FFFFFF",
  pink: "#FFC0CB",
  emerald: "#50C878",
  
  // Neutral shades
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6", 
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  
  // Accent variations
  pinkLight: "#FFD1DC",
  pinkDark: "#FFB6C1",
  emeraldLight: "#7DD3FC", 
  emeraldDark: "#047857",
};

export const typography = {
  // Font families
  fontPrimary: '"Montserrat", sans-serif', // Headlines, buttons
  fontSecondary: '"Inter", sans-serif',     // Body text, descriptions
  
  // Font weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  // Font sizes (responsive)
  sizes: {
    xs: "clamp(12px, 2vw, 14px)",
    sm: "clamp(14px, 2.5vw, 16px)", 
    base: "clamp(16px, 3vw, 18px)",
    lg: "clamp(18px, 3.5vw, 20px)",
    xl: "clamp(20px, 4vw, 24px)",
    "2xl": "clamp(24px, 4.5vw, 30px)",
    "3xl": "clamp(30px, 5vw, 36px)",
    "4xl": "clamp(36px, 6vw, 48px)",
    "5xl": "clamp(48px, 8vw, 64px)",
    "6xl": "clamp(64px, 10vw, 96px)",
  },
};

export const spacing = {
  xs: "0.5rem",   // 8px
  sm: "0.75rem",  // 12px
  md: "1rem",     // 16px  
  lg: "1.5rem",   // 24px
  xl: "2rem",     // 32px
  "2xl": "3rem",  // 48px
  "3xl": "4rem",  // 64px
  "4xl": "6rem",  // 96px
  "5xl": "8rem",  // 128px
};

export const borderRadius = {
  sm: "0.375rem",   // 6px
  md: "0.5rem",     // 8px
  lg: "0.75rem",    // 12px
  xl: "1rem",       // 16px
  "2xl": "1.5rem",  // 24px
  full: "9999px",   // Fully rounded
};

export const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px rgba(0, 0, 0, 0.07)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
  "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
  
  // Brand-specific shadows
  pink: "0 8px 24px rgba(255, 192, 203, 0.4)",
  pinkHover: "0 12px 32px rgba(255, 192, 203, 0.6)",
  emerald: "0 8px 24px rgba(80, 200, 120, 0.4)",
  emeraldHover: "0 12px 32px rgba(80, 200, 120, 0.6)",
};

// Component Styles
export const components = {
  // Primary button (Pink/Emerald)
  button: {
    primary: {
      base: `
        font-family: ${typography.fontPrimary};
        font-weight: ${typography.weights.bold};
        padding: ${spacing.md} ${spacing.xl};
        border-radius: ${borderRadius.full};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 2px solid;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-size: ${typography.sizes.sm};
      `,
      pink: `
        background-color: ${colors.pink};
        color: ${colors.black};
        border-color: ${colors.pink};
        box-shadow: ${shadows.pink};
      `,
      emerald: `
        background-color: ${colors.emerald};
        color: ${colors.black}; 
        border-color: ${colors.emerald};
        box-shadow: ${shadows.emerald};
      `,
      hover: `
        transform: translateY(-2px) scale(1.02);
        background-color: ${colors.white};
      `,
    },
    
    // Secondary button (Outline)
    secondary: {
      base: `
        font-family: ${typography.fontPrimary};
        font-weight: ${typography.weights.semibold};
        padding: ${spacing.sm} ${spacing.lg};
        border-radius: ${borderRadius.full};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 2px solid;
        background-color: transparent;
        letter-spacing: 0.5px;
        font-size: ${typography.sizes.sm};
      `,
      pink: `
        color: ${colors.pink};
        border-color: ${colors.pink};
      `,
      emerald: `
        color: ${colors.emerald};
        border-color: ${colors.emerald};
      `,
      hover: `
        transform: translateY(-1px);
        box-shadow: ${shadows.lg};
      `,
    },
  },
  
  // Card styles
  card: {
    base: `
      background-color: ${colors.white};
      border-radius: ${borderRadius.lg};
      box-shadow: ${shadows.md};
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    `,
    hover: `
      transform: translateY(-4px);
      box-shadow: ${shadows.xl};
    `,
    dark: `
      background-color: ${colors.gray[900]};
      color: ${colors.white};
    `,
  },
  
  // Typography styles
  heading: {
    h1: `
      font-family: ${typography.fontPrimary};
      font-weight: ${typography.weights.bold};
      font-size: ${typography.sizes["5xl"]};
      line-height: 1.1;
      letter-spacing: -0.02em;
      margin-bottom: ${spacing.lg};
    `,
    h2: `
      font-family: ${typography.fontPrimary};
      font-weight: ${typography.weights.bold};
      font-size: ${typography.sizes["4xl"]};
      line-height: 1.2;
      letter-spacing: -0.01em;
      margin-bottom: ${spacing.md};
    `,
    h3: `
      font-family: ${typography.fontPrimary};
      font-weight: ${typography.weights.semibold};
      font-size: ${typography.sizes["2xl"]};
      line-height: 1.3;
      margin-bottom: ${spacing.md};
    `,
    h4: `
      font-family: ${typography.fontPrimary};
      font-weight: ${typography.weights.semibold};
      font-size: ${typography.sizes.xl};
      line-height: 1.4;
      margin-bottom: ${spacing.sm};
    `,
  },
  
  text: {
    body: `
      font-family: ${typography.fontSecondary};
      font-weight: ${typography.weights.regular};
      font-size: ${typography.sizes.base};
      line-height: 1.6;
      color: ${colors.gray[700]};
    `,
    caption: `
      font-family: ${typography.fontSecondary};
      font-weight: ${typography.weights.medium};
      font-size: ${typography.sizes.sm};
      line-height: 1.5;
      color: ${colors.gray[600]};
    `,
    small: `
      font-family: ${typography.fontSecondary};
      font-weight: ${typography.weights.regular};
      font-size: ${typography.sizes.xs};
      line-height: 1.4;
      color: ${colors.gray[500]};
    `,
  },
};

// Utility functions
export const getAccentColor = (accent) => {
  return accent === "pink" ? colors.pink : colors.emerald;
};

export const getAccentShadow = (accent, hover = false) => {
  const shadowType = hover ? "Hover" : "";
  return accent === "pink" 
    ? shadows[`pink${shadowType}`] 
    : shadows[`emerald${shadowType}`];
};

// CSS-in-JS helper for inline styles
export const createInlineStyles = (styleConfig) => {
  const styles = {};
  
  styleConfig.split(';').forEach(rule => {
    const [property, value] = rule.split(':').map(s => s.trim());
    if (property && value) {
      // Convert kebab-case to camelCase
      const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styles[camelProperty] = value;
    }
  });
  
  return styles;
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  components,
  getAccentColor,
  getAccentShadow,
  createInlineStyles,
};
