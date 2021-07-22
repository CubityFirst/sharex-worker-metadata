# Cloudflare Worker for Image Host Metadata

tldr ; 

i'll write a better one later.

This uses Cloudflare's Worker service to add on additional metadata so that Discord Embeds have the chat embed.

![](https://i.imgur.com/ekUT5P7.png)

Requirements - Your own image host, on a domain that you control via [Cloudflare](https://www.cloudflare.com).

Limitations - 100,000 requests *per day* (where the embed works).

1. Make a Cloudflare worker.
2. Copy the code in from the Repo & change the Title / Color, and Description to whatever you want. (description by default is filename).
3. Set the route to be where your images are hosted, in my case this is `i.cubityfir.st/*`
4. Make sure to click "Request limit failure mode" and change it to `Fail open`.
