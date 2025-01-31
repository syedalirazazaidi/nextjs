# Next.js 13 Hello World

Next.js is built on top of React. Therefore, before starting to learn Next.js, we suggest that you get a basic understanding of [React from latest official docs](https://beta.reactjs.org/learn). You can also learn from this 2 hour and 35 min [Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react). If you’ve never written React code, you may also go through [our React recorded classes](https://github.com/panacloud/bootcamp-2020#part-i-front-end-fundamentals-with-react) and cover classes 1-8.

[Download and Install Node.js LTS Version](https://nodejs.org/en/download/)

[Download and Install VS Code](https://code.visualstudio.com/download)

[Check out the Next.js 13 Docs](https://beta.nextjs.org/docs)

Open the Command Line and create the project by give this command:

        npx create-next-app@latest --experimental-app

Note that the project uses TypeScript by default.

Change to project directory:

        cd step00_helloworld

The app directory is where you define routes, create UI and colocate files such as components, tests, or stylesheets.

In the app directory delete everything except page.tsx

Edit app/page.tsx and make a very simple hello world React component in the file. Note that it is a convention in Next.js that the html page in the director is called page.tsx

Start the Server:

        npm run dev

Note that the development server created a layout.tsx file by itself. This means the Next.js requires that there must be RootLayout component in the app folder for the app to function.

The app/layout.tsx and app/page.tsx files will be rendered when the user visits the root of your application.

The file app/layout.tsx is used to define UI that is shared across multiple pages. A layout accepts another layout or a page as its child. You can nest layouts to create nested routes.

The file app/page.tsx is used to define the unique UI of a route. Pages represent the leaf of the route and are needed for the path to be accessible.

Open the Browser:

        http://localhost:3000/


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
