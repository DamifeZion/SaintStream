import React from 'react'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

const MovieLibrary = () => {
  useDocumentTitle("Movie Library")

  return (
    <div>
      MovieLibrary
    </div>
  )
}

export default MovieLibrary