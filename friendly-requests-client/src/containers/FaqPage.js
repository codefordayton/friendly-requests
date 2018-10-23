import React, { Component } from 'react'
import { Accordion, Container } from 'semantic-ui-react'
import FaqItem from '../components/FaqItem';

export default class FaqPage extends Component {
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Container text style={{ marginTop: '7em' }}>
        <Accordion>
          <FaqItem index={0} activeIndex={activeIndex} handleClick={this.handleClick}
            faqText="What is Friendly Requests?"
            faqAnswer="Friendly Requests is a web application that helps people make public record requests in the state of Ohio."
          />
          <FaqItem index={1} activeIndex={activeIndex} handleClick={this.handleClick}
            faqText="How does it work?"
            faqAnswer={
              <p>Fill out and submit the form on the <a href="/">Home</a> page. Friendly Requests will generate a Microsoft Word document populated with the information provided. Make additional edits or print, sign, and mail to the specified agency, department, or organization.</p>
            }
          />
          <FaqItem index={2} activeIndex={activeIndex} handleClick={this.handleClick}
            faqText="How can I suggest improvements?"
            faqAnswer={
              <p>Head on over to the <a href="https://github.com/codefordayton/friendly-requests/issues" target="_blank"  rel="noopener noreferrer">Friendly Requests</a> project on GitHub, click the "New Issue" button, and suggest an improvement!</p>
            }
          />
        </Accordion>
      </Container>

    )
  }
}
