# ComponentRenderingMultipleTags

This project demonstrates a single thing: How to render multiple tags with a single
angular component.

Imagine the following scenario:

* Your have a parent component using a css-grid
* You have a child component that renders two related but separate elements.

By default, the child component will be wrapped inside a so-called "host"-element 
with the same name as the component selector. This will break the layout.

There is one css-way, [display: contents](), that inlines the child elements into their parent.
([caniuse it?](https://caniuse.com/css-display-contents)).
But if JavaScript is modifying styles of tags implicitly, this may not work correctly.

After a couple of hours of research and a good-night sleep, I found this: https://stackoverflow.com/a/56887630

It outlines the following steps:

* Wrap the component template with an `ng-template`.
* Render the contents of that template into the viewContainer (i.e. the parent component)
  as embedded view
* Set the host element to `display:none` to prevent it from messing with the layout.

I have deliberately used an old angular version here to demonstrate that you do not 
need the newest version to implement this.
