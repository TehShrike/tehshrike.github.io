# TehShrike

Browsing through my [public code on Github](https://github.com/TehShrike?tab=repositories) is painful with all the forks and irrelevant repos.

This curated list of my open source projects is for people interested in the JavaScript code I've written or the framework of tools I'm building for myself.

## Elsewhere on the internet

- Twitter: [twitter.com/tehshrike](https://twitter.com/tehshrike)
- Home page/blog: [joshduff.com](http://joshduff.com/)
- npm: [www.npmjs.com/~tehshrike](https://www.npmjs.com/~tehshrike)

# Open source code

If one of my repos isn't on this list it's because I don't think it's worth caring about, or because I wrote it since the last time I updated this list ^_^

To suggest changes, open pull requests [here](https://github.com/TehShrike/tehshrike.github.io/blob/master/index.md).

## Apps

- **[communal-checklist](https://github.com/TehShrike/communal-checklist)**: a gift registry site with as little friction as possible.  Available at [communalchecklist.com](http://communalchecklist.com/)
- **[c25k](https://github.com/TehShrike/c25k)**: visual direction and record keeping for my couch-to-5k attempt
- **[k](https://github.com/TehShrike/k)**: command-line-interface for [Kanbanize](https://kanbanize.com/)
- **[susd-search-site](https://github.com/TehShrike/susd-search-site)**: an improved index of videos from my favorite table top game reviewers.  Available at [susdsearch.com](https://susdsearch.com)

## General interest

- **[shell-tag](https://github.com/TehShrike/shell-tag)**: a string template tag so you can write shell scripts with JS instead of bash
- **[lieutenant](https://github.com/TehShrike/lieutenant)**: command-line argument parser.  For apps with git-like commands like "git stash pop" instead of traditional args you'd just use [minimist](https://github.com/substack/minimist) for
- **[just-flatten](https://github.com/TehShrike/just-flatten)**: array flattening in the simplest code possible
- **[async-all](https://github.com/TehShrike/async-all)**: like [async-each](https://github.com/paulmillr/async-each) but for a map of functions instead of an array of functions
- **[mannish](https://github.com/TehShrike/mannish)**: implementation of the mediator pattern for your stateful JS apps
- **[weak-type-wizard](https://github.com/TehShrike/weak-type-wizard)**: - enforce a schema for your objects, using casting functions you can define
- **[financial-arithmetic-functions](https://github.com/TehShrike/financial-arithmetic-functions)**: add/subtract/multiply functions for arbitrarily large numbers
- **[financial-arithmeticator](https://github.com/TehShrike/financial-arithmeticator)**: higher-level library for manipulating financial numbers without floating point math
- **[gate-keeper](https://github.com/TehShrike/gate-keeper)**: guarantee that only one async job will run at a time
- **[sql-concat](https://github.com/TehShrike/sql-concat)**: dynamically build SQL queries with minimal fuss and zero magic
- **[sql-tagged-template-literal](https://github.com/TehShrike/sql-tagged-template-literal)**: use template strings to create SQL queries
- **[add-affiliate-querystring](https://github.com/TehShrike/add-affiliate-querystring)**: add Amazon affiliate querystrings to any url
- **[read-write-lock](https://github.com/TehShrike/read-write-lock)**: allow either a single writer or multiple readers to access a resource in a single process
- **[key-master](https://github.com/TehShrike/key-master)**: eliminate "add a default value to a map if it doesn't exist yet" boilerplate
- **[combine-arrays](https://github.com/TehShrike/combine-arrays)**: so you can iterate over multiple arrays at once
- **[private-static-website](https://github.com/TehShrike/private-static-website)**: a static content server that protects content behind email validation
- **[private-github-website](https://github.com/TehShrike/private-github-website)**: hosts content from Github as a private site
- **[gzip-all](https://github.com/TehShrike/gzip-all)**: create `.gz` files for all files matching a glob path
- **[generate-gedcom](https://github.com/TehShrike/generate-gedcom)**: serialize a geneology data structure into GEDCOM

## For use with another library/service

#### Joi

[Joi](https://github.com/hapijs/joi) is a duck-type checker.

- **[joi-sql](https://github.com/TehShrike/joi-sql)**: generates type-checking functions based on your MySQL schema

#### Ractive

[Ractive](http://www.ractivejs.org/) is an excellent templating/DOM manipulation library.

- **[ractive-drag-and-drop-files](https://github.com/TehShrike/ractive-drag-and-drop-files)**: an event directive that fires an event when a file is dragged onto the element
- **[ractive-select-on-focus](https://github.com/TehShrike/ractive-select-on-focus)**: a decorator that selects the contents of the input when it gains focus
- **[ractive-diff-generator](https://github.com/TehShrike/ractive-diff-generator)**: if you're using state management like Redux instead of interacting with the Ractive object directly, this tool tries to reclaim some of the performance downsides you would eventually incur
- **[ractive-lazyload-img](https://github.com/TehShrike/ractive-lazyload-img)**: a decorator that loads images when they get near the viewport

#### Browserify

If you value simplicity, [Browserify](https://github.com/substack/node-browserify/) is still an awesome module bundler.

- **[sveltify](https://github.com/TehShrike/sveltify)**: require [Svelte](http://svelte.technology/) components
- **[lispyscriptify](https://github.com/TehShrike/lispyscriptify)**: require [Lispyscript](http://lispyscript.com/) files



#### Tape

[tape](https://github.com/substack/tape) is a simple test harness meant to run in browsers

- **[browserstack-tape-reporter](https://github.com/TehShrike/browserstack-tape-reporter)**: launches your tests in any browsers you like using Browserstack's automated service

#### Redux

[Redux](http://redux.js.org/) is everyone's favorite state library

- **[create-redux-reducer-from-map](https://github.com/TehShrike/create-redux-reducer-from-map)**: turns a map of functions into a Redux-ready reducer function

#### LevelUP

[LevelUP](https://github.com/Level/levelup) is an interface to key-value stores with a ton of storage backends

- **[levelup-cache](https://github.com/TehShrike/levelup-cache)**: a loading cache that prioritizes returning a value as quickly as possible
- **[expire-unused-keys](https://github.com/TehShrike/expire-unused-keys)**: a persistent "hey, you should probably refresh/expire this resource" library you can use to build higher-level caching libraries


## Niche

Like the general interest libraries above, except I don't expect many people to care!

- **[pickering-majority-text-revelation](https://github.com/TehShrike/pickering-majority-text-revelation)**: Wilbur Pickering's translation of Revelation, with notes, in a couple arrays
- **[sync-github-to-fs](https://github.com/TehShrike/sync-github-to-fs)**: `git clone --depth 1`/`git pull` without storing any git metadata locally
- **[tak-board](https://github.com/TehShrike/tak-board)**: a visual representation of a [Tak](http://cheapass.com/tak/) board, for the browser
- **[tak-game](https://github.com/TehShrike/tak-game)**: Functions for managing the boardstate of a Tak game by feeding in a series of moves
- **[tak-move-helper](https://github.com/TehShrike/tak-move-helper)**: answers questions like "if you pick up a piece on this square, what other squares are valid to move to?"

## Routing

- **[hash-brown-router](https://github.com/TehShrike/hash-brown-router)**: client-side routing for apps that need to be able to programmatically build urls to link to
- **[sausage-router](https://github.com/TehShrike/sausage-router)**: lets you use the hash-brown-router with pushState/replaceState instead of manipulating the fragment identifier (hash url)
- **[page-path-builder](https://github.com/TehShrike/page-path-builder)**: given a [page.js](https://github.com/visionmedia/page.js) route and a map of parameter values, generate a url you can link to
- **[abstract-state-router](https://github.com/TehShrike/abstract-state-router)**: routing for applications with [multiple nested states](http://joshduff.com/#!/post/2015-06-why-you-need-a-state-router.md).  Inspired by ui-router
  - **[ractive-state-router](https://github.com/TehShrike/ractive-state-router)**: renders states with Ractive
  - **[riot-state-renderer](https://github.com/TehShrike/riot-state-renderer)**: renders states with [Riot](http://riotjs.com/)
  - **[svelte-state-renderer](https://github.com/TehShrike/svelte-state-renderer)**: renders states with [Svelte](https://svelte.technology/)
  - **[asr-active-state-watcher](https://github.com/TehShrike/asr-active-state-watcher)**: lets you write abstract-state-router plugins by attaching to newly-rendered states
  - **[state-router-redux-ractive](https://github.com/TehShrike/state-router-redux-ractive)**: lets you use Redux stores to drive your Ractive states
    - **[asr-fsm-navigation](https://github.com/TehShrike/asr-fsm-navigation)**: given a [finite-state-machine](https://github.com/dominictarr/fsm) definition, watches for Redux actions and redirects you to a different screen
  - **[simplest-abstract-state-router-usage](https://github.com/TehShrike/simplest-abstract-state-router-usage)**: is the simplest possible example (one html file, no build step) abstract-state-router usage
  - **[state-router-example](https://github.com/TehShrike/state-router-example)**: is a more realistic (browserify-using, multi-directory) example of abstract-state-router usage for each of the current template rendering options
  - **[cross-state-document-builder](https://github.com/TehShrike/cross-state-document-builder)**: manages Redux stores, changing them based on abstract-state-router state events, but keeping them active across the lifecycle of any number of states

## [Noddity](http://noddity.com/)

- **[noddity](https://github.com/TehShrike/noddity)**: is the webapp
- **[noddity-butler](https://github.com/TehShrike/noddity-butler)**: is the high-level cache manager
- **[noddity-template-parser](https://github.com/TehShrike/noddity-template-parser)**: turns a post into a simple AST
- **[noddity-linkifier](https://github.com/TehShrike/noddity-linkifier)**: parses the internal link syntax
- **[text-metadata-parser](https://github.com/TehShrike/text-metadata-parser)**: implements the [Front-Matter](http://jekyllrb.com/docs/frontmatter/)-like parsing
- **[noddity-render-static](https://github.com/TehShrike/noddity-render-static)**: generates static HTML
- **[noddity-lazy-static-render](https://github.com/TehShrike/noddity-lazy-static-render)**: calls noddity-render-static on demand and caches results to reduce server workload
- **[noddity-render-dom](https://github.com/ArtskydJ/noddity-render-dom)**: renders a post in the browser
- **[noddity-service-server](https://github.com/TehShrike/noddity-service-server)**: handles boilerplate for servers serving content from remote Noddity installations
  - **[rssaas](https://github.com/TehShrike/rssaas)**: serves RSS feeds
  - **[seoaas](https://github.com/TehShrike/seoaas)**: serves static HTML for search engines
- **[noddity-installer](https://github.com/TehShrike/noddity-installer)**: is a command-line app that installs Noddity in the current working directory
- **[noddity-search](https://github.com/TehShrike/noddity-search)**: lets you do basic fulltext index searching of a Noddity host
- **[noddity-retrieval](https://github.com/TehShrike/noddity-retrieval)**: fetches posts and parses metadata
- **[validate-noddity-post](https://github.com/TehShrike/validate-noddity-post)**: asserts whether or not a post can be successfully rendered
- **[noddity-linter](https://github.com/TehShrike/noddity-linter)**: guarantees that all the posts in a directory are able to render without errors
