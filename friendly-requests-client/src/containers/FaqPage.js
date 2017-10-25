import React, { Component } from 'react'
import { Accordion, Container, Icon } from 'semantic-ui-react'

export default class FaqPage extends Component {
  state = { activeIndex: 0 }

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
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What does "FAQ" stand for?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
            FAQ is an acronym for Frequently Asked Questions.  It is also sometimes used as the singular Frequently Asked Question.
            </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How is "FAQ" pronounced?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              "FAQ" is pronounced as either an initialism (F-A-Q) or an acronym.
            </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What do FAQs contain?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
            FAQs are compilations of information which are [usually] the result of certain questions constantly being asked (posted) in a newsgroup - hence the name FAQ (Frequently Asked Questions).
            </p>
          </Accordion.Content>
        </Accordion>
      </Container>

    )
  }
}
