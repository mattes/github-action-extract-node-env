console.log("::set-output name=value::" + process.env[ process.env["INPUT_KEY"] ])

if(process.env["INPUT_SET_ENV"] == "true") {
  console.log("::set-env name=" + process.env["INPUT_KEY"] + "::" + process.env[ process.env["INPUT_KEY"] ])
}

