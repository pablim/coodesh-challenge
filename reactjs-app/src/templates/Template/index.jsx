import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './styles.module.scss'

function Template({ navbar, sidebar, content }) {
	return (
        <Container 
			className={styles.template}
			fluid
		>	
			<Row className={styles.navbar}>
				<Col>
					{navbar}
				</Col>
			</Row>
			<Row >
				<Col className={styles.noXPaddings}>
					<div className={`${styles.mainContainer} d-flex`}>

						{sidebar}
						<div className={`${styles.main} d-flex`}>
							{content}
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Template;

