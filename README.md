# ember-enchanter (simply magical interfaces)

**WARNING: UNDER DEVELOPMENT, SUBJECT TO CHANGE**

ember-enchanter helps you to make step-by-step wizard based interfaces for long and complex processes (Spells) that don't limit user action unfairly, give honest feedback throughout the process, and engage users on tedious tasks.

## Installation

`npm install --save-dev ember-enchanter`

## Usage

### Spells

Each completable user process is encapsulated by a Spell, which may contain multiple dependent steps (Pages).  ember-enchanter provides backwards and forwards navigation between Pages, validation of each Page, displays of user progress, and the ability to resume Spells (bookmarkable urls).  ember-enchanter tries to be as agnostic as possible about style and structure.

```handlebars
{{enchant-spell}}
{{/enchant-spell}}
```

### Pages

Each page contains a form that can be validated and provides feedback on that validation.

```handlebars
{{enchant-page}}
{{/enchant-page}}
```

### Navigation

ember-enchanter provides two types of navigation, the standards next a previous buttons as well as a list of all Page that can be used to navigate between arbitrary Pages.  The standard convention for Spells is that earlier Pages must be completed and validated before visiting later Pages, but older Pages may be visited and modified as much as the user may like.

```handlebars
{{enchant-navigation}}

{{enchant-previous}}

{{enchant-next}}
```

### Progress
#### Dummy Content / Partial Result

For some wizards it is nice to see progress as it is made.  ember-enchanter provides a component for displaying partially completed processes, for example building a resume piece by piece.  The first step may be to add your Name and Phone Number, which can immediately be displayed with dummy content (blank or disabled) for the rest of the result.  As more pages are completed, the spell gets closer to completion.

## Development

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
