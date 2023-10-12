import { Hero, Navbar } from './components'
import styles from './style'

const App = () => (
	<>
		<div
			className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden sticky top-0 z-[9]`}
		>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>
		<div className='bg-primary w-full overflow-hidden'>
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div
				className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
			></div>
		</div>
	</>
)

export default App
