const l = window.location;
if (l.search) {
  const url = `${l.pathname}${l.search.replace('?', '')}`;
  window.history.replaceState(null, null, url);
}
// if (l.pathname === '/') {
//   window.history.replaceState(null, null, `${l.href}`);
// }
