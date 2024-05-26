/**
 * WebEngage
 */
declare namespace webengage {
  const user: {
    login(userID: string);
    setAttribute(key: string, value: string);
  };
  function track(event: string, properties?: Record<string, string>);
}
