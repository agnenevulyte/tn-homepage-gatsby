// const fetch = require(`node-fetch`)

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   // get data from GitHub API at build time
  
//   const result = await fetch(`https://ra9qbnj3ah.execute-api.eu-west-2.amazonaws.com/fin/marketing/docs/home-page`)
//   const resultData = await result.json()
//   console.log('resultData', resultData)
//   // create node for build time data example in the docs
//   createNode({
//     // uid: resultData.uid,
//     type: resultData.type,
//     data: resultData.data,
//     // required fields
//     id: `example-build-time-data`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `TN`,
//       contentDigest: createContentDigest(resultData),
//     },
//   })
// }

