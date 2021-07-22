# Cloudflare Worker for Image Host Metadata

tldr ; 

i'll write a better one later.

Requirements - Your own image host, on a domain that you control via cloudflare.

Limitations - 100,000 requests *per day* (where the embed works).

Make a Cloudflare worker.
Copy the code in from the Repo
Set the route to be where your images are hosted, in my case this is *i.cubityfir.st/**
Make sure to click "Request limit failure mode" and change it to `Fail open`.

