const regexObject = {
  emailDataTester: (paramsEmail) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    let isTrue = false;
    if (emailRegex.test(paramsEmail)) {
      isTrue = true;
    }
    return isTrue;
  },
  passwordDataTester: (paramsPassword) => {
    const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/;
    let isTrue = false;

    if (passwordRegex.test(paramsPassword)) {
      isTrue = true;
    }
    return isTrue;
  },
};

export default regexObject;
