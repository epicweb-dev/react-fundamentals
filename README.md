# React Fundamentals

👋 hi there! My name is [Kent C. Dodds](https://kentcdodds.com)! This is a
workshop repo to teach you the fundamentals of ReactJS!

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![AppVeyor Build Status][win-build-badge]][win-build]
[![Code Coverage][coverage-badge]][coverage]
[![GPL 3.0 License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Pre-Workshop Instructions/Requirements

In order for us to maximize our efforts during the workshop, please complete the
following things to prepare.

- 📺 indicates steps that are only necessary if the workshop is remote via Zoom
- 👋 indicates steps that are specific to the material for this workshop

- [ ] 👋 Setup the project (follow the setup instructions below) (~5 minutes)
- [ ] 📺 Install and setup [Zoom](https://zoom.us) on the computer you will be
      using (~5 minutes)
- [ ] 📺 Watch
      [Use Zoom for KCD Workshops](https://egghead.io/lessons/egghead-use-zoom-for-kcd-workshops)
      (~8 minutes).
- [ ] Watch
      [Setup and Logistics for KCD Workshops](https://egghead.io/lessons/egghead-setup-and-logistics-for-kcd-workshops)
      (~24 minutes). Please do NOT skip this step.
- [ ] 👋 Install the React DevTools
      ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
      (recommended),
      [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))
- [ ] 👋 Attend my
      [Modern JavaScript Workshop](https://kentcdodds.com/workshops/modern-javascript)
      or have the equivalent experience with modern JavaScript APIs.
- [ ] 👋 Have experience with HTML, CSS, and DOM APIs.

The more prepared you are for the workshop, the better it will go for you.

## Workshop Outline

Here are the topics we'll be covering:

- Create DOM with JavaScript, React, and JSX
- Create Custom Components
- Styling
- Simple Forms (form submission)
- Dynamic Forms (client-side form validation)
- Controlled Forms (form state management)
- Rendering Lists of Data

## System Requirements

- [git][git] v2 or greater
- [NodeJS][node] v10 or greater
- [npm][npm] v6 or greater

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

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/kentcdodds/react-fundamentals.git
cd react-fundamentals
npm run setup --silent
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier If you get any errors, please read through
them and see if you can find out what the problem is. If you can't work it out
on your own then please [file an issue][issue] and provide _all_ the output from
the commands you ran (even if it's a lot).

You may be able to work through the entire workshop in the browser. Go to
[this codesandbox](https://codesandbox.io/s/github/kentcdodds/react-fundamentals)
and you should be good to go. Note that sometimes people have trouble with
codesandbox not working quite right with tests, but you should be able to work
around that. If you're concerned, then it would probably be better to just set
things up locally.

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

You can also open
[the deployment of the app on Netlify](https://react-fundamentals.netlify.com/).

## Running the tests

```shell
npm test
```

This will start [Jest](https://jestjs.io/) in watch mode. Read the output and
play around with it. The tests are there to help you reach the final version,
however _sometimes_ you can accomplish the task and the tests still fail if you
implement things differently than I do in my solution, so don't look to them as
a complete authority.

## Helpful Emoji 🐨 💪 🏁 💰 💯 🦉 📜 💣 👨‍💼 🚨

Each exercise has comments in it to help you get through the exercise. These fun
emoji characters are here to help you.

- **Kody the Koala Bear** 🐨 will tell you when there's something specific you
  should do
- **Matthew the Muscle** 💪 will indicate what you're working with an exercise
- **Chuck the Checkered Flag** 🏁 will indicate that you're working with a final
  version
- **Marty the Money Bag** 💰 will give you specific tips (and sometimes code)
  along the way
- **Hannah the Hundred** 💯 will give you extra challenges you can do if you
  finish the exercises early.
- **Olivia the Owl** 🦉 will give you useful tidbits/best practice notes and a
  link for elaboration and feedback.
- **Dominic the Document** 📜 will give you links to useful documentation
- **Berry the Bomb** 💣 will be hanging around anywhere you need to blow stuff
  up (delete code)
- **Peter the Product Manager** 👨‍💼 helps us know what our users want
- **Alfred the Alert** 🚨 will occasionally show up in the test failures with
  potential explanations for why the tests are failing.

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/react-fundamentals/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/react-fundamentals/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://stackshare.io/jdorfman/decisions"><img src="https://avatars1.githubusercontent.com/u/398230?v=4" width="100px;" alt="Justin Dorfman"/><br /><sub><b>Justin Dorfman</b></sub></a><br /><a href="#fundingFinding-jdorfman" title="Funding Finding">🔍</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## License

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). If you
would like to use this material to conduct your own workshop, please contact me
at kent@doddsfamily.us

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/travis/kentcdodds/react-fundamentals.svg?style=flat-square&logo=travis
[build]: https://travis-ci.org/kentcdodds/react-fundamentals
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/react-fundamentals/blob/master/README.md#license
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/react-fundamentals/blob/master/CODE_OF_CONDUCT.md
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/react-fundamentals/issues/new
[win-build-badge]: https://img.shields.io/appveyor/ci/kentcdodds/react-fundamentals.svg?style=flat-square&logo=appveyor
[win-build]: https://ci.appveyor.com/project/kentcdodds/react-fundamentals
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/react-fundamentals.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/react-fundamentals
<!-- prettier-ignore-end -->
