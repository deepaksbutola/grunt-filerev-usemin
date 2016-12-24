# grunt-filerev-usemin
Asset revisioning by using file content hashing and replaces references to non-optimized scripts or stylesheets into a set of HTML files (or any templates/views)

# Overview

1. grunt-filerev :

This task will revision your files based on its contents. You should then set the files to expire far into the future for better caching and it will only update when it changes.

2. grunt-usemin : 

usemin replaces the references of scripts, stylesheets and other assets within HTML files dynamically with optimized versions of them. To do this usemin exports 2 built-in tasks called useminPrepare and usemin and utilizes a couple of other Grunt plugins for the optimization process. usemin does this by generating the subtasks for these Grunt plugins dynamically.

The built-in tasks of usemin:

useminPrepare prepares the configuration to transform specific blocks in the scrutinized file into a single line, targeting an optimized version of the files. This is done by generating subtasks called generated for each of the optimization steps handled by the Grunt plugins listed below.
usemin replaces the blocks by the file they reference, and replaces all references to assets by their revisioned version if it is found on the disk. This target modifies the files it is working on.
