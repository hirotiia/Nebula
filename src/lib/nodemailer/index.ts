import nodemailer from 'nodemailer';

const _transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: process.env.SMTP_USER as string,
		pass: process.env.SMTP_PASS as string,
	},
});

export const sendEmail = async ({
	to,
	subject,
	text,
	html,
}: {
	to: string;
	subject: string;
	text: string;
	html: string;
}): Promise<{ result: boolean; message: string }> => {
	try {
		await _transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject,
			text,
			html,
		});

		return { result: true, message: 'Email sent successfully' };
	} catch (error) {
		const _errorMessage =
			error instanceof Error ? error.message : 'Internal server error';
		return {
			result: false,
			message: `Failed to send verification email. Please check your email address and try again: ${_errorMessage}`,
		};
	}
};
