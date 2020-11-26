import React from 'react'
import styled from 'styled-components'
import {About} from '../styles'

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do i start</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur, vel, blanditiis alias facilis veniam illum deserunt modi minima optio doloribus. Temporibus incidunt ratione provident neque totam dicta dolores fuga.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur, vel, blanditiis alias facilis veniam illum deserunt modi minima optio doloribus. Temporibus incidunt ratione provident neque totam dicta dolores fuga.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different payment</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur, vel, blanditiis alias facilis veniam illum deserunt modi minima optio doloribus. Temporibus incidunt ratione provident neque totam dicta dolores fuga.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>what products do you offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur, vel, blanditiis alias facilis veniam illum deserunt modi minima optio doloribus. Temporibus incidunt ratione provident neque totam dicta dolores fuga.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}

.faq-line{
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
}

.question{
    padding: 3rem 0;
    cursor: pointer;
}
.answer{
    padding: 2rem 0;
    p{
        padding: 1rem0;
    }
}
`

export default FaqSection
