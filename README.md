# LABORATORY-NEXT-13

A new version of NEXT is available, it's time to test the difference and how to use the new features. This laboratory is all about **Next13**. The new version present now a folder app where you implement your application. In addition, a new way of using the generation of page and fetch has been added with this new version.

**WARNING**: I have been using a free API for testing few of the experience. This api has a rate limiter so only a certain part of the app can be build at once. If you want to test a particular experience, you might need to move it from the folder *backapp* to the *app* folder.

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Experiences](#experiences)
- [Running](#running)
- [System](#system)
- [Interesting points](#interesting-points)
- [Links](#links)

## Experiences

- **Experience1**: Testing the possibilities of the new app folder
- **Experience2**: Testing the layout.tsx
- **Experience3**: Testing the link prefetching and reset cache
- **Experience4**: Testing the loading.tsx
- **Experience5**: Testing the Suspence loading
- **Experience6**: Testing the error.tsx
- **Experience7**: Testing the new Incremental Static Regeneration (work only with build&start)
- **Experience8**: Testing the new Static Site Generation (work only with build&start)
- **Experience9**: Testing the new Server Side Rendering (work only with build&start)
- **Experience10**: Testing the parallele vs sequential fetches
- **Experience11**: Testing revalidation by segment (revalidate in page) (work only with build&start)
- **Experience12**: Testing loading a call inside axios and cache it (not working, why?)
- **Experience13**: Testing Server Component vs Client Component (a: Need to be Serializable)
  Pay attention to the package: server-only
  It can avoid Poisonous component (running on server and client)
  Context work also only on client component

## Running

I am using NX, so for starting the project use the following command:

```bash
$ npm run dev
```

And for some experience, you can only see the result if you build the app

```bash
$ npm run build
$ npm run start
```

## System

Ubuntu Version: Ubuntu 20.04.1 LTS
Node Version: v16.17.3

```bash
# Get the version of node
$ node -v

# Get the latest version of ubuntu
$ lsb_release -a
```

## Interesting points

- Turbopack (alpha)

## Links

[https://beta.nextjs.org/docs/routing/fundamentals](https://beta.nextjs.org/docs/routing/fundamentals)
