const useMouseDelta = (initialWidth) => {
    const [result, setResult] = useState(initialWidth);
    const dragging = useRef(false);
    const previousClientX = useRef(0);
  
    const handleMouseMove = useCallback((e) => {
      if (!dragging.current) {
        return;
      }
  
      setResult((result) => {
        const change = e.clientX - previousClientX.current;
        previousClientX.current = e.clientX;
        return result + change;
      });
    }, []);
  
    const handleMouseDown = useCallback((e) => {
      previousClientX.current = e.clientX;
      dragging.current = true;
    }, []);
  
    const handleMouseUp = useCallback((e) => {
      dragging.current = false;
    }, []);
  
    useEffect(() => {
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [handleMouseDown, handleMouseUp, handleMouseMove]);
  
    return result;
  };
