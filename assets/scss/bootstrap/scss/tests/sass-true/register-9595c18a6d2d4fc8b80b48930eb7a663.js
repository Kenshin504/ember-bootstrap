"use strict"
const path=require("node:path"),runnerPath=path.join(__dirname,"runner").replace(/\\/g,"/")
require.extensions[".scss"]=(e,r)=>{const n=r.replace(/\\/g,"/")
return e._compile(`\n    const runner = require('${runnerPath}')\n    runner('${n}', { describe, it })\n    `,r)}
