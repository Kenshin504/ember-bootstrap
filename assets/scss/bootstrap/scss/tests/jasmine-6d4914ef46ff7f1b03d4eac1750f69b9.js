"use strict"
const path=require("node:path")
module.exports={spec_dir:"scss",spec_files:["**/*.{test,spec}.scss"],requires:[path.join(__dirname,"sass-true/register")],jsLoader:"require"}
