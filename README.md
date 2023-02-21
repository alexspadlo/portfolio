## Setup husky

 - `yarn husky install`
 - `yarn husky add .husky/pre-commit "yarn lint-staged"`
 - `yarn husky add .husky/pre-push "yarn test"`