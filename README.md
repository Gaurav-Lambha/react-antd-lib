# React 18 Component Library with Storybook

This is a sample react component library. Installing it in your project is not very useful.
Visit the GitHub project and follow the instuctions below to create your own library.

## Installation

Use `npm` with flag `--legacy-peer-deps` to install dependencies.

```
npm install --legacy-peer-deps
```

> ❗️ Don't use yarn. It cannot resolve the dependecies correctly in this case.

### But Why?

Storybook has a peer dependency to `@mdx-js/react` that uses react@17. Until the package is updated you have to install it with `--legacy-peer-deps`

## Publish

You can publish the library to GitHub Packages or npm.

### GitHub Packages

1. init git repo (with `.gitignore` and so on...)
2. push repo to GitHub
3. add the following into the package.json

```json
{
  "name": "@YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/YOUR_GITHUB_USERNAME"
  },
  ...
}
```

4. create a personal access token on GitHub (https://github.com/settings/tokens) with permission `write:packages`
5. modify your local `.npmrc` file (https://docs.npmjs.com/cli/v7/configuring-npm/npmrc) as follows

```json
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

> ❗️ Replace YOUR_AUTH_TOKEN with the newly generated GitHub Token, and YOUR_GITHUB_USERNAME with ... your username . Leave the `//` at the beginning of the last line 
6. Run

```
npm publish
```

### npm

Most of the steps from above are the same...

1. same
2. same
3. add the following into the package.json

```json
{
  "name": "@YOUR_NPM_USERNAME/YOUR_REPOSITORY_NAME",
  "publishConfig": {
    "registry": "https://registry.npmjs.org/",
    "access": "public"
  },
  ...
}
```

4. create a personal access token on npm.

- Click on your profile picture and then "Access Tokens"
- Click "Generate New Token" and choose "Automation" option to bypass 2FA

5. modify your local `.npmrc` file (https://docs.npmjs.com/cli/v7/configuring-npm/npmrc) as follows

```json
registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=YOUR_ACCESS_TOKEN
```

6. same

> 💡 Adding different profiles to your .npmrc file enables you to publish in different scopes e.g. `@yourusername/my-package` and `@yourcompany/my-other-package` (https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

## Consume

When you've published the library you can find the package at your GitHub profile page under the `Packages` tab (e.g. https://github.com/ppulwey?tab=packages)
You can install it as you're should be familiar with...

```
npm install @myusername/package-name
```

or

```
yarn add @myusername/package-name
```

## Update the package

When you want to update the package, increase the version number in the `package.json` file manually or with npm-version (https://docs.npmjs.com/cli/v8/commands/npm-version).

Then run

```
npm publish
```

## Installing this  package
You can install packages from GitHub Packages by adding the packages as dependencies in the package.json file for your project.

1. Install via package.json:

```
"@gaurav-lambha/react-antd-lib": "0.0.12"
```

2. Install from the command line:

```
npm install @gaurav-lambha/react-antd-lib@0.0.12
```

3. .npmrc file

In the same directory as your package.json file, create or edit an .npmrc file to include a line specifying GitHub Packages URL and the account owner. Replace ``OWNER`` with the name of the user or organization account that owns the repository containing your project.

```
Ex: @OWNER:registry=https://npm.pkg.github.com
```

```
@gaurav-lambha:registry=https://npm.pkg.github.com
```


---

Tribute to _Gaurav Lambha_

For full instructions how to setup a React Library with Storybook see his great tutorial I've stolen from: https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe?signin=true#adding-storybook

---




