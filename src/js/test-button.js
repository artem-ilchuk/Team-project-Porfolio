const selector = document.querySelector('#switch');
const body = document.body;
const LS_KEY_SWITCH = 'switch';

document.addEventListener('DOMContentLoaded', renderPage);
selector.addEventListener('click', event => {
  const checkBox = event.target.checked;

  if (checkBox) {
    body.classList.replace('light', 'dark');
    addDataToLocalStorage(LS_KEY_SWITCH, 'dark');
  } else {
    body.classList.replace('dark', 'light');
    addDataToLocalStorage(LS_KEY_SWITCH, 'light');
  }
});

function renderPage() {
  const LS_DATE = getDataLocalStorage(LS_KEY_SWITCH);
  if (LS_DATE === 'dark') {
    body.classList.replace('light', 'dark');
    selector.checked = true;
  } else {
    body.classList.replace('dark', 'light');
  }
}

function addDataToLocalStorage(key, value) {
  try {
    const normolizedState = JSON.stringify(value);
    localStorage.setItem(key, normolizedState);
  } catch (error) {
    console.log(error);
  }
}
function getDataLocalStorage(key) {
  try {
    const normolizedState = localStorage.getItem(key);
    return normolizedState === null ? undefined : JSON.parse(normolizedState);
  } catch (error) {
    console.log(error);
  }
}
