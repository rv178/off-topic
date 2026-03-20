# #off-topic

Personal profile directory built with [Hugo](https://gohugo.io/).

Each member gets a page under `content/<name>/` with:

- front matter for name, bio, email, and social links
- a short Markdown profile
- an optional `avatar.*` image

## Local development

Use the same Hugo version as the deployment workflow when possible.

```bash
hugo server
```

Open `http://localhost:1313/`.

## Add a member

1. Create a new folder at `content/<your-name>/`.
2. Add `index.md` using the template below.
3. Add `avatar.jpg`, `avatar.png`, or another `avatar.*` image if you want a custom photo.
4. Run `hugo server` and check the card on the homepage and the profile page.

## Member page template

```md
---
title: "Your Name"
bio: "One-line bio"
email: "you@example.com"
social:
  github: "your-github-handle"
  x: "your-x-handle"
  linkedin: "in/your-linkedin-slug"
---

## About

Write a short intro here.

## What I do

- Thing one
- Thing two
- Thing three

## Current interests

- Interest one
- Interest two

## Links

- Portfolio: https://example.com
- Blog: https://example.com/blog
- Favorite project: https://github.com/your-handle/project
```

## Structure

```text
.
|-- content/
|   |-- _index.md
|   `-- <member>/
|       |-- index.md
|       `-- avatar.jpg
|-- layouts/
|-- assets/
`-- static/
```

## Deployment

Pushes to `main` trigger the GitHub Pages workflow in `.github/workflows/gh-pages.yml`.
