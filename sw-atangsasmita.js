self.addEventListener('install', function(event) {
console.log('atang sasmita :berhasil di install');
// TODO 3.4: Skip waiting
self.skipWaiting();
});
self.addEventListener('activate', function(event) {
console.log('atangsasmita :berhasil di aktivasi');
});
self.addEventListener('fetch', function(event) {
console.log('atangssasmita: berhasil di fetch', event.request.url);
});