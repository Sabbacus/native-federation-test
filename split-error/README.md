# SplitError

This is a proof-of-concept for https://github.com/angular-architects/module-federation-plugin/issues/459

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Installation
Angular 19.1.0 and Native Federation 19.0.16 was installed when writing this.

```bash
ng new split-error --style=scss --minimal=true --ssr=false
```

```bash
cd split-error
```

```bash
ng add @angular-architects/native-federation --project split-error --port 4205 --type dynamic-host
```

## Reproduction
```bash
ng build --configuration=development
```

## Error message
An unhandled exception occurred: Cannot read properties of undefined (reading 'split')
