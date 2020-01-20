# Getting started with ionic-tetris  

## Project Setup
1. First clone the repo `git clone https://github.com/simpert/ionic-tetris.git`  
2. Next, `cd` into the `tetris-app` directory  
3. Now install dependencies `npm install` 

> For simplicity with using the `cli` you should just install ionic globally by executing `npm i -g ionic` and to install the native stuff and react hooks `npm install @ionic/react-hooks @ionic/pwa-elements`    

## Start the Project
1. Really you can just execute `ionic serve` to `build` and start the project running at `http://localhost:8100/`  
    - there is a `ionic:start` `npm` script you can run to do that.
    - executing the `react-scripts` will also work but we want the ionic server to serve for us so that we can use the `ionic dev app` mobile phone application to pipe into our local network and view the app on either a `ios` or `android` phone  
2. Now just open `http://localhost:8100/` in your favorite browser  

Hot Module Reloading will be setup and activated so just start editing the code and saving and the app will reload for you.   

If you want to debug the app in `VS Code` rather then the browser dev tools, just launch the `Debug Client` `VS Code` launch task. This will open the app in a new un-profiled `edge beta` browser instance and attach the debugger to it.  
Once attached, feel free to just set breakpoints anywhere in the code and they will be hit.  You need to have the [Debugger for Microsoft Edge](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge) tagged `msjsdiag.debugger-for-edge` to use that launch target.  

If you would like to use the launch task with a different browser just install the debugger extention and edit the `"type": "edge"` in `.vscode/launch.json`.  I have the [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug) tagged `firefox-devtools.vscode-firefox-debug` and the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) tagged `msjsdiag.debugger-for-chrome` installed in `VS Code` so I can switch easily.  

> So I use the new Edge Beta and Edge Canary builds for my daily browser use. You do not have to use the new edge.  
> 
> To get it https://www.microsoft.com/en-us/edge?form=MY01BL&OCID=MY01BL 