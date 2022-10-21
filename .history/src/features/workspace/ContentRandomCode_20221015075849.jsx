import React, { useState } from 'react';
import WorkspaceNav from './WorkspaceNav';
import styles from './z.module.css';
import { languageOptions } from './constants/languageOptions';
import Editor from '@monaco-editor/react';
import { useNavigate } from 'react-router-dom';
import files from './files';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Code,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { AddIcon, HamburgerIcon, MinusIcon } from '@chakra-ui/icons';
import { codeSelectors } from './codesamples';
import SelectAndSelectOptions from './SelectAndSelectOptions';
import routingObject from './../../routing';
import RandomCodeItem from './RandomCodeItem';

const ContentRandomCode = ({ ref }) => {
  const { sortBy, status, progress, difficulty } = codeSelectors;
  const jsonFile = files['configure.json']; // files is an object with all the files
  const cakejs = files['cake.js'];

  const navigate = useNavigate();

  const { dynamicRouting } = routingObject;

  const [language, setLanguage] = useState(languageOptions[0]);

  return (
    <div>
      <WorkspaceNav />
      <div className={`${styles.random_code_container_board}`}>
        <div>
          <div className={`${styles.random_code_container_board_selection}`}>
            <SelectAndSelectOptions paramsArray={languageOptions} placeholder="Select language" setLanguage={setLanguage} />

            <SelectAndSelectOptions paramsArray={sortBy} placeholder="Sort by" />
            <SelectAndSelectOptions paramsArray={status} placeholder="Status" />
            <SelectAndSelectOptions paramsArray={progress} placeholder="Progress" />
            <SelectAndSelectOptions paramsArray={difficulty} placeholder="Difficulty" />
            <button>Show Samples</button>
          </div>
          <div className={`${styles.accordion_container}`}>
            <Accordion allowToggle>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton size="lg">
                        <Box flex="1" textAlign="left" size="lg">
                          What is code snippet?
                        </Box>
                        {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <Divider margin="15px 0" />
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Can l add my own code snippet?
                        </Box>
                        {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <Divider margin="15px 0" />
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          How can l contribute?
                        </Box>
                        {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Divider margin="15px 0" />
            <button onClick={() => dynamicRouting(navigate, '/documentation')}>More Docs</button>
          </div>
        </div>
        <div>
          <div className={`${styles.menu_exp_container}`}>
            <Code children="Code Samples" padding="5px 8px" fontSize="17px" borderRadius="8px" />
            <Menu>
              <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
              <MenuList backgroundColor="#0e1217">
                <MenuItem border="none">Download</MenuItem>
                <MenuItem border="none">Create a Copy</MenuItem>
                <MenuItem border="none">Mark as Draft</MenuItem>
                <MenuItem border="none">Delete</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className={`${styles.random_code_container_board_code}`}>
            <div className={`${styles.code_snippets_container}`}>
              <RandomCodeItem title="sort~algorithm" />
              <RandomCodeItem title="unique~difference" />
              <RandomCodeItem title="euclidean~Algorithm" />
              <RandomCodeItem title="Big~Rational" />
              <RandomCodeItem title="knuth~MorrisPratt" />
              <RandomCodeItem title="sort~algorithm" />
              <RandomCodeItem title="unique~difference" />
              <RandomCodeItem title="euclidean~Algorithm" />
              <RandomCodeItem title="Big~Rational" />
              <RandomCodeItem title="knuth~MorrisPratt" />
            </div>

            <div>
              <Editor
                language={language}
                defaultValue={cakejs.value}
                defaultLanguage={cakejs.language}
                theme={'vs-dark'}
                options={JSON.parse(jsonFile.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRandomCode;
