---
id: vue_troubleshooting
title: Vue Troubleshooting 
slug: /vue_troubleshooting
---

## Vue Compiler

### Module not found: Error: Can't resolve (...)

1. Did you use the correct url to import your component? Check your import statement

### Element is missing end tag.

1. Pay attention where the arroy is pointing to. More likely you forgot to close the same tag.

![missing end tag](https://oscarm.tinytake.com/media/f37627?filename=1612600727236_TinyTake06-02-2021-09-38-35_637481975279171723.png&sub_type=thumbnail_preview&type=attachment&width=797&height=232)

## Vue Console

### Failed to resolve a component

1. Did you **import** the component in the component you want to use it?
2. Did you added it in the **components** property?

### Property was accesed during render but is not defined in instance

![property not defined](https://oscarm.tinytake.com/media/f376b4?filename=1612603470500_TinyTake06-02-2021-10-24-29_637482002714631911.png&sub_type=thumbnail_preview&type=attachment&width=752&height=162)

1. Check the name of your property if it is misspelled (i.e. 'setFilters' instead of 'setFilter')
2. Check that your **computed** properties are in the correct root level of your script
3. Check the name of your **props**