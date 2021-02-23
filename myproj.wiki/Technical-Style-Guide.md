Technical Style Guide
=====================

The technical style guide covers the coding convention the Cloaked-Hipster team uses in developing their software. It covers coding conventions, and project structure. The components we would like you to think about and document in your wiki are commenting, naming conventions, and the folder/file structure  here are the sections you should have:

## Conventions for filenames and contents.  

Do you put a class in each file and name it in camel case to match the class name.   Do class files go in particular directories like “view” or “model” depending on where they fit in the architecture or is it for modules like “inventory” and “receivables”.
Folders.  What are the conventions around what belongs in a folder and where a folder is.  For example, is all source code in a \src directory and code ready for deployment in \release?  Within source code, how are the folders organized?  Folder of components, screen, and utils like in the react-native follow along? What about other files like database scripts and icons, where should those live?   For the elements in the walking skeleton; be sure to describe them here.

## Commenting conventions.   

I suggest at least block comments for objects;   consider [JSDoc](https://jsdoc.app/) if you you are using JavaScript (Editors like vscode support it natively) record other conventions as well.

## Naming conventions.  What approach do you use for naming classes, variables, and methods?
For your development environment use google to find what’s typical (e.g. google “PHP style guide”).  For JavaScript/TypeScript projects, I highly recommend using a tool like [prettier](https://prettier.io) to enforce rules automatically when files are saved (vscode add-in) or checked in. Even with prettier, you will need to decide some rules on folders and naming; but it takes care of a lot of common formatting issues.   If you are recommending prettier, say that in your style guide wiki.  In general,  I recommend pointing to an already cooked one; some examples:

- React / React-Native:  The AirBnB one is popular: https://github.com/airbnb/javascript/tree/master/react .  This post provides a great view of the issues in choosing a convention and has embedded in it a standard: https://medium.com/hackernoon/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed 

- JavaScript: https://google-styleguide.googlecode.com or https://github.com/airbnb/javascript
Objective C. For example: The NYTimes guide: https://github.com/NYTimes/objective-c-style-guide )
Swift.  AirBnB, LinkedIn, others have them, this article has it’s own and has pointers to those: https://medium.com/better-programming/finding-the-ultimate-swift-code-style-guidelines-59025a7c163c 

- Angular 2: https://angular.io/styleguide

- C# Example: https://mscblogs.blob.core.windows.net/media/lhunt/Publications/CSharp%20Coding%20Standards.pdf 

- PHP: http://pear.php.net/manual/en/standards.sample.php 
- Ruby on Rails: https://github.com/bbatsov/rails-style-guide 
The sections are here; depending on the team they may warrant their own pages
