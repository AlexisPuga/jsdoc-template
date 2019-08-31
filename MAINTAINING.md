# Development

Development must be done on the master branch and should contain only rebases and --no-ff merges for pull requests.

# Rules

Versioning follow the rules below:
1. Versioning must be done on master first.
2. Versioning on master must contain a Major (M) and a minor (m) version. NO patch versions are allowed.
3. Versioning on Release branches must contain a Major (M), minor (m) and a patch (p) version.
4. Versioning must ONLY contain the version in the commit message and the change for the version in package.json.

Release branches follow the rules below:
1. Release branches must be named as follows: releases/<M.m>, where <M.m> represents the version given on the master branch.
2. Release branches must follow rule 3 for versioning.
3. Release branches must start with a commit versioning to the 0 patch. I.e, the first commit must be the version: M.m.0
4. Release branches should contain only versioning changes and bug fixes.
5. Release branches must not be rebased into master.

Commit messages follow the rules below:
1. Commit messages should follow the same rules specified in the contributing file ([here](./CONTRIBUTING.md#Commit-messages)).
2. Commit messages for versioning should only contain "M.m[.p]", or "REL: M.m(.p)". That is, any of the following is ok: "10.0", "10.0.5", "REL: 10.0", "REL: 10.0.5", ...

## How should all those ruls look like:

### Tree
o-o-(10.0)-o-o-o-o-(10.1)-o-o-(11.0)-o-o-o-o-o-o-o->master
       \			  \			 \
        \			   \ 	      (11.0.0)-fix->releases/11.0
         \				(10.1.0)-fix-(10.1.1)->releases/10.1
          (10.0.0)-fix-(10.0.1)-fix-(10.0.2)->releases/10.0

(M.m): Represents a version update (M.m) in package.json and a commit with that message.
fix: Represents cherry picked fixes from master.
o: Represents any other commit.

### Commits

#### package.json for master (from 10.1 to 11.0)
Message: 11.0
Content:
```json
- "version": "10.1"
+ "version": "11.0"
```
### package.json for releases (from 10.0.1 to 10.0.2)
Message: REL: 10.0.2
Content:
```json
- "version": "10.0.1"
+ "version": "10.0.2"
```