import React from 'react'
import './ProjectsIdeas.css'
import { AppProvider } from './context'

import Layout from './Components/Layout'

export default function ProjectsIdeas() {
  return (
    <div className="projects-ideas">
      <AppProvider>
        <Layout/>
      </AppProvider>
    </div>
  )
}
