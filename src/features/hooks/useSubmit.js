import React, { useState } from "react";

const useSubmit = ({ event, data }) => {
  const [hookState, setHookState] = useState("");

  event.preventDefault();
};

export default useSubmit;
