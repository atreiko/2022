// Browser Object Model

console.log(navigator);
// Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 0, userActivation: UserActivation, …}

console.log(navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36


console.log(location);
// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/2022/javascript/study/dom/index.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}

console.log(location.href);
// http://127.0.0.1:5500/2022/javascript/study/dom/index.html


console.log(history);
// History {length: 1, scrollRestoration: 'auto', state: null}
//* history.back()
//* history.forward()

// alert
// confirm
// prompt