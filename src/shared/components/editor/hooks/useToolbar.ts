import React from 'react';
import type { Editor } from '@tiptap/react';

/**
 * 에디터 훅
 * 에디터 툴바 상태 변경 시 리렌더링 처리
 */

const useToolBar = (editor: Editor | null) => {
  // 강제 리렌더링용 상태
  const [, forceUpdate] = React.useState({});

  // 에디터 업데이트 시 리렌더링
  React.useEffect(() => {
    // 에디터 인스턴스가 없으면 종료
    if (!editor) {
      return;
    }
    // 업데이트 핸들러 등록
    const handleUpdate = () => {
      forceUpdate({});
    };

    // 에디터 이벤트 등록
    editor.on('selectionUpdate', handleUpdate);
    editor.on('transaction', handleUpdate);
    editor.on('focus', handleUpdate);
    editor.on('blur', handleUpdate);

    return () => {
      editor.off('selectionUpdate', handleUpdate);
      editor.off('transaction', handleUpdate);
      editor.off('focus', handleUpdate);
      editor.off('blur', handleUpdate);
    };
  }, [editor]);
}

export default useToolBar;