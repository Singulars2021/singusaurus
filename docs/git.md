---
id: git
title: Git
slug: /git
---

## How to pull a specific branch

**Important**: It is assumed that you are in the folder where you performed de "git clone" operation

1. Create the branch in your local repository
2. Switch to the branch
3. Pull the same remote branch
   
```
git branch issue-9
git switch issue-9
git pull origin issue-9
```

If you want to retrieve all the branches from Github repository:

```
git fetch --all
```
