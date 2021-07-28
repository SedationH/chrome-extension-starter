/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
let color = 'pink'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color })
  console.log(
    'Default background color set to %cgreen',
    `color: ${color}`
  )
})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjb2xvciA9ICdwaW5rJ1xuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgY29sb3IgfSlcbiAgY29uc29sZS5sb2coXG4gICAgJ0RlZmF1bHQgYmFja2dyb3VuZCBjb2xvciBzZXQgdG8gJWNncmVlbicsXG4gICAgYGNvbG9yOiAke2NvbG9yfWBcbiAgKVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==