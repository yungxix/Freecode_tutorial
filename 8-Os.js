const os = require('os')

 const user = os.userInfo()

  const currentOs = {
      name: os.type(),
      release: os.release(),
      totalMem: os.totalmem,
      freeMem: os.freemem(),
  }

  console.log(currentOs);