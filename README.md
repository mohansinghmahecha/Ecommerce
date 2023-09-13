# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment


PS D:\e-commerce\myecommerce> npm i axios

added 3 packages, and audited 1551 packages in 6s

247 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS D:\e-commerce\myecommerce> git init
Reinitialized existing Git repository in D:/e-commerce/myecommerce/.git/
PS D:\e-commerce\myecommerce> git commit -m "first commit"
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   package-lock.json
        modified:   package.json
        modified:   src/App.css
        modified:   src/App.js
        modified:   src/App.test.js
        modified:   src/index.css
        modified:   src/index.js
        modified:   src/reportWebVitals.js
        modified:   src/setupTests.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        public/google.png
        public/hero.jpg
        public/logo.png
        src/About.js
        src/Cart.js
        src/Contact.js
        src/ErrorPage.js
        src/GlobalStyle.js
        src/Helpers/
        src/Home.js
        src/Products.js
        src/SingleProduct.js
        src/components/
        src/context/
        src/db.json
        src/reducer/
        src/styles/

no changes added to commit (use "git add" and/or "git commit -a")
PS D:\e-commerce\myecommerce> git add .
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/db.json', LF will be replaced by CRLF the next time Git touches it
PS D:\e-commerce\myecommerce>  git commit -m "first commit " 
[master 45364d3] first commit
 34 files changed, 2571 insertions(+), 35 deletions(-)
 create mode 100644 public/google.png
 create mode 100644 public/hero.jpg
 create mode 100644 public/logo.png
 create mode 100644 src/About.js
 create mode 100644 src/Cart.js
 create mode 100644 src/Contact.js
 create mode 100644 src/ErrorPage.js
 create mode 100644 src/GlobalStyle.js
 create mode 100644 src/Helpers/FormetPrice.js
 create mode 100644 src/Home.js
 create mode 100644 src/Products.js
 create mode 100644 src/SingleProduct.js
 create mode 100644 src/components/AddToCard.js
 create mode 100644 src/components/CartAmountToggle.js
 create mode 100644 src/components/FeatureProduct.js
 create mode 100644 src/components/Footer.js
 create mode 100644 src/components/Header.js
 create mode 100644 src/components/HeroSection.js
 create mode 100644 src/components/MyImage.js
 create mode 100644 src/components/Nav.js
 create mode 100644 src/components/PageNavigation.js
 create mode 100644 src/components/Product.js
 create mode 100644 src/components/Services.js
 create mode 100644 src/components/Star.js
 create mode 100644 src/components/Trusted.js
 create mode 100644 src/context/productcontex.js
 create mode 100644 src/db.json
 create mode 100644 src/reducer/productReducer.js
 create mode 100644 src/styles/Button.js
 create mode 100644 src/styles/Container.js
PS D:\e-commerce\myecommerce> git remote add origin https://github.com/mohansinghmahecha/Ecommerce.git
PS D:\e-commerce\myecommerce> git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/mohansinghmahecha/Ecommerce.git'
PS D:\e-commerce\myecommerce> git push -u origin     
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS D:\e-commerce\myecommerce>  git remote add main git remote add origin https://github.com/mohansinghmahecha/Ecommerce.git
usage: git remote add [<options>] <name> <url>

    -f, --fetch           fetch the remote branches
    --tags                import all tags and associated objects when fetching
                          or do not fetch any tag at all (--no-tags)
    -t, --track <branch>  branch(es) to track
    -m, --master <branch> master branch
    --mirror[=(push|fetch)]
                          set up remote as a mirror to push to or fetch from

PS D:\e-commerce\myecommerce> git branch
* master
PS D:\e-commerce\myecommerce> 
PS D:\e-commerce\myecommerce> git checkout -b main
>>
Switched to a new branch 'main'
PS D:\e-commerce\myecommerce> git push -u origin main
>> 
info: please complete authentication in your browser...
Enumerating objects: 65, done.
Counting objects: 100% (65/65), done.
Delta compression using up to 16 threads
Compressing objects: 100% (62/62), done.
Writing objects: 100% (65/65), 771.00 KiB | 13.07 MiB/s, done.
Total 65 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), done.
To https://github.com/mohansinghmahecha/Ecommerce.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS D:\e-commerce\myecommerce> git remote -v
>>
origin  https://github.com/mohansinghmahecha/Ecommerce.git (fetch)
origin  https://github.com/mohansinghmahecha/Ecommerce.git (push)
PS D:\e-commerce\myecommerce> git remote set-url origin https://github.com/mohansinghmahecha/Ecommerce.git
PS D:\e-commerce\myecommerce> 
PS D:\e-commerce\myecommerce> git push
>>
Everything up-to-date

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
