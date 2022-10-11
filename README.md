# TypeScript

**TypeScript - JavaScript with Type Checking**

**TypeScript is JavaScript with added syntax for types.**

TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.

### Benefits

- Static typing
- Code completion
- Refactoring
- Shorthand notations

### Drawbacks

- Compilation
- Discipline in coding

### TypeScript Compiler

TypeScript is transpiled into JavaScript using a compiler.

TypeScript being converted into JavaScript means it runs anywhere that JavaScript runs!

TypeScript - Medium to large projects
JavaScript - Simple projects

## Setting up development environment

### Installing the Compiler

TypeScript has an official compiler which can be installed through npm.

`npm install -g typescript`

We can check typescript version by using this command.

`tsc -v`

### Hello World! Example

Suppose if you want to compile ts file,

**Eg: index.ts**

Then use do like this,

`tsc index.ts`

This will generate a new **index.js** file.

## Configuring the TypeScript compiler

By default the TypeScript compiler will print a help message when run in an empty project.

The compiler can be configured using a **tsconfig.json file.**

You can have TypeScript create tsconfig.json with the recommended settings with:

`tsc --init`
