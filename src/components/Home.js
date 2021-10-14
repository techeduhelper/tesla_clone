import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="model-s"
                description="Order Online For More Advantages"
                backgroundImg="model-s.jpg"
                leftBtntext="sda"
                rightBtntext="dsd"
            />
            <Section
                title="model-x"
                description="Order Online For More Advantages"
                backgroundImg="model-x.jpg"
                leftBtntext="sda"
                rightBtntext="dsd"
            />
            <Section
                title="model-y"
                description="Order Online Today now"
                backgroundImg="model-y.jpg"
                leftBtntext="sda"
                rightBtntext="dsd"
            />
            <Section
                title="model-3"
                description="Order Online For More Advantages"
                backgroundImg="model-3.jpg"
                leftBtntext="sda"
                rightBtntext="dsd"
            />
            <Section
                title="model-S"
                description="Order Online For More Advantages"
                backgroundImg="model-s.jpg"
                leftBtntext="sda"
                rightBtntext="dsd"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`