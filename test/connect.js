import {Apis} from '../lib'

Apis.instance('wss://node5.gxb.io',true).init_promise.then(res=>{
    console.log(res);
}).catch(ex=>{
    console.error(ex);
});
