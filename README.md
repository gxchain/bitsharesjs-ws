# GXChain websocket interface (gxbjs-ws)

Pure JavaScript GXChain websocket library for node.js and browsers. Can be used to easily connect to and obtain data from the GXB blockchain via public apis or local nodes.

Credit for the original implementation goes to [jcalfee](https://github.com/jcalfee).

[![npm version](https://img.shields.io/npm/v/gxbjs-ws.svg?style=flat-square)](https://www.npmjs.com/package/gxbjs-ws)
[![npm downloads](https://img.shields.io/npm/dm/gxbjs-ws.svg?style=flat-square)](https://www.npmjs.com/package/gxbjs-ws)


## Setup

This library can be obtained through npm:
```
npm install gxbjs-ws
```

## Usage

Browser bundles are provided in /build/, for testing purposes you can access this from rawgit:

```
<script type="text/javascript" src="https://cdn.rawgit.com/gxchain/gxbjs-ws/build/gxbjs-ws.js" />
```

A variable gxbjs_ws will be available in window.

For use in a webpack/browserify context, see the example below for how to open a websocket connection to the Openledger API and subscribe to any object updates:

```
var {Apis} = require("gxbjs-ws");
Apis.instance("wss://node1.gxb.io",true).init_promise.then((res) => {
    console.log("connected to:", res[0].network);
    Apis.instance().db_api().exec( "set_subscribe_callback", [ updateListener, true ] )
});

function updateListener(object) {
    console.log("set_subscribe_callback:\n", object);
}
```
The `set_subscribe_callback` callback (updateListener) will be called whenever an object on the blockchain changes or is removed. This is very powerful and can be used to listen to updates for specific accounts, assets or most anything else, as all state changes happen through object updates. Be aware though that you will receive quite a lot of data this way.
