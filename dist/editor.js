// Compatibility for previously cached editor shells. The current editor lives inside the encrypted page.
window.location.replace(new URL('editor.html', document.baseURI).href);
