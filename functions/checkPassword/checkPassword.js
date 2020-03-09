// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  const { password } = JSON.parse(event.body);
  const PASSWORD = process.env.PASSWORD;
  let payload = {};
  if (password === PASSWORD) {
    payload = {
      statusCode: 200,
      body: JSON.stringify({
        photos: '',
        videos: '',
      }),
    }
  }else{
    payload = {
      statusCode: 500,
      body:JSON.stringify({
        error: 'Incorrect Password. Please try again.'
      })
    }
  }

  return payload;


  // try {
  //   const subject = event.queryStringParameters.name || 'World';
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ message: `Hello ${subject}` }),
  //     // // more keys you can return:
  //     // headers: { "headerName": "headerValue", ... },
  //     // isBase64Encoded: true,
  //   };
  // } catch (err) {
  //   return { statusCode: 500, body: err.toString() };
  // }
};
