"use client";

export default function InputField({
  type = "text",
  inputMode = "text",
  className = "",
  ...props
}) {
  const handleKeyDown = (e) => {
    // Prevent zooming from changing input values
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=' || e.keyCode === 61)) {
      e.preventDefault();
    }
    
    // Call original onKeyDown if provided
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
  };

  const handleWheel = (e) => {
    // Prevent mouse wheel from changing values
    if (type === "number") {
      e.preventDefault();
    }
  };

  return (
    <input
      type={type}
      inputMode={type === "number" ? "numeric" : inputMode}
      pattern={type === "number" ? "[0-9]*" : undefined}
      className={`${className}`}
      onKeyDown={handleKeyDown}
      onWheel={handleWheel}
      {...props}
    />
  );
}