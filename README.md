<div>
  <h1 align="center"><a href="https://epicreact.dev/fundamentals">React Fundamentals 🚀 EpicReact.Dev</a></h1>
  <strong>
    Learn the foundational concepts necessary for building
    React applications and libraries
  </strong>
  <p>
    Learn everything you need to be effective with the fundamental building
    block of React applications. When you're finished, you'll be prepared to
    create React components to build excellent experiences for your app's users.
  </p>

  <a href="https://epicreact.dev">
    <img
      alt="Learn React from Start to Finish"
      src="https://kentcdodds.com/images/epicreact-promo/er-1.gif"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![All Contributors][all-contributors-badge]](#contributors-)
[![Code of Conduct][coc-badge]][coc]
[![Gitpod ready-to-code][gitpod-badge]](https://gitpod.io/#https://github.com/kentcdodds/react-fundamentals)
<!-- prettier-ignore-end -->

## Prerequisites

- Read through
  ["JavaScript to Know for React"](https://kentcdodds.com/blog/javascript-to-know-for-react)
- Install the React DevTools
  ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  (recommended),
  [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))

> NOTE: The EpicReact.dev videos were recorded with React version ^16.13 and all
> material in this repo has been updated to React version ^18. Differences are
> minor and any relevant differences are noted in the instructions.

## Quick start

It's recommended you run everything in the same environment you work in every
day, but if you don't want to set up the repository locally, you can get started
in one click with [Gitpod](https://gitpod.io),
[CodeSandbox](https://codesandbox.io/s/github/kentcdodds/react-fundamentals), or
by following the [video demo](https://www.youtube.com/watch?v=gCoVJm3hGk4)
instructions for [GitHub Codespaces](https://github.com/features/codespaces).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/kentcdodds/react-fundamentals)

For a local development environment, follow the instructions below

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `>=16`
- [npm][npm] v8.16.0 or greater

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

> If you want to commit and push your work as you go, you'll want to
> [fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
> first and then clone your fork rather than this repo directly.

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```shell
git clone https://github.com/kentcdodds/react-fundamentals.git
cd react-fundamentals
node setup
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier.

A few common issues during `node setup` have involved PATH variables (above
links or [here](https://github.com/kentcdodds/react-fundamentals/issues/27)),
reinstalling git, node, or npm, and clearing npm caches.

If you get any errors, please read through them and see if you can find out what
the problem is. If you can't work it out on your own then please [file an
issue][issue] and provide _all_ the output from the commands you ran (even if
it's a lot).

If you can't get the setup script to work, then just make sure you have the
right versions of the requirements listed above, and run the following commands:

```shell
npm install
npm run validate
```

If you are still unable to fix issues and you know how to use Docker 🐳 you can
setup the project with the following command:

```shell
docker-compose up
```

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

You can also open
[the deployment of the app on Netlify](https://react-fundamentals.netlify.app/).

## Running the tests

```shell
npm test
```

This will start [Jest](https://jestjs.io/) in watch mode. Read the output and
play around with it. The tests are there to help you reach the final version,
however _sometimes_ you can accomplish the task and the tests still fail if you
implement things differently than I do in my solution, so don't look to them as
a complete authority.

### Exercises

- `src/exercise/00.md`: Background, Exercise Instructions, Extra Credit
- `src/exercise/00.js`: Exercise with Emoji helpers
- `src/__tests__/00.js`: Tests
- `src/final/00.js`: Final version
- `src/final/00.extra-0.js`: Final version of extra credit

The purpose of the exercise is **not** for you to work through all the material.
It's intended to get your brain thinking about the right questions to ask me as
_I_ walk through the material.

### Helpful Emoji 🐨 💰 💯 📝 🦉 📜 💣 💪 🏁 👨‍💼 🚨

Each exercise has comments in it to help you get through the exercise. These fun
emoji characters are here to help you.

- **Kody the Koala** 🐨 will tell you when there's something specific you should
  do
- **Marty the Money Bag** 💰 will give you specific tips (and sometimes code)
  along the way
- **Hannah the Hundred** 💯 will give you extra challenges you can do if you
  finish the exercises early.
- **Nancy the Notepad** 📝 will encourage you to take notes on what you're
  learning
- **Olivia the Owl** 🦉 will give you useful tidbits/best practice notes and a
  link for elaboration and feedback.
- **Dominic the Document** 📜 will give you links to useful documentation
- **Berry the Bomb** 💣 will be hanging around anywhere you need to blow stuff
  up (delete code)
- **Matthew the Muscle** 💪 will indicate that you're working with an exercise
- **Chuck the Checkered Flag** 🏁 will indicate that you're working with a final
- **Peter the Product Manager** 👨‍💼 helps us know what our users want
- **Alfred the Alert** 🚨 will occasionally show up in the test failures with
  potential explanations for why the tests are failing.

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/react-fundamentals/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/react-fundamentals/commits?author=kentcdodds" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://stackshare.io/jdorfman/decisions"><img src="https://avatars1.githubusercontent.com/u/398230?v=4?s=100" width="100px;" alt="Justin Dorfman"/><br /><sub><b>Justin Dorfman</b></sub></a><br /><a href="#fundingFinding-jdorfman" title="Funding Finding">🔍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.benmvp.com"><img src="https://avatars3.githubusercontent.com/u/5714478?v=4?s=100" width="100px;" alt="Ben Ilegbodu"/><br /><sub><b>Ben Ilegbodu</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=benmvp" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/belcherj"><img src="https://avatars1.githubusercontent.com/u/6817400?v=4?s=100" width="100px;" alt="Jonathan Belcher"/><br /><sub><b>Jonathan Belcher</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=belcherj" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rhefner"><img src="https://avatars1.githubusercontent.com/u/8144799?v=4?s=100" width="100px;" alt="Richard Hefner"/><br /><sub><b>Richard Hefner</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=rhefner" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://zacjones.io"><img src="https://avatars2.githubusercontent.com/u/6188161?v=4?s=100" width="100px;" alt="Zac Jones"/><br /><sub><b>Zac Jones</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=zacjones93" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ricardobusquet.com"><img src="https://avatars1.githubusercontent.com/u/7198302?v=4?s=100" width="100px;" alt="Ricardo Busquet"/><br /><sub><b>Ricardo Busquet</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=rbusquet" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sleepyArpan"><img src="https://avatars3.githubusercontent.com/u/50901152?v=4?s=100" width="100px;" alt="Arpan Chattopadhyay"/><br /><sub><b>Arpan Chattopadhyay</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=sleepyArpan" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/marcosvega91"><img src="https://avatars2.githubusercontent.com/u/5365582?v=4?s=100" width="100px;" alt="Marco Moretti"/><br /><sub><b>Marco Moretti</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=marcosvega91" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://cindywu.org"><img src="https://avatars3.githubusercontent.com/u/1177031?v=4?s=100" width="100px;" alt="cindy"/><br /><sub><b>cindy</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=cindywu" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lifeiscontent.net/"><img src="https://avatars3.githubusercontent.com/u/180963?v=4?s=100" width="100px;" alt="Aaron Reisman"/><br /><sub><b>Aaron Reisman</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=lifeiscontent" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dev.to/jacobmgevans"><img src="https://avatars1.githubusercontent.com/u/27247160?v=4?s=100" width="100px;" alt="Jacob M-G Evans"/><br /><sub><b>Jacob M-G Evans</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/pulls?q=is%3Apr+reviewed-by%3AJacobMGEvans" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jsehull.com"><img src="https://avatars1.githubusercontent.com/u/9935383?v=4?s=100" width="100px;" alt="Jesse Hull"/><br /><sub><b>Jesse Hull</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=jsehull" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tcaraccia-riv"><img src="https://avatars2.githubusercontent.com/u/64477810?v=4?s=100" width="100px;" alt="Tomas Caraccia"/><br /><sub><b>Tomas Caraccia</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=tcaraccia-riv" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://vk.com/vasilii_kovalev"><img src="https://avatars0.githubusercontent.com/u/10310491?v=4?s=100" width="100px;" alt="Vasilii Kovalev"/><br /><sub><b>Vasilii Kovalev</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=vasilii-kovalev" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/FelixGeelhaar"><img src="https://avatars0.githubusercontent.com/u/6020564?v=4?s=100" width="100px;" alt="Felix Geelhaar"/><br /><sub><b>Felix Geelhaar</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=FelixGeelhaar" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/apolakipso"><img src="https://avatars2.githubusercontent.com/u/494674?v=4?s=100" width="100px;" alt="Apola Kipso"/><br /><sub><b>Apola Kipso</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=apolakipso" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dcgoodwin2112"><img src="https://avatars1.githubusercontent.com/u/4554388?v=4?s=100" width="100px;" alt="dcgoodwin2112"/><br /><sub><b>dcgoodwin2112</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/issues?q=author%3Adcgoodwin2112" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/pritamsangani/"><img src="https://avatars3.githubusercontent.com/u/22857896?v=4?s=100" width="100px;" alt="Pritam Sangani"/><br /><sub><b>Pritam Sangani</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=PritamSangani" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rchinerman"><img src="https://avatars3.githubusercontent.com/u/17489675?v=4?s=100" width="100px;" alt="Ryan Hinerman"/><br /><sub><b>Ryan Hinerman</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=rchinerman" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/react-fundamentals/commits?author=rchinerman" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Marcoj776"><img src="https://avatars0.githubusercontent.com/u/9052097?v=4?s=100" width="100px;" alt="Marco"/><br /><sub><b>Marco</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/issues?q=author%3AMarcoj776" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://peter.hozak.info/"><img src="https://avatars0.githubusercontent.com/u/1087670?v=4?s=100" width="100px;" alt="Peter Hozák"/><br /><sub><b>Peter Hozák</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=Aprillion" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/emzoumpo"><img src="https://avatars2.githubusercontent.com/u/2103443?v=4?s=100" width="100px;" alt="Emmanouil Zoumpoulakis"/><br /><sub><b>Emmanouil Zoumpoulakis</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=emzoumpo" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://navneet-sahota.netlify.com"><img src="https://avatars1.githubusercontent.com/u/34404592?v=4?s=100" width="100px;" alt="Navneet Sahota"/><br /><sub><b>Navneet Sahota</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=Navneet-Sahota" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rodrigofuentes"><img src="https://avatars1.githubusercontent.com/u/7374840?v=4?s=100" width="100px;" alt="Rodrigo Fuentes"/><br /><sub><b>Rodrigo Fuentes</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=rodrigofuentes" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://magrippis.com"><img src="https://avatars0.githubusercontent.com/u/3502800?v=4?s=100" width="100px;" alt="Johnny Magrippis"/><br /><sub><b>Johnny Magrippis</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=jmagrippis" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://acharyaroshan.com.np"><img src="https://avatars2.githubusercontent.com/u/56434316?v=4?s=100" width="100px;" alt="Roshan Acharya"/><br /><sub><b>Roshan Acharya</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=coderosh" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/decisa"><img src="https://avatars0.githubusercontent.com/u/35339760?v=4?s=100" width="100px;" alt="Art Telesh"/><br /><sub><b>Art Telesh</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=decisa" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/react-fundamentals/commits?author=decisa" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/merodiro"><img src="https://avatars1.githubusercontent.com/u/17033502?v=4?s=100" width="100px;" alt="Amr A.Mohammed"/><br /><sub><b>Amr A.Mohammed</b></sub></a><br /><a href="#ideas-merodiro" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DRS90"><img src="https://avatars1.githubusercontent.com/u/22821570?v=4?s=100" width="100px;" alt="Douglas"/><br /><sub><b>Douglas</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=DRS90" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/allstargaurav"><img src="https://avatars3.githubusercontent.com/u/24932097?v=4?s=100" width="100px;" alt="Gaurav"/><br /><sub><b>Gaurav</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=allstargaurav" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/LauraOneasca"><img src="https://avatars2.githubusercontent.com/u/31212753?v=4?s=100" width="100px;" alt="LauraOneasca"/><br /><sub><b>LauraOneasca</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=LauraOneasca" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt="Michaël De Boey"/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=MichaelDeBoey" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://xiphe.net"><img src="https://avatars1.githubusercontent.com/u/911218?v=4?s=100" width="100px;" alt="Hannes Diercks"/><br /><sub><b>Hannes Diercks</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=Xiphe" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/denno020"><img src="https://avatars2.githubusercontent.com/u/2059313?v=4?s=100" width="100px;" alt="Luke"/><br /><sub><b>Luke</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/issues?q=author%3Adenno020" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://tonidezman.github.io/"><img src="https://avatars0.githubusercontent.com/u/11177270?v=4?s=100" width="100px;" alt="Toni Dezman"/><br /><sub><b>Toni Dezman</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=tonidezman" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bobbywarner.com"><img src="https://avatars0.githubusercontent.com/u/554961?v=4?s=100" width="100px;" alt="Bobby Warner"/><br /><sub><b>Bobby Warner</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=bobbywarner" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/PunkSage"><img src="https://avatars2.githubusercontent.com/u/1321225?v=4?s=100" width="100px;" alt="Konrad Szałwiński"/><br /><sub><b>Konrad Szałwiński</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=PunkSage" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://au.linkedin.com/pub/yaseen-kadir/102/99a/49a"><img src="https://avatars1.githubusercontent.com/u/8746946?v=4?s=100" width="100px;" alt="Yaseen Kadir"/><br /><sub><b>Yaseen Kadir</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/issues?q=author%3Ayaseenkadir" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://viglucci.io"><img src="https://avatars0.githubusercontent.com/u/6305490?v=4?s=100" width="100px;" alt="Kevin Viglucci"/><br /><sub><b>Kevin Viglucci</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=viglucci" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.iliyan-trifonov.com"><img src="https://avatars.githubusercontent.com/u/2099265?v=4?s=100" width="100px;" alt="Iliyan Trifonov"/><br /><sub><b>Iliyan Trifonov</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=iliyan-trifonov" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dev.to/oscardom"><img src="https://avatars.githubusercontent.com/u/2574275?v=4?s=100" width="100px;" alt="Oscar Dominguez"/><br /><sub><b>Oscar Dominguez</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=oscard0m" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://cpcomponents.com"><img src="https://avatars.githubusercontent.com/u/32409546?v=4?s=100" width="100px;" alt="Aaron Casanova"/><br /><sub><b>Aaron Casanova</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=aaronccasanova" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kylegach.com"><img src="https://avatars.githubusercontent.com/u/486540?v=4?s=100" width="100px;" alt="Kyle Gach"/><br /><sub><b>Kyle Gach</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=kylegach" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://antdke.co"><img src="https://avatars.githubusercontent.com/u/22419667?v=4?s=100" width="100px;" alt="Anthony Diké"/><br /><sub><b>Anthony Diké</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=antdke" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.omscs-notes.com"><img src="https://avatars.githubusercontent.com/u/19544466?v=4?s=100" width="100px;" alt="Matt Schlenker"/><br /><sub><b>Matt Schlenker</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=m4ttsch" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Siemik"><img src="https://avatars.githubusercontent.com/u/45874801?v=4?s=100" width="100px;" alt="Jakub"/><br /><sub><b>Jakub</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=Siemik" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://debone.com.br"><img src="https://avatars.githubusercontent.com/u/763457?v=4?s=100" width="100px;" alt="Victor Debone"/><br /><sub><b>Victor Debone</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=debone" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://medium.com/@lifeparticle"><img src="https://avatars.githubusercontent.com/u/1612112?v=4?s=100" width="100px;" alt="Mahbub Zaman"/><br /><sub><b>Mahbub Zaman</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=lifeparticle" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://mokajima.com/"><img src="https://avatars.githubusercontent.com/u/10166985?v=4?s=100" width="100px;" alt="Misaki Okajima"/><br /><sub><b>Misaki Okajima</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=mokajima" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/marioleed"><img src="https://avatars.githubusercontent.com/u/1763448?v=4?s=100" width="100px;" alt="Mario Sannum"/><br /><sub><b>Mario Sannum</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=marioleed" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/octokatherine"><img src="https://avatars.githubusercontent.com/u/49968061?v=4?s=100" width="100px;" alt="Katherine Peterson"/><br /><sub><b>Katherine Peterson</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=octokatherine" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://alexcwatt.com/"><img src="https://avatars.githubusercontent.com/u/494201?v=4?s=100" width="100px;" alt="Alex Watt"/><br /><sub><b>Alex Watt</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=alexcwatt" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nedredmond"><img src="https://avatars.githubusercontent.com/u/23404711?v=4?s=100" width="100px;" alt="Ned Redmond"/><br /><sub><b>Ned Redmond</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=nedredmond" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ozadari5"><img src="https://avatars.githubusercontent.com/u/92675396?v=4?s=100" width="100px;" alt="Oz Adari"/><br /><sub><b>Oz Adari</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=ozadari5" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cRAN-cg"><img src="https://avatars.githubusercontent.com/u/8614844?v=4?s=100" width="100px;" alt="Chiranjeev Gupta"/><br /><sub><b>Chiranjeev Gupta</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=cRAN-cg" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sunnatganiev"><img src="https://avatars.githubusercontent.com/u/38115176?v=4?s=100" width="100px;" alt="Sunnatullo Ganiev"/><br /><sub><b>Sunnatullo Ganiev</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=sunnatganiev" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jcat4"><img src="https://avatars.githubusercontent.com/u/7866287?v=4?s=100" width="100px;" alt="Joey Cardosi"/><br /><sub><b>Joey Cardosi</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=jcat4" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Havock94"><img src="https://avatars.githubusercontent.com/u/7635248?v=4?s=100" width="100px;" alt="Luca"/><br /><sub><b>Luca</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=Havock94" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/anjola-adeuyi/"><img src="https://avatars.githubusercontent.com/u/57623705?v=4?s=100" width="100px;" alt="Anjola Adeuyi"/><br /><sub><b>Anjola Adeuyi</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=anjola-adeuyi" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ASPzoomin"><img src="https://avatars.githubusercontent.com/u/20736334?v=4?s=100" width="100px;" alt="Sai Pavan"/><br /><sub><b>Sai Pavan</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=ASPzoomin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jmurphyau"><img src="https://avatars.githubusercontent.com/u/445432?v=4?s=100" width="100px;" alt="James Murphy"/><br /><sub><b>James Murphy</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/issues?q=author%3Ajmurphyau" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jgorfine-zendesk"><img src="https://avatars.githubusercontent.com/u/93289772?v=4?s=100" width="100px;" alt="Jen Gorfine"/><br /><sub><b>Jen Gorfine</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/issues?q=author%3Ajgorfine-zendesk" title="Bug reports">🐛</a> <a href="#a11y-jgorfine-zendesk" title="Accessibility">️️️️♿️</a> <a href="https://github.com/kentcdodds/react-fundamentals/commits?author=jgorfine-zendesk" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ambujsahu81"><img src="https://avatars.githubusercontent.com/u/118078892?v=4?s=100" width="100px;" alt="Ambuj sahu"/><br /><sub><b>Ambuj sahu</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=ambujsahu81" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mattchannn"><img src="https://avatars.githubusercontent.com/u/48675050?v=4?s=100" width="100px;" alt="Mat Chan"/><br /><sub><b>Mat Chan</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=mattchannn" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jkrooncoding"><img src="https://avatars.githubusercontent.com/u/27491767?v=4?s=100" width="100px;" alt="Jesse Kroon"/><br /><sub><b>Jesse Kroon</b></sub></a><br /><a href="https://github.com/kentcdodds/react-fundamentals/commits?author=jkrooncoding" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## Workshop Feedback

Each exercise has an Elaboration and Feedback link. Please fill that out after
the exercise and instruction.

At the end of the workshop, please go to this URL to give overall feedback.
Thank you! [https://kcd.im/rf-ws-feedback](https://kcd.im/rf-ws-feedback)

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/workflow/status/kentcdodds/react-fundamentals/validate/main?logo=github&style=flat-square
[build]: https://github.com/kentcdodds/react-fundamentals/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/react-fundamentals/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[gitpod-badge]: https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod
[coc]: https://github.com/kentcdodds/react-fundamentals/blob/main/CODE_OF_CONDUCT.md
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/kentcdodds/react-fundamentals?color=orange&style=flat-square
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/react-fundamentals/issues/new
<!-- prettier-ignore-end -->
