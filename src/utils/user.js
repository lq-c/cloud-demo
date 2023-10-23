// var _token = window.localStorage.token;
// var _payload;
// var _localAuthenticationProviderId = window.localStorage.localAuthenticationProviderId;

// exports.storeToken = function (token) {
//   window.localStorage.token = token;
//   _token = token;
// };

// exports.getToken = function () {
//   return window.localStorage.token;
// };

// exports.storeLocalAuthenticationProviderId = function (id) {
//   window.localStorage.localAuthenticationProviderId = id;
//   _localAuthenticationProviderId = id;
// };

// exports.getLocalAuthenticationProviderId = function () {
//   return _localAuthenticationProviderId;
// };

function getBase64Decode (str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

export const getPayload = function (token) {
  var splited = token.split('.');

  return JSON.parse(getBase64Decode(splited[1]));
};

// exports.hasClaim = function (claimType, claimValue) {
//   var payload = this.getPayload();
//   var claims = payload.user_claims;
//   var roles = payload.user_roles;
//   for (var i = 0; i < roles.length; ++i) {
//     for (var j = 0; j < roles[i].role_claims.length; ++j) {
//       claims.push({ claimType: roles[i].role_claims[j], claimValue: '' });
//     }
//   }
//   var keys = Object.getOwnPropertyNames(claims);
//   if (!keys.some(x => x == claimType)) {
//     return false;
//   }

//   if (!claimValue) {
//     return claims.some(x => x.claimType == claimType);
//   }

//   return claims.some(x => x.claimType == claimType && x.claimValue == claimValue);
// };

// exports.isInRole = function (role, scope) {
//   var payload = this.getPayload();
//   var roles = payload.user_roles;
//   if (!roles.some(x => x.role_name == role)) {
//     return false;
//   }

//   if (!scope) {
//     return roles.some(x => x.role_name == role && !x.scope);
//   }

//   return roles.some(x => x.role_name == role && x.scope == scope);
// }

// exports.clearToken = function () {
//   _token = null;
//   _payload = null;
//   window.localStorage.removeItem('token');
// };