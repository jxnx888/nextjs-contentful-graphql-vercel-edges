

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  And the template project also integrated with `Contentful`, `GraphQL`, `Vercel`, `GitHub`,  `Unit Test with Jest`, and `E2E Test with Cypress`. Using `GitHub Actions` build a CI/CD workflow (Unit Test => Deploy => E2E Test). 

## Getting Started

First, install all the dependence:

```
npm i
```
Before you run the development server, you have to add `ENV` to project:

`CONTENTFUL_SPACE_ID`, `CONTENTFUL_DELIVERY_API_KEY`,`CONTENTFUL_PREVIEW_API_TOKEN`,`VERCEL_TOKEN`,`GH_TOKEN`(GitHub Token), `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` and `VERCEL_PREVIEW`

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### GitHub Actions

`.github/workflows/preview.yml` will deploy the project to vercel preview once you push your changes to `develop` branch.
`.github/workflows/preview.yml` will deploy the project to vercel production once you push your changes to `main` branch.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
