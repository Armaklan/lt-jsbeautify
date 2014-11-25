JsBeautify plugin for Light Table
=================================

A simple JsBeautify integration in this editor.

Features
--------

- Reformat current js file
- Reformation current selection

Configuration
-------------

Default configuration is JsBeautify default configuration (Indent size 4, no preserve new line, ...).

To change it, merge the following changes in to your workspace behaviors :

```
[:editor.javascript :lt.plugins.jsbeautify/jsbeautify-options {
                                  :indent_size 2
                                  :indent_level 0
                                  :preserve_newlines true
                                  :max_preserve_newlines 10}]
```

Beautify on save
----------------

By default, beautify is only on demand. You can activate on save behaviours like this :

```
[:editor.javascript :lt.plugins.jsbeautify/on-save]
```
