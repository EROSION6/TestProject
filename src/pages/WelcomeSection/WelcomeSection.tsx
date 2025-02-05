import { Html, Head, Body, Container, Section } from '@react-email/components'
import logo2 from '../../assets/Logotype (1).svg'
import { Title } from '../../components/Title/Title'
import { Banner } from '../../components/Banner/Banner'
import { MyButton } from '../../components/ui/Button/Button'
import { Footer } from '../../components/Footer/Footer'
import { Links } from '../../components/Links/Links'
import { welcomeLinks } from '../../constant/data'

export const WelcomeSection = () => {
	return (
		<Html>
			<Head />
			<Body style={{ boxSizing: 'border-box', margin: 0, padding: 0 }}>
				<Container
					style={{ padding: '35px', backgroundColor: 'rgb(255, 255, 255)' }}
				>
					<Section>
						<img
							src={logo2}
							alt='Wellpin Logo'
							style={{ width: '150px', height: 'auto' }}
						/>
						<Title
							title='Welcome to Wellpin’s family!'
							descr="Hi [User's First Name]! Here's your personal link to share. Try it out!"
						/>
						<Banner
							title='Pin a meeting with Артем Жихарев'
							logoDescr='Free Scheduling Assistant'
							link='https://wellpin.io/artemzhikharev'
						/>
						<Links title='Feel the power of your link!' links={welcomeLinks} />
						<MyButton>Copy public link</MyButton>
						<Footer />
					</Section>
				</Container>
			</Body>
		</Html>
	)
}
