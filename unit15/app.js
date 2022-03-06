

import * as Log from './mod_log.js';

let log1 = new Log.Logger('app1', Log.CHANNEL1);

log1.newlog('Hello from app1');

let log2 = new Log.Logger('app1', Log.CHANNEL2);

log2.newlog('A new log message from app1');