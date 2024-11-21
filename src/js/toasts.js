export function greetingMessage() {
  iziToast.show({
    title: 'Hello',
    titleColor: '#000',
    message: 'Welcome to our Website!',
    messageColor: '#000',
    position: 'topRight',
    color: '#09f',
    icon: 'fas fa-bell',
    timeout: 4000,
  });
}

export function iziToastMes() {
  iziToast.error({
    title: 'Error',
    titleColor: '#fff',
    message: 'Sorry, something went wrong. Please try again!',
    messageColor: '#fff',
    color: '#ef4040',
    position: 'topRight',
    icon: 'fas fa-exclamation-triangle',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    timeout: 3000,
  });
}

export function emptyLine() {
  iziToast.error({
    title: 'Error',
    titleColor: '#fff',
    message: 'Please fill in the search images field',
    messageColor: '#fff',
    color: '#ef4040',
    position: 'topRight',
    icon: 'fas fa-exclamation-triangle',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    timeout: 3000,
  });
}

export function endOfRes() {
  iziToast.warning({
    title: 'Caution',
    titleColor: '#000',
    message: 'We are sorry, but you have reached the end of search results.',
    messageColor: '#000',
    position: 'bottomCenter',
    color: 'yellow',
    icon: 'fas fa-exclamation-circle',
    timeout: 4000,
  });
}

export function warningMessage() {
  iziToast.warning({
    title: 'Caution',
    titleColor: '#000',
    message: 'Something went wrong, please try again',
    messageColor: '#000',
    position: 'topRight',
    color: 'orange',
    icon: 'fas fa-exclamation-circle',
    timeout: 4000,
  });
}
