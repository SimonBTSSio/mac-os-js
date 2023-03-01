class LocalStorageManager {
    getUserData(userId, variableName) {
      const userData = JSON.parse(localStorage.getItem(userId));
      if (userData) {
        return userData[variableName];
      }
      return undefined;
    }
  
    setUserData(userId, variableName, variableValue) {
      let userData = JSON.parse(localStorage.getItem(userId));
      if (!userData) {
        userData = {};
      }
      userData[variableName] = variableValue;
      localStorage.setItem(userId, JSON.stringify(userData));
    }
  }