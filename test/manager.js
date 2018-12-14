import {Manager} from '../lib';

let manager = new Manager ({url: 'wss://node5.gxb.io', urls: ['wss://node5.gxb.io','wss://node1.gxb.io'], autoFallback: true});

manager.connectWithFallback (true).then (() => {
    setTimeout (() => {
        Manager.close ();
    }, 3000);
}).catch (ex => {
    console.error (ex);
});
