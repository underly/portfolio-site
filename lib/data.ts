import postanalyticsImg from '@/public/postanalytics.png';
import rmtdevImg from '@/public/rmtdev.png';
import webnotesImg from '@/public/webnotes.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Research for Computing Alliance of Hispanic-Serving Institutions ',
		location: 'NJ',
		description:
			'Conducted paid research and developed a recommender system trained using the public Amazon products dataset. Written in Python using sk-learn.',
		icon: React.createElement(CgWorkAlt),
		date: '2022',
	},
	{
		title: 'Graduated from Kean University',
		location: 'Union, NJ',
		description: 'In August, I graduated with a B.S. in Computer Science.',
		icon: React.createElement(LuGraduationCap),
		date: '2022',
	},
	{
		title: 'Frontend Developer',
		location: 'North Bergen, NJ',
		description:
			"I'm now a frontend developer working as a freelancer. I have also learned some full stack technologies. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: '2023 - present',
	},
] as const;

export const projectsData = [
	{
		title: 'WebNotes',
		description:
			'Users can add, remove, and edit notes that pertain to their own account. Requires users to enter or sign up for an account in order to use the service.',
		tags: [
			'React',
			'TypeScript',
			'Authentication',
			'Node',
			'Express',
			'MongoDB Atlas',
		],
		imageUrl: webnotesImg,
		link: 'https://www.webnotes.live',
	},
	{
		title: 'rmtDev',
		description:
			'Job board for remote developer jobs. Implemented features like filtering, sorting and pagination.',
		tags: [
			'JavaScript',
			'Pagination',
			'Routing',
			'Build Process (Webpack)',
			'State Management',
		],
		imageUrl: rmtdevImg,
		link: 'https://rmtdev.xyz/',
	},
	{
		title: 'Post Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['HTML', 'CSS', 'JavaScript'],
		imageUrl: postanalyticsImg,
		link: 'https://postanalytics.netlify.app',
	},
] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	// 'Prisma',
	'MongoDB',
	'Redux',
	// 'GraphQL',
	// 'Apollo',
	'Express',
	// 'PostgreSQL',
	'Python',
	// 'Django',
	'Framer Motion',
] as const;
