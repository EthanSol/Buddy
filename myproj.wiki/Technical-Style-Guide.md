Technical Style Guide
=====================

The technical style guide covers the coding convention the Cloaked-Hipster team uses in developing their software. It covers coding conventions, and project structure. The components we would like you to think about and document in your wiki are commenting, naming conventions, and the folder/file structure  here are the sections you should have:

## Conventions for filenames and contents.  

Each class belongs in its own file. Classes should be capitalized, especially for React Native components. The filenames should be exactly the same as the class names, but with the file extension (ofc). For example: a class called "Strain" would go in a file called "Strain.js".

Screens or views should go under the ./screens directory. Components rendered within screens should be under the ./components directory. Images should go under the ./img directory. This is sufficient for now, but more organization may be required as the project expands.

Other folders should remain as is, to allow expo, firebase, and node modules to operate as normal. There is no need for further folders at this time.

## Commenting conventions.   

We use [JSDoc](https://jsdoc.app/) for all javascript code.

## Naming conventions.  What approach do you use for naming classes, variables, and methods?
All classes should be very specifically named. They should explain exactly what the component or screen is for. All variables should also be specific, and include the desired type if necessary.
