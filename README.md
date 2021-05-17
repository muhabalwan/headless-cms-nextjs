This is a WIP project that uses Next.js the aim of this project is to use Ghost-api in order to create a front-end system for a headless CMS, the CMS that is being used is [Ghost headless CMS](https://ghost.org/docs/introduction/)


This project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Pre quest
- Make sure you have Node $ Npm installed
- Make sure you have installed [Ghost](https://ghost.org/docs/install/)
- Run ghost and confirm its running on the localhost, once its running user will see a msg that says http://localhost:PORTNUMBER/ is up an running.
- Go to Ghost locahost:PORTNUMBER/ghost
- Then on the left side click on Integration
- Click on Add custom integration Type a name and hit enter/
- Copy the Content API key and API URL and past them in the /ghost-nextjs/pages/api/page.tsx replace BLOG_URL and CONTENT_API_KEY with the values that you have copied.

## Getting Started

First, run npm install
```bash
npm run install
# or
yarn install
```
then run

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

pages are dynamic and can be found on `pages/[pageSlug]].tsx`.


[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Note:
This is still a 