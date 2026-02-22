import UsesItem from '@/components/UsesItem';
import UsesSection from '@/components/UsesSection';

export default function Uses() {
	return (
		<main className='min-h-screen px-6 py-16 md:px-24'>
			<div className='mx-auto max-w-6xl'>
				{/* Intro */}
				<section className='flex max-w-[672px] flex-col gap-6'>
					<h1 className='font-bold text-5xl text-foreground leading-tight tracking-tight'>
						Software I use, gadgets I love, and other things I recommend.
					</h1>

					<p className='text-lg text-zinc-700 leading-8 dark:text-zinc-300'>
						Here are the tools and apps I use for studying software engineering and building real projects—coding, learning, and
						staying productive.
					</p>
				</section>

				{/* Content */}
				<section className='mt-24 space-y-24'>
					{/* Workstation */}
					<UsesSection title='Coding Setup'>
						<UsesItem
							title='Windows Laptop'
							description='I do most of my coursework and development on Windows with VS Code and Git Bash.'
						/>
						<UsesItem title='Git Bash' description='My main terminal for Git workflow and project commands.' />
					</UsesSection>

					{/* Development tools */}
					<UsesSection title='Development tools'>
						<UsesItem
							title='VS Code'
							description='My daily editor for React/Next.js and Java projects. I use extensions like Prettier and ESLint.'
						/>
						<UsesItem
							title='GitHub'
							description='I use GitHub for version control, branches, and collaboration on team assignments.'
						/>
						<UsesItem title='Next.js' description='Used for building and running Next.js projects.' />
					</UsesSection>

					{/* Design */}
					<UsesSection title='Design'>
						<UsesItem
							title='Figma'
							description='I use Figma to understand layouts, spacing, and UI structure when building modern web interfaces.'
						/>
					</UsesSection>

					{/* Productivity */}
					<UsesSection title='Productivity'>
						<UsesItem
							title='YouTube / Docs'
							description='I learn by reading documentation first, then reinforcing concepts with short videos and practice.'
						/>
						<UsesItem
							title='ChatGPT'
							description='I use it to debug, understand concepts, and improve my English explanations for assignments.'
						/>
					</UsesSection>
				</section>
			</div>
		</main>
	);
}
