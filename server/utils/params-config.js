const { v4: uuidv4 } = require('uuid');

const params = fileName => {
  const myFile = fileName.originalname.split('.');
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    // Bucket: '<My_Bucket_Name>',
    Bucket: 'user-images-43b36896-28a4-400b-9d67-e0dc12c44d5c',
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer
  };

  return imageParams;
};

module.exports = params;