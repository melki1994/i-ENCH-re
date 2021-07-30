export function signIn(token) {
  localStorage.setItem("jwt", token);
}

export function logout() {
    localStorage.clear();
    sessionStorage.clear();
}