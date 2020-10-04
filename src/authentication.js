// Ciasteczko o nazwie "token" przechowywuje token użytkownika
// Ciasteczko o nazwie "username" przechowywuje nazwę użytkownika
// Każde ciasteczko wygasa po 1000000ms

export function setTokenCookie(token) {
  var d = new Date();
  d.setTime(d.getTime() + 1000000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = `token=${token}; ${expires};`;
}
export function setUserCookie(username) {
  var d = new Date();
  d.setTime(d.getTime() + 1000000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = `username=${username}; ${expires};`;
}
export function getCookie(name) {
  var name = name + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
// Pozbywamy się sesji użytkownika
export function deleteSession() {
  document.cookie = `username=""; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  document.cookie = `token=""; expires=Thu, 01 Jan 1970 00:00:01 GMT"`;
}
// Wykorzystujemy ją do sprawdzania czy uzytkownik ma ciasteczka
export function userHaveSession() {
  var username = getCookie('username');
  var token = getCookie('token');

  if (username === '' && token === '') {
    //jeżeli === "" to znaczy że ciasteczko nie ma informacji na temat użytkownika
    return false;
  } else {
    return true;
  }
}
