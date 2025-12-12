<div>
  <h1 align="center"><a href="https://www.epicweb.dev/workshops">React Fundamentals ⚛</a></h1>
  <strong>
    Learn the fundamental React features necessary for building applications and libraries
  </strong>
  <p>
    Learn everything you need to be effective with the fundamental building blocks of React applications. When you're finished, you'll understand how to create React components, handle errors, create form elements, and more.
  </p>
</div>

<hr />

<div align="center">
  <a
    alt="Epic Web logo with the words Deployed Version"
    href="https://fundamentals.epicreact.dev"
  >
    <img
      width="300px"
      src="https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/254000390-447a3559-e7b9-4918-947a-1b326d239771.png"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

- Basic understanding of HTML, CSS, JavaScript, and TypeScript
- Install the [React DevTools](https://react.dev/learn/react-developer-tools)

## Pre-workshop Resources

Here are some resources you can read before taking the workshop to get you up to
speed on some of the tools and concepts we'll be covering:

- [Get Started with React](https://github.com/epicweb-dev/get-started-with-react)
- [Beginner's TypeScript](https://www.totaltypescript.com/tutorials/beginners-typescript)
- [React with TypeScript](https://www.totaltypescript.com/tutorials/react-with-typescript)

## System Requirements

- [git][git] v2.18 or greater
- [NodeJS][node] v20 or greater
- [npm][npm] v8 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

Use the Epic Workshop CLI to get this setup:

```sh nonumber
npx epicshop@latest add react-fundamentals
```

If you experience errors here, please open [an issue][issue] with as many
details as you can offer.

## Starting the app

Once you have the setup finished, you can start the app with:

```
npm start
```

## The Workshop App

Learn all about the workshop app on the
[Epic Web Getting Started Guide](https://www.epicweb.dev/get-started).

[![Kent with the workshop app in the background](https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/280407082-0e012138-e01d-45d5-abf2-86ffe5d03c69.png)](https://www.epicweb.dev/get-started)

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/actions/workflow/status/epicweb-dev/react-fundamentals/validate.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/epicweb-dev/react-fundamentals/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/epicweb-dev/react-fundamentals/blob/main/LICENSE.md
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://kentcdodds.com/conduct
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/epicweb-dev/react-fundamentals/issues/new
<!-- prettier-ignore-end -->
