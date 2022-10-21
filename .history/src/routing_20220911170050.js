const routingObject = {
  forward: (paramsFunction) => {
    paramsFunction(1);
  },
  backward: (paramsFunction) => {
    paramsFunction(-1);
  },
  dynamicRouting: (paramsFunction, paramsUrl) => {
    paramsFunction(paramsUrl);
  }
  
  
};

export default routingObject;
