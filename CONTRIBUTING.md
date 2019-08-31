# Contributing

First of all, thank you for contributing to this project.

All contributions are welcome, but they should follow a set of guidelines. This document describes which are those guidelines.

Feel free to propose any change to this document in a **Pull Request** and remember that any interaction with this project must adhere to our Code of Conduct.

## Code of conduct

This project and any interaction with it follow the [Code of Conduct](CODE_OF_CONDUCT.md). By interacting with this project, you are expected to adhere to this code.

## Process

The process to contribute is simple:
- Want to make an enhancement or fix something? Open an **Issue** and describe your solution/problem, or use a **Pull Request** to submit your code.
- Anything else? Open an **Issue**.

### Requisites

Remember that this is *kind of a Fork* and everything was implemented trying to make minor changes to the [default template](https://github.com/jsdoc/jsdoc/templates/default) in order to make updates faster (if something from his side fails or is buggy). 

Either way...
- Any changes/fixes/enhancements to tmpl/css/js/config/example/webpack files are allowed.
- Changes to publish.js might not be allowed.
- Minor design changes are allowed, major ones (that change the essence of this design) might not.

Aren't sure? Create an **Issue**.

#### Formatting

##### Issues or Pull Requests
Until now, there's not a predefined format, just try to be clear.

##### Commit messages
Commit messages follow the rules below:
1. Commits messages should use one of the following acronyms (taken from [numpy](https://numpy.org/devdocs/dev/development_workflow.html)) at the start of the message, uppercased and followed by ": ":
	- API: an (incompatible) API change
	- BENCH: changes related to benchmarks
	- BLD: change related to building the project
	- BUG: bug fix
	- DEP: deprecate something, or remove a deprecated object
	- DEV: development tool or utility
	- DOC: documentation
	- ENH: enhancement
	- MAINT: maintenance commit (refactoring, typos, etc.)
	- REV: revert an earlier commit
	- STY: style fix (whitespace, ...)
	- TST: addition or modification of tests
	- REL: related to releasing the project
2. Commits messages should follow [these rules](https://chris.beams.io/posts/git-commit/#seven-rules).
	- Separate subject from body with a blank line
	- Limit the subject line to 50 characters
	- Capitalize the subject line
	- Do not end the subject line with a period
	- Use the imperative mood in the subject line
	- Wrap the body at 72 characters
	- Use the body to explain what and why vs. how

### Development

To add something to this template, you should:
1. Fork the project to your account.
2. Clone your Fork.
3. Enter to the local copy of the project.

Then... start developing your feature.
1. Create a new branch from master (use a descriptive name).
2. Run ``` npm run development ``` from a CLI.
3. Open ``` localhost:9000 ``` from your browser.
4. Modify any js/css file to reload the configuration.

When your feature is ready, push your branch to your **Fork** and open a **Pull Request** with your new branch.
