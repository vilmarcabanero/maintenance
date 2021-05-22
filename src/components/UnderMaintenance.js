import React from 'react'
import styled from 'styled-components'

const Index = () => {
	return (
		<Container>
			<Title>This website is under maintenance.</Title>
		</Container>
	)
}

const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Title = styled.h1`
	color: white;
	font-size: 2.75rem;
	margin-top: 40vh;
	box-shadow: 5px 5px 10px gray;
	border-radius: 10px;
	padding: 2.5rem;
	text-align: center;

	@media (max-width: 992px) {
		margin-top: 35vh;
		font-size: 2.25rem;
		margin-left: 1rem;
		margin-right: 1rem;
	}

	@media (max-width: 576px) {
		margin-top: 35vh;
		font-size: 1.75rem;
		margin-left: 1rem;
		margin-right: 1rem;
	}
`

export default Index
