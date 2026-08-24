<!-- No router config needed. The file system is the router.

  src/routes/
  ├── +page.svelte              →  /
  ├── about/
  │   └── +page.svelte          →  /about
  └── posts/
      ├── +page.svelte          →  /posts
      └── [id]/
          └── +page.svelte      →  /posts/:id

  Square brackets denote dynamic segments.
  Each folder maps directly to a URL segment. -->
