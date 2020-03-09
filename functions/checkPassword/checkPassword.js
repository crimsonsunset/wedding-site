exports.handler = async (event, context) => {
  const { password } = JSON.parse(event.body);
  const PASSWORD = process.env.PASSWORD;
  const VIDEOS = process.env.VIDEOS;
  const PHOTOS = process.env.PHOTOS;
  let payload = {};
  if (password === PASSWORD) {
    payload = {
      statusCode: 200,
      body: JSON.stringify({
        photos: PHOTOS,
        videos: VIDEOS,
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
};
