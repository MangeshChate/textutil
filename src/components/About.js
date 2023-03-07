import React, { useState } from 'react'

export default function About() {
  const [btntext, setbtntext] = useState('Enable Dark Mode ')
  const [myStyle, setMyStyle] = useState({
    color: '#252525',
    backgroundColor: 'white',
    border: '2px solid white',
  })

  const toggleStyle = () => {
    if (myStyle.color == 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: '#252525',
      })
      setbtntext('Enable Light Mode ')
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: '#252525',
      })
      setbtntext('Enable Light Mode ')
    }
  }

  return (

    <div className="container my-5" style={myStyle} >
    <div className='container p-3 m-3'>

      <h1>About Us</h1>
      <div className="container">
        <p>
          Textual importance refers to the significance or relevance of a
          particular piece of text within a larger context. This can be measured
          by various factors such as the frequency of occurrence of certain
          keywords or phrases, the level of detail and specificity provided,
          <br />
          the
          clarity and coherence of the writing, and the overall impact or
          influence of the text on its intended audience. In the context of
          natural language processing (NLP), textual importance is often
          evaluated through techniques such as text summarization, sentiment
          analysis, and topic modeling. These approaches aim to extract key
          information from large volumes of text and identify patterns or trends
          that can be used to improve understanding and decision-making.
        </p>
      </div>
    </div>
    </div>
  )
}
