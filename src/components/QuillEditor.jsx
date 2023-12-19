import React, { useState } from 'react';
import { Editor } from 'primereact/editor';

export default function QuillEditor() {
  const [text, setText] = useState('');
  return (
    <div className='p-4 md:p-6 lg:p-8'>
      <div className='surface-border border-round surface-card'>
        <p className='text-center py-2 text-6xl font-bold'>Quill Editor </p>
        <div className='card p-4 '>
          <Editor
            value={text}
            onTextChange={(e) => setText(e.htmlValue)}
            style={{ height: '320px' }}
          />
        </div>
        <div className='card p-4 m-4'>{text}</div>
      </div>
    </div>
  );
}
