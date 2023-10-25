'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from './SectionHeading';

export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After graduating with a degree in{' '}
				<span className="font-medium">Computer Science</span>, I decided to
				pursue my passion for web programming after taking some web-related
				elective courses during my final year. I started learning{' '}
				<span className="font-medium">frontend web development</span> and
				working on personal projects, utilizing the latest technologies i
				saw that were being used in the industry.{' '}
				<span className="italic">One of the best parts of programming</span>{' '}
				is the problem-solving aspect. I love being challenged and the
				feeling of finally figuring out a solution to a problem, especially
				when working with new frameworks, that tends to happen a lot 😂.
				Although I am experienced in frontend technologies, I have started
				learning backend technologies. My core stack is{' '}
				<span className="font-medium">
					React, Next.js, Node.js, and MongoDB
				</span>
				. I am also familiar with{' '}
				<span className="font-medium">TypeScript and Express</span>. I am
				always looking to learn new technologies. I am currently looking for
				a <span className="font-medium">full-time position</span> as a
				software developer.
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy playing
				video games, and watching movies and series. I also enjoy{' '}
				<span className="font-medium">learning new things</span>. I am
				currently learning about <span className="font-medium">cars</span>.
			</p>
		</motion.section>
	);
}
