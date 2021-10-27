import React, { Component }  from 'react';
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../DataSlider";


const Container = styled.div`

    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2; 
    overflow: hidden;
`

const Wrapper = styled.div`
overflow: hidden;
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
   
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 525px;
    background-color: #${props=>props.bg}
    overflow: hidden;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    overflow: hidden;
`;

const Image = styled.img`
    height:80%;
    overflow: hidden;

`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px:
    margin-left: 10px;
    overflow: hidden;
`;

const Title = styled.h1`
    font-size: 70px;
    overflow: hidden;
 
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px; 
    overflow: hidden;
`;

const Button = styled.button`
     padding: 10px;
     font-size: 20px;
     background-color: transparent;
     cursor: pointer;   
`;



const SimpleSlider = () => {
        const [slideIndex, setSlideIndex]=useState(0)

    const handleClick = (direction)=> {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
    };
    return (
        <Container  >
            
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide bg={item.bg}> 
                 <ImgContainer>
                   <Image src={item.img} />
                 </ImgContainer>
                 {/* <InfoContainer>
                   <Title>{item.title}</Title>
                   <Desc>{item.desc}</Desc>
                   {/* <Button></Button>}
                 </InfoContainer> */}
                </Slide>
                ))}
            </Wrapper>
             
        </Container>    
    )
}

export default SimpleSlider