# Development

Development must be done on the master branch and should contain only **rebases** and **--no-ff merges** for **Pull Requests**.

# Rules

## Versioning follow the rules below:
1. Versioning must be done on master first.
2. Versioning on master must contain a Major (**M**), minor (**m**) and a patch (**p**) version set to **0**, with "**-dev**" as suffix. *I.e: **M.m.0-dev***
3. Versioning on Release branches must contain a Major (**M**), minor (**m**) and a patch (**p**) version.
4. Versioning must ONLY contain the version in the commit message and the change for the version in ``` package.json ```.

## Release branches follow the rules below:
1. Release branches must be named as follows: **releases/M.m.x**, where **M.m** represents the Major and minor version given on the master branch, and **x** represents a suffix. *E.g: releases/1.0.x, releases/6.9.x, ...*
2. Release branches must follow rule 3 for versioning.
3. Release branches must start with a commit versioning to the 0 patch, and the removal of the "-dev" suffix. *I.e, the first commit must be the version: M.m.0 and NOT M.m.0-dev.*
4. Release branches should contain only versioning changes and bug fixes.
5. Release branches must not be rebased into master.

## Commit messages follow the rules below:
1. Commit messages should follow the same rules specified in the contributing file ([here](./CONTRIBUTING.md#Commit-messages)).
2. Commit messages for versioning should only contain **M.m.p**(**-dev**), or **REL: M.m.p**(**-dev**). *That is, any of the following is ok: 10.0.0, 10.0.5-dev, REL: 10.0.0, REL: 10.0.5-dev, ...*

## How should all those rules look like:

### Tree

```
o-o-(10.0.0-dev)-o-o-o-o-(10.1.0-dev)-o-o-(11.0.0-dev)-o-o-o-o->master
       \                       \                 \
        \                       \                 (11.0.0)-fix->releases/11.0.x
         \                        (10.1.0)-fix-(10.1.1)-fix->releases/10.1.x
          (10.0.0)-fix-(10.0.1)-fix-(10.0.2)-fix-fix->releases/10.0.x
```

(**M.m.p**[**-dev**]): Represents a version update (**M.m.p**[**-dev**]) in package.json and a commit with that message.

**fix**: Represents cherry picked fixes from master.

**o**: Represents any other commit.

### Commits

#### ``` package.json ``` for master (from **10.1.0-dev** to **11.0.0-dev**)

Message: **REL: 11.0.0-dev**

Content:
```json
- "version": "10.1.0-dev"
+ "version": "11.0.0-dev"
```

#### ``` package.json ``` for releases (from **10.0.1-dev** to **10.0.2-dev**)

Message: **REL: 10.0.2-dev**

Content:
```json
- "version": "10.0.1-dev"
+ "version": "10.0.2-dev"
```
