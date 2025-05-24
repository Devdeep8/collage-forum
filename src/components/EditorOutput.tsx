'use client'

import CustomCodeRenderer from '@/components/renderers/CustomCodeRenderer'
import CustomImageRenderer from '@/components/renderers/CustomImageRenderer'
import { FC } from 'react'
import dynamic from 'next/dynamic'

const Output = dynamic(
  async () => (await import('editorjs-react-renderer')).default,
  { ssr: false }
)

interface EditorOutputProps {
  content: any
}

const renderers = {
  image: CustomImageRenderer,
  code: CustomCodeRenderer,
}

const style = {
  paragraph: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
}

/**
 * EditorOutput is a functional component that renders content using a dynamic
 * Output component with custom styles and renderers for images and code blocks.
 * 
 * @param {EditorOutputProps} content - The content to be rendered, expected to
 * be in a format compatible with the Output component.
 */

const EditorOutput: FC<EditorOutputProps> = ({ content }: EditorOutputProps) => {
  return (
    <Output
      style={style}
      className='text-sm'
      renderers={renderers}
      data={content}
    />
  )
}


export default EditorOutput
