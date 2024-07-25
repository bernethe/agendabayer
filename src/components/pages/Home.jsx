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
				agenda.map( item01 => <>
					<div key={item01.day.slug} className='bg-blue text-sky text-2xl font-bold italic text-center mt-4 p-2'>
						{ item01.day[lang] }
					</div>
					{
						item01.schedule.map( (item, index02) => <>
							{
								item.kind === 2 ?
									<div key={index02} className='bg-sky text-blue text-xl font-bold italic p-2'>
										{item.name[lang]}
									</div>
									:
									<div key={index02} className='md:flex p-2 border-b'>
										<div className='md:w-1/12'>{item.hour}</div>
										<div className='md:w-8/12 md:px-4'>{item.name[lang]}</div>
										<div className='md:w-3/12'>
											{
												item.speakers.map( (spk, inSpk) => <div key={inSpk} className='md:flex justify-star items-center'>
													<img src={ `/img/flag-${spk.country}.webp` } alt='' className='w-4 h-4 mr-2' />
													<span className='inline-block mr-2 w-4'>
														{
															spk.isBayer === 1 ? <img alt='' src='/img/bayer-flag-ico.webp' /> : <></>
														}
													</span>
													{ spk.name }
												</div> )
											}
										</div>
									</div>
							}
						</> )
					}
				</>)
			}
		</div>
		<div className='container mx-auto my-8 text-sm'>
			<p className='mb-2'>PP-PF-OPHT-CO-0010-1</p>
			{
				lang === 'es' ?
					<p>El producto Eylia 8 mg (Aflibercept 8 mg) no se encuentra aprobado por las agencias regulatorias de los países Latinoamericanos. Bayer no promueve el uso de sus productos en indicaciones por fuera a las aprobadas por la agencia regulatoria. La disponibilidad, presentación e indicaciones de los productos farmacéuticos puede variar de un país a otro. Consulte con su representante de ventas Bayer. Prohibido reproducir, fotografiar y/o entregar a terceros.<br />
					Invitación personal e intransferible. Válida para una persona. Dirigida exclusivamente a profesionales de la salud/profesionales médicos. Demás detalles serán informados mediante invitación formal escrita. Para mayor información por favor contactar a su representante de promoción médica.<br />
					Para Perú: RUC: 20100096341 Denominación Social: Bayer, S. A. .Si desea informar o reportar un evento adverso o un reclamo técnico de producto asociado a un producto Bayer, por favor, póngase en contacto con su médico o profesional de la salud, su autoridad sanitaria local y/o dirija sus comentarios en: https://safetrack-public.bayer.com/</p>
					:
					<p>The product Eylia 8 mg (Aflibercept 8 mg) is not approved by the regulatory agencies of Latin American countries. Bayer does not promote the use of its products in indications other than those approved by the regulatory agency.  The availability, presentation and indications of pharmaceutical products may vary from country to country.Please consult your Bayer sales representative. It is forbidden to reproduce, photograph and/or deliver to third parties. Personal and non-transferable invitation. Valid for one person. Aimed exclusively at health professionals/medical professionals. Other details will be informed by formal written invitation. For more information, please contact your health promotion representative. 
					For Perú: RUC: 20100096341 Denominación Social: Bayer, S. A. If you wish to inform or report an adverse event or technical product complaint associated with a Bayer product, please contact your physician or healthcare professional, your local health authority and / or provide your comments at: https://safetrack-public.bayer.com/</p>
			}
		</div>
	</>
}

export default Home