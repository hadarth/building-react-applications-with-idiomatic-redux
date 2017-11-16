export const loadStateFromLocalStorage = () => {
  try {
    const serializeState = localStorage.getItem('StoreState')
    if (serializeState === null) {
      return undefined
    }
    return JSON.parse(serializeState);
  } catch (err) {
    console.log("err: ", err);
    return undefined
  }
};

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem ('StoreState', serializedState);
  } catch (err) {
    console.log('error in save to local storage: ', err)
    // ignore for now (can log them)
  }
}