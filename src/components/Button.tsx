import React from "react";

type ButtonProps = {
  primaryColor: string;
  text?: string;
  icon?: React.ReactNode;
  hoverShade?: "godarker" | "golighter";
  mode?: "ghost" | "transparent" | "filled";
  isCircular?: boolean;
  width?: string;
  height?: string;
  onClick?: () => void;
};

export default function Button({
  primaryColor,
  text,
  icon,
  hoverShade = "godarker",
  mode = "filled",
  isCircular = false,
  width = "auto",
  height = "auto",
  onClick,
}: ButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const getBackgroundColor = () => {
    if (mode === "ghost") {
      return isHovered ? `${primaryColor}33` : "transparent";
    }
    if (mode === "transparent") {
      return isHovered ? primaryColor : "transparent";
    }
    // filled mode
    return isHovered ? getHoverColor() : primaryColor;
  };

  const getTextColor = () => {
    if (mode === "ghost") {
      return primaryColor;
    }
    if (mode === "transparent") {
      return isHovered ? "#ffffff" : primaryColor;
    }
    // filled mode
    return "#ffffff";
  };

  const getBorderColor = () => {
    return mode === "transparent" ? primaryColor : "transparent";
  };

  const getHoverColor = () => {
    const rgb = parseInt(primaryColor.slice(1), 16);
    const r = (rgb >> 16) & 255;
    const g = (rgb >> 8) & 255;
    const b = rgb & 255;

    const adjust = hoverShade === "godarker" ? -20 : 20;

    const newR = Math.max(0, Math.min(255, r + adjust));
    const newG = Math.max(0, Math.min(255, g + adjust));
    const newB = Math.max(0, Math.min(255, b + adjust));

    return `#${((newR << 16) | (newG << 8) | newB)
      .toString(16)
      .padStart(6, "0")}`;
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: getBackgroundColor(),
    color: getTextColor(),
    border: `2px solid ${getBorderColor()}`,
    borderRadius: isCircular ? (width === height ? "50%" : "25px") : "4px",
    padding: isCircular ? "0" : "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    width,
    height,
    outline: "none",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {icon && (
        <span
          style={{
            marginRight: text ? "8px" : "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
        </span>
      )}
      {text}
    </button>
  );
}
