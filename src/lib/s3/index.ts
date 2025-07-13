import {
	DeleteObjectCommand,
	PutObjectCommand,
	S3Client,
} from '@aws-sdk/client-s3';

const _s3Client = new S3Client({
	region: process.env.REGION_NAME,
	credentials: {
		accessKeyId: process.env.IAM_ACCESS_KEY as string,
		secretAccessKey: process.env.IAM_SECRET_KEY as string,
	},
});

// 保存
export const saveFile = async (
	_key: string,
	_body: Buffer,
): Promise<{ result: boolean; message: string }> => {
	try {
		await _s3Client.send(
			new PutObjectCommand({
				Bucket: process.env.BUCKET_NAME,
				Key: _key,
				Body: _body,
			}),
		);
		return { result: true, message: 'File saved successfully' };
	} catch (error) {
		const _errorMessage =
			error instanceof Error
				? `saveFile error. ${error.message}`
				: 'Something went wrong.';
		return { result: false, message: `Failed to save file: ${_errorMessage}` };
	}
};

// 削除
export const deleteFile = async (
	_key: string,
): Promise<{ result: boolean; message: string }> => {
	try {
		await _s3Client.send(
			new DeleteObjectCommand({
				Bucket: process.env.BUCKET_NAME,
				Key: _key,
			}),
		);

		return { result: true, message: 'File deleted successfully' };
	} catch (_error) {
		const message =
			_error instanceof Error
				? `deleteFile error. ${_error.message}`
				: 'Something went wrong.';
		return { result: false, message: `Failed to delete file: ${message}` };
	}
};
