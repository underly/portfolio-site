import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeSwitch from '@/components/ThemeSwitch';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Luis | Personal Portfolio',
	description: 'Luis is a frontend developer with 2 years of experience',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<div className=" bg-[#439CFB] absolute top-[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4e4163]"></div>
				<div className="bg-[#43cde6] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#49419b]"></div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />

						<Toaster position="top-right" />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
