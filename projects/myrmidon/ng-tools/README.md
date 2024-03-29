# NgTools

My essential, general-purpose tools for Angular applications.

These are the typical services and tools shared by most of my Angular apps. For convenience, I packed them into a single reusable library having no dependencies other than Angular `CommonModule`.

- **pipes**:
  - `colorToContrast`: get contrast color from color.
  - `ellipsis`: smart-cut a text.
  - `flat-lookup`: return a human-friendly string from some lookup value.
  - `joinPipe`: join an array into a string.
  - `safeHtml`: HTML pipe to embed HTML code into a page.
- **services**: environment settings from an external JS file, error handling service, local storage wrapper.
- **validators**: strict min-length validator, conditional validator.
- **general**: deep copy function, Roman numbers bidirectional converter.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.
