# v2 Photo Credits & Swap Guide

The photography in v2 is hotlinked from [Unsplash](https://unsplash.com) under the
[Unsplash License](https://unsplash.com/license), which permits free commercial use
without attribution. We credit the source here anyway and document how to swap any
image for an owned/licensed photo.

## Sandbox note

This codebase was generated in an environment that couldn't reach external image
hosts to verify the URLs at build time. The URLs follow Unsplash's stable CDN
pattern (`https://images.unsplash.com/photo-<id>?...`) but if any specific photo
ID has been retired since this was built, that one image will fail to load — the
page layout will degrade gracefully to a dark green fallback (handled in
`css/styles.css` and `js/main.js`) rather than showing a broken-image icon.

To audit which (if any) URLs are dead, open `v2/credits.html` in a browser and
spot-check each thumbnail.

## How to swap a photo

Every image reference in v2 uses the same URL twice on each element it appears
on (once in `data-bg` for the JS fallback handler, once in an inline
`background-image:` CSS rule). To replace one image globally:

```bash
# from the repo root
grep -rl 'images.unsplash.com/photo-1441974231531' v2/ \
  | xargs sed -i 's|https://images.unsplash.com/photo-1441974231531-c6227db76b6e?[^"]*|https://YOUR-NEW-URL|g'
```

Or open `v2/credits.html` in a browser, find the manifest section at the bottom,
identify the key (`hero`, `forestPath`, etc.) you want to change, then
find/replace that URL across the v2 folder.

## Manifest

See `v2/credits.html` for the full list of URLs and what each one is used for.
