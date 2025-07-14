import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		robots: {
			index: false,
			follow: false,
		},
	};
}

const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <div>{children}</div>;
};
export default AuthLayout;
