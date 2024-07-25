import React, {useEffect, useState} from 'react';
import agenda from '../../json/agenda.json';

const Home = () => {

	const [lang, setLang] = useState();
	
	useEffect(() => {
		setLang(navigator.languages.includes('es') ? 'es' : 'en')
	}, [])
	

	return <>
		<header className="bg-header bg-center bg-no-repeat bg-cover aspect-[50/23] flex justify-center items-end pb-4">
			<h1 className='font-bold italic text-3xl text-blue text-center'>{ lang === 'es' ? 'AGENDA ACADÉMICA' : 'ACADEMIC PROGRAM' }</h1>
		</header>
		<div className='container mx-auto'>
			{
				agenda.map( (item01, index01) => <>
					<div key={index01} className='bg-blue text-sky text-2xl font-bold italic text-center mt-4 p-2'>
						{ item01.day[lang] }
					</div>
					{
						item01.schedule.map( (item, index) => <>
							{
								item.kind === 2 ?
									<div key={index} className='bg-sky text-blue text-xl font-bold italic p-2'>
										{item.name[lang]}
									</div>
									:
									<div key={index} className='flex p-2 border-b'>
										<div className='md:w-1/6'>{item.hour}</div>
										<div className='md:w-3/6'>{item.name[lang]}</div>
									</div>
							}
						</> )
					}
				</>)
			}
		</div>
	</>
}

export default Home