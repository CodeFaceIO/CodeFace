import React, { useState, useEffect, useCallback, useRef } from 'react';

export const useMouseDelta = (initialWidth) => {
    // The distance the mouse has moved since `mousedown`.
    const [dragging, setDragging] = useState(false);
    const [result, setResult] = useState(initialWidth);
    const [currentWidth, setCurrentWidth] = useState(initialWidth);
  
    // Original position independent of any dragging.  Updated when done dragging.
    const origin = useRef(initialWidth);
  
    const handleMouseDown = useCallback((e) => {
      origin.current = e.clientX;
      setDragging(true);
    }, []);
  
    const handleMouseUp = useCallback(
      (e) => {
        setDragging(false);
        setCurrentWidth(result);
      },
      [result]
    );
  
    const handleMouseMove = useCallback(
      (e) => {
        if (!dragging) {
          return;
        }
        setResult(() => currentWidth + e.clientX - origin.current);
      },
      [currentWidth, dragging]
    );
  
    useEffect(() => {
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [dragging, handleMouseDown, handleMouseUp, handleMouseMove]);
  
    return result;
  };
  