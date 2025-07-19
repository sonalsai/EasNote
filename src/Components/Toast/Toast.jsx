import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import "./Toast.scss";

const Toast = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);
  const toastId = useRef(0);

  useImperativeHandle(ref, () => ({
    show(msg) {
      const id = toastId.current++;
      setToasts((prevToasts) => [...prevToasts, { id, message: msg }]);
    },
  }));

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          className={`toast ${toasts.length > 0 ? "slide-in" : "slide-out"}`}
          style={{ bottom: `${index * 60}px` }}
        >
          <div className="toast-message">{toast.message}</div>
        </div>
      ))}
    </div>
  );
});

Toast.displayName = "Toast";

export default Toast;
