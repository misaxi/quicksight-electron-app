*NOTE this package only distributes MacOS desktop app.*

## Pre-requisite

Tested with
* `node` version 6.9.1
* `npm` version 6.1.0

## Build Desktop App

Run the following commands to build QuickSight desktop app

```
> npm install
> npm run make 
```

Then find the zip file in `out/make/` folder

## Update icons

The following command takes an png image and generates the iconset for the desktop app.

```
make_icon.sh quicksight_logo.png
```