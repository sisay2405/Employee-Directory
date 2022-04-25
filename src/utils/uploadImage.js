import S3 from 'react-aws-s3';
const config = {
	bucketName: 'myBucket',
	dirName: 'media' /* optional */,
	region: 'eu-west-1',
	accessKeyId: 'JAJHAFJFHJDFJSDHFSDHFJKDSF',
	secretAccessKey: 'jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf',
	s3Url: 'https:/your-custom-s3-url.com/' /* optional */,
};

const ReactS3Client = new S3(config);

const uploadImage = async (file, fileName) => {
	try {
		const data = await ReactS3Client.uploadFile(file, fileName);
		return data;
	} catch (err) {
		return 'error uploading image';
	}
};

export default uploadImage;
