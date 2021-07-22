async function handleRequest(request) {
    const userAgent = request.headers.get("User-Agent");
    if (userAgent && userAgent.includes("Discord")) {
      const url = new URL(request.url);
      const title = "Title";
      const description = url.pathname.substr(url.pathname.lastIndexOf("/") + 1);
      return new Response(`<html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="${description}">
    <meta property="og:description" content="${description}">
    <meta property="og:title" content="${title}">
    <meta property="og:image" content="${url.toString()}">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="og:url" content="${url.toString()}">
  </head>
  <body>
    <img src="${url.toString()}">
  </body>
  </html>`, {
        headers: {
          "content-type": "text/html"
        }
      });
    }
    return fetch(request);
  }
  
  addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
  });