import React from 'react';
import styles from './code.module.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { SiJavascript } from 'react-icons/si';
import { GiPodiumWinner } from 'react-icons/gi';
import { FaRandom } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import TypeAnimation from 'react-type-animation';
import CodeAutoTyping from 'react-code-auto-typing';
import { anOldHope, atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TypewriterComponent from 'typewriter-effect';

const CodeSamples = () => {
  const [mouse, setMouse] = React.useState(false);

  const handleMouseDown = () => {
    setMouse(true);
  };

  const handleMouseUp = () => {
    setMouse(false);
  };

  const stringReturner = (params) => {
    return params;
  };

  const ceaserSnippet = `const ceaserCipher = (str, shift, decrypt = false) => {
    const s = decrypt ? (26 - shift) % 26 : shift;
    const n = s;
    0 ? s : 26 + (s % 26);
    return;
    [...str]
      .map((l, i) => {
        const c = str.charCodeAt(i);
        if (c > 65 && c < 90) return;
        String.fromCharCode(((c - 65 + n) % 26) + 65);
        if (c > 97 && c < 122) return;
        String.fromCharCode(((c - 97 + n) % 26) + 97);
        return;
        l;
      }).join('');
    };`;

  const fibonacci = `const fibonacci = (n) =>
    Array.from({ length: n }).reduce(
      (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
      []
    );
  fibonacci(6); // [0, 1, 1, 2, 3, 5]   `;
  const heapsort = `const heapsort = (arr) => {
        const a = [...arr];
        let l = a.length;
        const heapify = (a, i) => {
          const left = 2 * i + 1;
          const right = 2 * i + 2;
          let max = i;
          if (left < l && a[left] > a[max]) max = left;
      
          if (right < l && a[right] > a[max]) max = right;
      
          if (max !== i) {
            [a[max], a[i]] = [a[i], a[max]];
            heapify(a, max);
          }
        };
        for (let i = Math.floor(l / 2); i > 0; i -= 1) heapify(a, i);
        for (i = a.length - 1; i > 0; i--) {
          [a[0], a[i]] = [a[i], a[0]];
          l--;
          hepify(a, 0);
        }
        return a;
      };   `;

  return (
    <div className={`${styles.text_content_background}`}>
      <h1 className={`${styles.code_section_header}`}>
        <TypewriterComponent
          options={{
            strings: ['  Your alghoritm instructor', 'Online workspace', 'Free and Premium UI tools'],
            autoStart: true,
            delay: 75,
            deleteSpeed: 90,
            loop: true,
            wrapperClassName: `${styles.typeWritterWrapper}`,
            cursorClassName: `${styles.typeWritterCursor}`,
          }}
        />
      </h1>

      <div className={styles.code_container}>
        <div className={`${styles.code_content}`}>
          <h2 className={`${styles.code_section_body}`}>
            Thousands of alghoritms{' '}
            <span>
              <BsCodeSlash />
            </span>{' '}
            with explanation
          </h2>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn animate__slower">
          <div className={`${styles.img_container}`}>
            <div className="ide-container-ceaser">
              <div className="ide-header">
                <div className="file-container" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                  <SiJavascript className={`${mouse ? 'opacity' : ''}`} />
                  <span className={`${mouse ? 'opacity' : ''}`}>ceaser.js</span>
                </div>
              </div>

              <CodeAutoTyping
                language="javascript"
                className="code-snippet"
                syntaxHighlighterProps={{ style: atomOneDarkReasonable }}
              >
                {ceaserSnippet}
              </CodeAutoTyping>
            </div>
          </div>
        </AnimationOnScroll>
      </div>

      <div className={styles.code_container}>
        <AnimationOnScroll animateIn="animate__fadeIn animate__slower">
          <div className={`${styles.img_container}`}>
            <div className="ide-container-fibonacci">
              <div className="ide-header">
                <div className="file-container" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                  <SiJavascript className={`${mouse ? 'opacity' : ''}`} />
                  <span className={`${mouse ? 'opacity' : ''}`}>fibonacci.js</span>
                </div>
              </div>

              <CodeAutoTyping
                language="javascript"
                className="code-snippet"
                syntaxHighlighterProps={{ style: atomOneDarkReasonable }}
              >
                {fibonacci}
              </CodeAutoTyping>
            </div>
          </div>
        </AnimationOnScroll>
        <div className={`${styles.code_content}`}>
          <h2 className={`${styles.code_section_body}`}>
            Challenge with random{' '}
            <span>
              {' '}
              <FaRandom />
            </span>{' '}
            programmer
          </h2>
        </div>
      </div>
      <div className={styles.code_container}>
        <div className={`${styles.code_content}`}>
          <h2 className={`${styles.code_section_body}`}>
            Your Statistics showcases your achievements{' '}
            <span>
              {' '}
              <GiPodiumWinner />
            </span>{' '}
            to the world
          </h2>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn animate__slower">
          <div className={`${styles.img_container}`}>
            <div className="ide-container-heapsort">
              <div className="ide-header">
                <div className="file-container" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                  <SiJavascript className={`${mouse ? 'opacity' : ''}`} />
                  <span className={`${mouse ? 'opacity' : ''}`}>heapsort.js</span>
                </div>
              </div>
              {/* <div className="ide-body">
                <div className="ide-number">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                  <p>14</p>
                  <p>15</p>
                  <p>16</p>
                  <p>17</p>
                  <p>18</p>
                  <p>19</p>
                  <p>20</p>
                  <p>21</p>
                  <p>22</p>
                  <p>23</p>
                  <p>24</p>
                </div>
                <div className="ide-codearea">
                  <p>
                    <pre className="pre-const-arrow">const </pre> <pre className="pre-variable">heapsort</pre>{' '}
                    <pre className="pre-assignment-curly"> = arr </pre>
                    <pre className="pre-const-arrow">{stringReturner('=>')} </pre>{' '}
                    <pre className="pre-assignment-curly">{stringReturner('{')}</pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> const </pre> <pre className="js-operations">a </pre>{' '}
                    <pre className="pre-assignment-curly">= [...arr];</pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> let </pre> <pre className="pre-assignment-curly">l = </pre>{' '}
                    <pre className="js-operations">a</pre>
                    <pre className="pre-assignment-curly">.</pre> <pre className="pre-const-arrow">length</pre>{' '}
                    <pre className="pre-assignment-curly">;</pre>
                  </p>
                  <p></p>
                  <p>
                    <pre className="pre-const-arrow"> const </pre> <pre className="pre-variable">heapify </pre>{' '}
                    <pre className="pre-assignment-curly">= (</pre> <pre className="pre-parameter">a, i</pre>{' '}
                    <pre className="pre-assignment-curly">) </pre> <pre className="pre-const-arrow">{stringReturner('=>')} </pre>{' '}
                    <pre className="pre-assignment-curly">{stringReturner('{')}</pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> const </pre> <pre className="js-operations">left </pre>{' '}
                    <pre className="pre-assignment-curly">= </pre> <pre className="pre-const-arrow">2 </pre>{' '}
                    <pre className="pre-assignment-curly">* i + </pre> <pre className="pre-const-arrow">1</pre>{' '}
                    <pre className="pre-assignment-curly">;</pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> const </pre> <pre className="js-operations">right </pre>{' '}
                    <pre className="pre-assignment-curly">= </pre> <pre className="pre-const-arrow">2 </pre>{' '}
                    <pre className="pre-assignment-curly">* i + </pre> <pre className="pre-const-arrow">2</pre>{' '}
                    <pre className="pre-assignment-curly">;</pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> let </pre> <pre className="pre-assignment-curly">max = i;</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> if </pre>{' '}
                    <pre className="pre-assignment-curly">{stringReturner('(left < l ')}</pre>
                    <pre className="pre-const-arrow">&& </pre>
                    <pre className="pre-assignment-curly">{stringReturner('a[left] > a[max]) max = left;')}</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> if </pre>{' '}
                    <pre className="pre-assignment-curly">{stringReturner('(right < l ')}</pre>
                    <pre className="pre-const-arrow">&& </pre>
                    <pre className="pre-assignment-curly">{stringReturner('a[right] > a[max]) max = right;')}</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> if </pre>{' '}
                    <pre className="pre-assignment-curly">{stringReturner('(max !== i) {')}</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> [a[max], a[i]] = [a[i], a[max]];</pre>
                  </p>
                  <p>
                    <pre className="pre-variable"> heapify </pre> <pre className="pre-assignment-curly">(a, max);</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> {stringReturner('}')}</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> {stringReturner('};')}</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> for </pre> <pre className="pre-assignment-curly">(</pre>{' '}
                    <pre className="pre-const-arrow">let </pre> <pre className="pre-assignment-curly">i = </pre>{' '}
                    <pre className="pre-const-arrow">Math</pre> <per className="pre-assignment-curly">.</per>{' '}
                    <pre className="pre-variable">floor</pre> <pre className="pre-assignment-curly">(l / </pre>{' '}
                    <pre className="pre-const-arrow">2</pre>
                    <pre className="pre-assignment-curly">); </pre>{' '}
                    <pre className="pre-assignment-curly">{stringReturner('i > ')}</pre> <pre className="pre-const-arrow">0</pre>{' '}
                    <pre className="pre-assignment-curly">; i -= </pre> <pre className="pre-const-arrow">1</pre>{' '}
                    <pre className="pre-assignment-curly">) </pre> <pre className="pre-variable">heapify</pre>{' '}
                    <pre className="pre-assignment-curly">(a, i);</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> for </pre> <pre className="pre-assignment-curly">(i = </pre>{' '}
                    <pre className="js-operations">a</pre> <pre className="pre-assignment-curly">.</pre>{' '}
                    <pre className="pre-const-arrow">length </pre>
                    <pre>- </pre>
                    <pre className="pre-const-arrow">1</pre>{' '}
                    <pre className="pre-assignment-curly">{stringReturner('; i >')} </pre>
                    <pre className="pre-const-arrow">0</pre>{' '}
                    <pre className="pre-assignment-curly">{stringReturner('; i--) {')}</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> [a[</pre> <pre className="pre-const-arrow">0</pre>{' '}
                    <pre className="pre-assignment-curly">], a[i]] = [a[i], a[</pre> <pre className="pre-const-arrow">0</pre>{' '}
                    <pre className="pre-assignment-curly">]];</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> l--;</pre>
                  </p>
                  <p>
                    <pre className="pre-variable"> hepify</pre>
                    <pre className="pre-assignment-curly">(a, </pre>
                    <pre className="pre-const-arrow">0</pre>
                    <pre className="pre-assignment-curly">);</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> {stringReturner('}')}</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> return </pre>
                    <pre className="pre-assignment-curly">a;</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly">{stringReturner('};')}</pre>
                  </p>
                </div>
              </div> */}
              <CodeAutoTyping
                language="javascript"
                className="code-snippet"
                syntaxHighlighterProps={{ style: atomOneDarkReasonable }}
              >
                {heapsort}
              </CodeAutoTyping>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default CodeSamples;
