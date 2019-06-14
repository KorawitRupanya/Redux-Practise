export function login(userName: string): Promise<boolean> {
  if (!userName) {
    return Promise.reject("userName is  emty");
  }
  return Promise.resolve(userName == "smart");
}
