import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import "./Toast.scss";

const Toast = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  useImperativeHandle(ref, () => ({
    show(msg) {
      setMessage(msg);
      setIsVisible(true);
    },
  }));

  useEffect(() => {
    let closeTimer;
    let unmountTimer;
    if (isVisible) {
      setIsClosing(false);
      closeTimer = setTimeout(() => {
        setIsClosing(true);
      }, 1700);

      unmountTimer = setTimeout(() => {
        setIsVisible(false);
        setMessage("");
      }, 2000);
    }
    return () => {
      clearTimeout(closeTimer);
      clearTimeout(unmountTimer);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`toast ${isClosing ? "slide-out" : "slide-in"}`}>
      <div className="toast-message">{message}</div>
    </div>
  );
});

Toast.displayName = "Toast";

export default Toast;
