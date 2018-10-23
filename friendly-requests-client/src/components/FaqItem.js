import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

class FaqItem extends Component {

  render() {
    const { index, activeIndex, handleClick, faqText, faqAnswer } = this.props

    return (
      <span>
          <Accordion.Title active={activeIndex === index} index={index} onClick={handleClick}>
            <Icon name='dropdown' />
            {faqText}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            {faqAnswer}
          </Accordion.Content>
      </span>
    )
  }
}

export default FaqItem
