export const checkIfEmailIsValid = (email: string): boolean => {
    const regexExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    const emailTested = regexExp.test(email);
    if (!emailTested) {
      return false
    }
      return true
  };