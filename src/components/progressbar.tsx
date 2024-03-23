import "./progressbar.css";
import { motion, animate, AnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import "./progressbar.css"; // Importing CSS file for styling

interface ProgressbarProps {
  value: number; // Prop representing the progress value (0-100)
}

function Progressbar({ value }: ProgressbarProps): JSX.Element {
  const progressTextRef = useRef<HTMLParagraphElement>(null); // Reference for the progress text element

  useEffect(() => {
    const progressText = progressTextRef.current;
    if (progressText) {
      animateProgress(parseInt(progressText.textContent || "0"), value);
    }
  }, [value]); // Depend on 'value' prop for triggering effect

  const animateProgress = (startValue: number, endValue: number) => {
    animate(startValue, endValue, {
      duration: 0.5, // Duration of animation in seconds
      onUpdate: (currentValue: number) => {
        if (progressTextRef.current) {
          progressTextRef.current.textContent = currentValue.toFixed(0);
        }
      },
    } as AnimationControls);
  };

  return (
    <div className="progressbar-container">
      <div className="progressbar-text-container">
        <p ref={progressTextRef}>0</p>
        <p>%</p>
      </div>
      <div className="progressbar">
        <motion.div
          className="bar"
          animate={{
            width: `${value}%`, // Dynamically adjust width based on 'value' prop
          }}
          transition={{
            duration: 0.5, // Duration of animation in seconds
          }}
        />
      </div>
    </div>
  );
}

export default Progressbar; // Exporting Progressbar component as default
