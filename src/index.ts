import { handleRequest } from './request-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
