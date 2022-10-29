## Next.js 13 next/image


Next.js 13 introduces a powerful new Image component, allowing you to easily display images without layout shift and optimize files on-demand for increased performance.

During the Next.js Community Survey, 70% of respondents told us they used the Next.js Image component in production, and in turn, saw improved Core Web Vitals. With Next.js 13, we're improving next/image even further.

### To add an image to your application, import the next/image component:

     import Image from 'next/image';

### Local Images

 import img from "../images/myimg.jpg";



The new Image component:

- Ships less client-side JavaScript
- Easier to style and configure
- More accessible requiring alt tags by default
- Aligns with the Web platform
- Faster because native lazy loading doesn't require hydration

# Upgrading next/image to Next.js 13

The old Image component was renamed to next/legacy/image. We've provided a codemod that will automatically update your existing usage of next/image to next/legacy/image. For example, this command would run the codemod on your ./pages directory when run from the root:

npx @next/codemod next-image-to-legacy-image ./pages

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
