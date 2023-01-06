import { useRef, useState, useEffect } from 'react';

export default function useCKEditor() {
  const editorRef = useRef();
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  // @ts-ignore
  const { CKEditor, EditorTest, WordCount } = editorRef.current || {};

  /* eslint-disable consistent-return */
  useEffect(() => {
    // @ts-ignore
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      EditorTest: require('src/utils/editor/ckeditor'),
      WordCount: require('src/utils/editor/ckeditor'),
    };
    setIsEditorLoaded(true);
  }, []);

  return {
    isEditorLoaded,
    CKEditor,
    EditorTest,
    WordCount,
  };
}
