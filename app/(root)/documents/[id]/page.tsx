import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

const Document = () => {
  return (
    <>
      <Header>
        <div className='flex w-fit items-center justify-between gap-2'>
          <p className='document-title'>
            skjfsklnfj
          </p>
        </div>
      </Header>
        
      <Editor />
    </>
  )
}

export default Document