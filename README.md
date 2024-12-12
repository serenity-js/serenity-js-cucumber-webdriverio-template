# Serenity/JS Mocha WebdriverIO Template

[![Follow Serenity/JS on LinkedIn](https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin)](https://www.linkedin.com/company/serenity-js)
[![Watch Serenity/JS on YouTube](https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube)](https://www.youtube.com/@serenity-js)
[![Join Serenity/JS Community Chat](https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix)](https://matrix.to/#/#serenity-js:gitter.im)
[![GitHub stars](https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge)](https://github.com/serenity-js/serenity-js)
[![Support Serenity/JS on GitHub](https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github)](https://github.com/sponsors/serenity-js)

[![Build Status](https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template/actions/workflows/main.yml/badge.svg)](https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template/actions/workflows/main.yml)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod)](https://gitpod.io/from-referrer/)


Kickstart your web application acceptance testing with [Serenity/JS](https://serenity-js.org), [Cucumber](https://github.com/cucumber/cucumber-js),
and [WebdriverIO](https://webdriver.io/) using this template repository.

Learn more about Serenity/JS:
[Serenity/JS and WebdriverIO guide](https://serenity-js.org/handbook/test-runners/webdriverio/)

## 🚀 Quick Start

### 1. Create a Project

This repository is a GitHub template. Use it to [create a new GitHub repository](https://help.github.com/en/articles/creating-a-repository-from-a-template)
for your project.

If you prefer to work in a virtual environment, you can launch this repository in a [Gitpod](https://gitpod.io/from-referrer/) workspace.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

### 2. Set Up Your Environment

Install the required tools:

- [Node.js](https://nodejs.org/en/) (LTS version 18.12 or later)

- [Java](https://adoptopenjdk.net/) (JRE or JDK version 11 or later)

Follow the [installation guide](https://serenity-js.org/handbook/getting-started/installation/) to verify your setup.

### 3. Install Dependencies

[Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the project and run:

```
npm ci
```

This installs dependencies, including the [Serenity BDD CLI](https://serenity-js.org/handbook/reporting/serenity-bdd-reporter/).

### 4. Run Tests

Use the predefined [NPM scripts](https://docs.npmjs.com/cli/v10/using-npm/scripts) defined in [`package.json`](package.json) to run your tests
and related tasks:

```
npm test                # Run tests and generate reports
npm start               # Serve test reports at http://localhost:8080

npm run lint            # Run code linter
npm run lint:fix        # Try to automatically fix linting issues
npm run clean           # Remove test reports from any previous test run
```

### 5. Write your tests

Test scenarios are located in the [`./test/specs`](/test/specs) directory.
Modify the examples or write your own scenarios using the [Serenity/JS Screenplay Pattern](https://serenity-js.org/handbook/design/screenplay-pattern/).

## 🌟 Features

- **All automation tools ready to go**: Start testing immediately with WebdriverIO, Serenity/JS and Mocha already integrated and configured.
- **Serenity BDD Reports**: Serenity BDD reporter pre-configured with reports available at `./target/site/serenity`
    - **Published Reports**: Reports for this repository are published to GitHub Pages and available at https://serenity-js.github.io/serenity-js-cucumber-webdriverio-template/.
- **Screenplay Pattern**: Out-of-the-box integration with the Serenity/JS actors and Screenplay Pattern APIs
- **GitHub Actions**: Continuous Integration setup included
- **VS Code**: Pre-configured for a seamless developer experience

### 🔧 Configuration for Corporate Networks

If you're behind a proxy or use an internal registry, configure an [`.npmrc` file](https://docs.npmjs.com/cli/v6/configuring-npm/npmrc) in your home directory:

```
proxy=http://user:password@host.mycompany.com:8080/
https-proxy=http://user:password@host.mycompany.com:8080/
strict-ssl=false
registry=https://artifactory.mycompany.com/artifactory/
```

## 💡️ Learn Serenity/JS

- [Serenity/JS WebdriverIO integration guide](https://serenity-js.org/handbook/test-runners/webdriverio/) - Integrate Serenity/JS with your WebdriverIO test suite, enable Serenity BDD reports, and start using the Screenplay Pattern
- [Serenity/JS Handbook](https://serenity-js.org/handbook/) - Write high-quality automated acceptance tests with Serenity/JS
- [Serenity/JS API documentation](https://serenity-js.org/api/) - Explore Serenity/JS modules and features
- [Serenity/JS Project Templates](https://serenity-js.org/handbook/getting-started/project-templates/) - Kickstart your projects with best practices built right in

## 👋 Join the Serenity/JS Community

- [Serenity/JS Community chat channel](https://matrix.to/#/#serenity-js:gitter.im) - Meet Serenity/JS developers and maintainers
- [Serenity/JS Forum](https://github.com/orgs/serenity-js/discussions/categories/how-to) - Find answers to your Serenity/JS questions
- [Contribute to Serenity/JS](https://serenity-js.org/community/contributing/) - Learn how to propose features, report bugs, and contribute to the Serenity/JS codebase

## 📣 Stay up to date

- [Serenity/JS on YouTube](https://www.youtube.com/@serenity-js) - Subscribe for tutorials, demos, conference talks, and more
- [Serenity/JS on LinkedIn](https://www.linkedin.com/company/serenity-js) - Follow for release and community event announcements
- [Serenity/JS on GitHub](https://github.com/serenity-js/serenity-js) - Star Serenity/JS to help others discover the framework!

## 💛 Support Serenity/JS

Support our mission to make test automation collaborative and easier to scale. Become a Serenity/JS GitHub Sponsor today!

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/serenity-js)
