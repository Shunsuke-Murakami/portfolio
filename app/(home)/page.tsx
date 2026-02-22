'use client';

import { ArticleCard } from '@/components/ArticleCard';
import { Intro } from '@/components/Intro';
import { SignupWidget } from '@/components/SignUp';
import { SkillsWidget } from '@/components/SkillsWidget';
import { WorkWidget } from '@/components/WorkWidget';

const experiences = [
	{
		logo: '/Ensign.png',
		organization: 'Ensign',
		jobTitle: 'Software Engineering Student',
		startYear: 2025,
		endYear: null,
	},
	{
		logo: '/Uobei.png',
		organization: 'Uobei',
		jobTitle: 'Chef',
		startYear: 2022,
		endYear: 2025,
	},
];

export default function Page() {
	return (
		<main className='mx-auto flex max-w-7xl flex-col gap-6 px-4 pt-6 pb-16 lg:px-36'>
			<Intro />
			<div className='flex flex-col gap-6 lg:w-full lg:flex-row lg:items-start lg:justify-between'>
				<div className='space-y-8 lg:flex-1 dark:text-zinc-400'>
					<ArticleCard
						date='2023-12-25'
						title='Portfolio Website'
						description='A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. Designed to showcase my projects, skills, and growth as a software engineering student.'
						url='/articles/sample-article'
					/>
					<ArticleCard
						date='2023-12-25'
						title='FamilyHistorySync (Java)'
						description='A Java project using JDBC and SQLite to synchronize family history data from CSV files into a database. Focused on file I/O, database operations, and clean architecture.'
						url='/articles/sample-article'
					/>
					<ArticleCard
						date='2024-06-01'
						title='Course & Team Projects'
						description='Various school and team-based projects focused on web development, problem solving, and collaborative software engineering practices.'
						url='/articles/sample-article'
					/>
				</div>

				{/*  SIGNUP COLUMN  */}
				<div className='flex flex-col gap-6'>
					{/* SIGNUP WIDGET */}
					<SignupWidget
						title={'Stay up to date'}
						content={'Get notified when I publish something new, and unsubscribe at any time.'}
					/>

					<WorkWidget
						title={'Work'}
						content={
							'A combination of academic learning and real-world work experience that shaped my problem-solving and teamwork skills.'
						}
						experiences={experiences}
					/>
					<SkillsWidget
						title={'Skills'}
						content={'Technical skills I use to build web applications and solve real-world problems.'}
						skills={[
							{ icon: '/icons/html.svg', name: 'HTML', proficiency: 80 },
							{ icon: '/icons/css.svg', name: 'CSS', proficiency: 80 },
							{ icon: '/icons/js.svg', name: 'JavaScript', proficiency: 80 },
							{ icon: 'react.webp', name: 'React', proficiency: 80 },
							{ icon: 'tailwindcss.png', name: 'Tailwind CSS', proficiency: 80 },
						]}
					/>
				</div>
			</div>
		</main>
	);
}
