/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
// Initialize button with user's preferred color
let changeColor = document.getElementById('changeColor')

chrome.storage.sync.get('color', ({ color }) => {
  changeColor.style.backgroundColor = color
})

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  })
})

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color
  })
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGNBQWMsZUFBZTtBQUM3QjtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BvcHVwL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluaXRpYWxpemUgYnV0dG9uIHdpdGggdXNlcidzIHByZWZlcnJlZCBjb2xvclxubGV0IGNoYW5nZUNvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZUNvbG9yJylcblxuY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2NvbG9yJywgKHsgY29sb3IgfSkgPT4ge1xuICBjaGFuZ2VDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclxufSlcblxuLy8gV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQsIGluamVjdCBzZXRQYWdlQmFja2dyb3VuZENvbG9yIGludG8gY3VycmVudCBwYWdlXG5jaGFuZ2VDb2xvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgbGV0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjdXJyZW50V2luZG93OiB0cnVlLFxuICB9KVxuXG4gIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgdGFyZ2V0OiB7IHRhYklkOiB0YWIuaWQgfSxcbiAgICBmdW5jdGlvbjogc2V0UGFnZUJhY2tncm91bmRDb2xvcixcbiAgfSlcbn0pXG5cbi8vIFRoZSBib2R5IG9mIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBhcyBhIGNvbnRlbnQgc2NyaXB0IGluc2lkZSB0aGVcbi8vIGN1cnJlbnQgcGFnZVxuZnVuY3Rpb24gc2V0UGFnZUJhY2tncm91bmRDb2xvcigpIHtcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2NvbG9yJywgKHsgY29sb3IgfSkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==