import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model-S"
                description="Order Online For More Advantages"
                backgroundImg="model-s.jpg"
                leftBtntext="sda"
                rightBtntext="dsd"
            />
            <Section
                title="Model-X"
                description="Order Online For More Advantages"
                backgroundImg="model-x.jpg"
                leftBtntext="sda"
                rightBtntext="dsd"
            />
            <Section
                title="Model-Y"
                description="Order Online For More Advantages"
                backgroundImg="model-y.jpg"
                leftBtntext="sda"
                rightBtntext="dsd"
            />
            <Section
                title="Model-3"
                description="Order Online For More Advantages"
                backgroundImg="model-3.jpg"
                leftBtntext="sda"
                rightBtntext="dsd"
            />
            <Section
                title="Model-S"
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