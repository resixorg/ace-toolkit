# Ace-screener

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## NPM
NPM is managed using [NVM (Node Version Manager)][1].

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development
* Run the command `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

In case the `ember` command is not found, this is probably due to the fact that NVM has not picked up the definition in the `.nvmrc` file, and therefore not switched to the f

Execute the command `nvm use` to force NVM to read the local `.nvmrc` file and use the correct version of Node and NPM.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

# Upgrading
1) Edit bower.js
2) Run `bower install`

# References
[1]: https://github.com/creationix/nvm      "NVM"

