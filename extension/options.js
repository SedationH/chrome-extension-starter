/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/options/options.js ***!
  \********************************/
let page = document.getElementById('buttonDiv')
let selectedClassName = 'current'
const presetButtonColors = [
  '#3aa757',
  '#e8453c',
  '#f9bb2d',
  '#4688f1',
]

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  )
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName)
  }

  // Mark the button as selected
  let color = event.target.dataset.color
  event.target.classList.add(selectedClassName)
  chrome.storage.sync.set({ color })
}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get('color', data => {
    let currentColor = data.color
    // For each color we were provided…
    for (let buttonColor of buttonColors) {
      // …create a button with that color…
      let button = document.createElement('button')
      button.dataset.color = buttonColor
      button.style.backgroundColor = buttonColor

      // …mark the currently selected color…
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName)
      }

      // …and register a listener for when that button is clicked
      button.addEventListener('click', handleButtonClick)
      page.appendChild(button)
    }
  })
}

// Initialize the page by constructing the color options
constructOptions(presetButtonColors)

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0JBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvb3B0aW9ucy9vcHRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkRpdicpXG5sZXQgc2VsZWN0ZWRDbGFzc05hbWUgPSAnY3VycmVudCdcbmNvbnN0IHByZXNldEJ1dHRvbkNvbG9ycyA9IFtcbiAgJyMzYWE3NTcnLFxuICAnI2U4NDUzYycsXG4gICcjZjliYjJkJyxcbiAgJyM0Njg4ZjEnLFxuXVxuXG4vLyBSZWFjdHMgdG8gYSBidXR0b24gY2xpY2sgYnkgbWFya2luZyB0aGUgc2VsZWN0ZWQgYnV0dG9uIGFuZCBzYXZpbmdcbi8vIHRoZSBzZWxlY3Rpb25cbmZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGV2ZW50KSB7XG4gIC8vIFJlbW92ZSBzdHlsaW5nIGZyb20gdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgY29sb3JcbiAgbGV0IGN1cnJlbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGAuJHtzZWxlY3RlZENsYXNzTmFtZX1gXG4gIClcbiAgaWYgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdGVkQ2xhc3NOYW1lKVxuICB9XG5cbiAgLy8gTWFyayB0aGUgYnV0dG9uIGFzIHNlbGVjdGVkXG4gIGxldCBjb2xvciA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvbG9yXG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkQ2xhc3NOYW1lKVxuICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGNvbG9yIH0pXG59XG5cbi8vIEFkZCBhIGJ1dHRvbiB0byB0aGUgcGFnZSBmb3IgZWFjaCBzdXBwbGllZCBjb2xvclxuZnVuY3Rpb24gY29uc3RydWN0T3B0aW9ucyhidXR0b25Db2xvcnMpIHtcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2NvbG9yJywgZGF0YSA9PiB7XG4gICAgbGV0IGN1cnJlbnRDb2xvciA9IGRhdGEuY29sb3JcbiAgICAvLyBGb3IgZWFjaCBjb2xvciB3ZSB3ZXJlIHByb3ZpZGVk4oCmXG4gICAgZm9yIChsZXQgYnV0dG9uQ29sb3Igb2YgYnV0dG9uQ29sb3JzKSB7XG4gICAgICAvLyDigKZjcmVhdGUgYSBidXR0b24gd2l0aCB0aGF0IGNvbG9y4oCmXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmNvbG9yID0gYnV0dG9uQ29sb3JcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBidXR0b25Db2xvclxuXG4gICAgICAvLyDigKZtYXJrIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY29sb3LigKZcbiAgICAgIGlmIChidXR0b25Db2xvciA9PT0gY3VycmVudENvbG9yKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkQ2xhc3NOYW1lKVxuICAgICAgfVxuXG4gICAgICAvLyDigKZhbmQgcmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3Igd2hlbiB0aGF0IGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVCdXR0b25DbGljaylcbiAgICAgIHBhZ2UuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gSW5pdGlhbGl6ZSB0aGUgcGFnZSBieSBjb25zdHJ1Y3RpbmcgdGhlIGNvbG9yIG9wdGlvbnNcbmNvbnN0cnVjdE9wdGlvbnMocHJlc2V0QnV0dG9uQ29sb3JzKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9