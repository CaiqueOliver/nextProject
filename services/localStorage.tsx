export const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  if (typeof window !== "undefined") {
    const item = JSON.parse(localStorage.getItem(key));
  }
  // return JSON.parse(localStorage.getItem(key));
};
