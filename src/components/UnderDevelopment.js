import React from 'react'
import styled from 'styled-components'

const UnderDevelopment = () => {
	return (
		<Container>
			<Title>This website is under Maintainance.</Title>T
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
	font-size: 3rem;
	margin-top: 45vh;
	box-shadow: 5px 5px 10px gray;
	border-radius: 10px;
	padding: 2rem;
`

export default UnderDevelopment
