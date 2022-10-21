/* eslint-disable no-unused-vars */
import React from 'react';
import WorkspaceNav from './WorkspaceNav';
import styles from './z.module.css';
import Editor from '@monaco-editor/react';
import files from './files';
import { FaCopy } from 'react-icons/fa';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

const ContentUITools = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedFile, setSelectedFile] = React.useState(files.com);
  const [selectedFileCode, setSelectedFileCode] = React.useState('');
  const [selectedFileDescription, setSelectedFileDescription] = React.useState('');
  const [selectedFileProps, setSelectedFileProps] = React.useState('');
  const [selectedFileImports, setSelectedFileImports] = React.useState([
    {
      name: 'React',
      path: 'react',
    },
  ]);
  const [selectedFileCodePreview, setSelectedFileCodePreview] = React.useState('');
  const [selectedFileCodePreviewProps, setSelectedFileCodePreviewProps] = React.useState('');
  const [selectedFileCodePreviewImports, setSelectedFileCodePreviewImports] = React.useState([
    {
      name: 'React',
      path: 'react',
    },
  ]);
  const [editor, setEditor] = React.useState(null);
  const [code, setCode] = React.useState('');
  const [codePreview, setCodePreview] = React.useState('');
  const [codePreviewProps, setCodePreviewProps] = React.useState('');
  const [codePreviewImports, setCodePreviewImports] = React.useState([
    {
      name: 'React',
      path: 'react',
    },
  ]);
  const [codePreviewImportsString, setCodePreviewImportsString] = React.useState('');
  const [codePreviewPropsString, setCodePreviewPropsString] = React.useState('');
  const [codePreviewString, setCodePreviewString] = React.useState('');
  const [codeString, setCodeString] = React.useState('');
  const [codeProps, setCodeProps] = React.useState('');
  const [codePropsString, setCodePropsString] = React.useState('');
  const [codeImports, setCodeImports] = React.useState([
    {
      name: 'React',
      path: 'react',
    },
  ]);
  const [codeImportsString, setCodeImportsString] = React.useState('');
  const [codePreviewComponent, setCodePreviewComponent] = React.useState('');
  const [codePreviewComponentProps, setCodePreviewComponentProps] = React.useState('');
  const [codePreviewComponentImports, setCodePreviewComponentImports] = React.useState([
    {
      name: 'React',
      path: 'react',
    },
  ]);

  const component = files['ComponentName.js'];

  return (
    <div>
      <WorkspaceNav />
      <div className={`${styles.random_code_container_board}`}>
        <div>
          <h1 className={`${styles.react_cms_header}`}>React UI Builder</h1>
        </div>
        <div className={`${styles.ui_output_output_tools}`}>
          <div></div>
          <div>
            <FaCopy title="Copy" onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent backgroundColor="#0e1217" border="1px solid #383d47" w="648px" maxWidth="800px">
                <p className={`${styles.code_modal_header}`}>Your code copied to clipboard!</p>
                <ModalCloseButton />
                <ModalBody borderRadius="6px" overflow="hidden">
                  <Editor
                    theme="vs-dark"
                    options={{
                      glyphMargin: false,
                      minimap: { enabled: false },
                      readOnly: true,
                      wordWrap: 'on',
                      scrollbar: {
                        verticalScrollbarSize: 0,
                        horizontalScrollbarSize: 0,
                        horizontal: 'hidden',
                        vertical: 'visible',
                        verticalHasArrows: true,
                        horizontalHasArrows: false,
                        arrowSize:0,
                        useShadows: true
                      },
                    }}
                    defaultLanguage={component.language}
                    defaultValue={component.value}
                    width="600px"
                    height="400px"
                  />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Editor
              defaultLanguage={component.language}
              defaultValue={component.value}
              theme="vs-dark"
              options={{
                lineNumbers: 'on',
                lineNumbersMinChars: 3,
                fontSize: 18,
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                autoIndent: 'full',
                automaticLayout: true,
                tabSize: 2,
                folding: true,
                scrollbar: {
                  vertical: 'visible',
                  horizontal: 'visible',
                  useShadows: false,
                  verticalScrollbarSize: 10,
                  horizontalScrollbarSize: 10,
                  verticalHasArrows: false,
                  horizontalHasArrows: false,
                  arrowSize: 30,
                },
                fixedOverflowWidgets: true,
                glyphMargin: true,
              }}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContentUITools;
