import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = props => {
  return (
    <div />
  )
}

GuessedWords.PropTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWords: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords