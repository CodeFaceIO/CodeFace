import React from "react";
import styles from "./code.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { SiJavascript } from "react-icons/si";
import { GiPodiumWinner } from "react-icons/gi";
import { FaRandom } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import TypeAnimation from "react-type-animation";

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

  return (
    <div className={`${styles.text_content_background}`}>
      <h1 className={`${styles.code_section_header}`}>
        <TypeAnimation
          cursor={true}
          className={`${styles.code_section_header}`}
          sequence={[
            "  Your alghoritm instructor",
            4000,
            "Online workspace",
            4000,
            "Free and Premium UI tools",
            4000,
          ]}
          wrapper="p"
          repeat={Infinity}
        />
      </h1>

      <div className={styles.code_container}>
        <div className={`${styles.code_content}`}>
          <h2 className={`${styles.code_section_body}`}>
            Thousands of alghoritms{" "}
            <span>
              <BsCodeSlash />
            </span>{" "}
            with explanation
          </h2>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn animate__slower">
          <div className={`${styles.img_container}`}>
            <div className="ide-container-ceaser">
              <div className="ide-header">
                <div
                  className="file-container"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  <SiJavascript className={`${mouse ? "opacity" : ""}`} />
                  <span className={`${mouse ? "opacity" : ""}`}>ceaser.js</span>
                </div>
              </div>
              <div className="ide-body">
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
                </div>
                <div className="ide-codearea">
                  <p>
                    <pre className="pre-const-arrow">const&nbsp;</pre>{" "}
                    <pre className="pre-variable">ceaserCipher&nbsp;</pre>{" "}
                    <pre className="pre-assignment-curly">=&nbsp;</pre>{" "}
                    <pre className="pre-assignment-curly">(</pre>
                    <pre className="pre-parameter">
                      {stringReturner("str, shift, decrypt = ")}
                    </pre>{" "}
                    <pre className="pre-variable">false</pre>
                    <pre>)</pre>{" "}
                    <pre className="pre-const-arrow">
                      &nbsp; {stringReturner("=>")} &nbsp;
                    </pre>
                    <pre>{stringReturner("{")}</pre>
                    <pre></pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> const&nbsp;</pre>
                    <pre className="js-operations">s&nbsp;</pre>{" "}
                    <pre className="pre-assignment-curly">=&nbsp;</pre>{" "}
                    <pre className="pre-assignment-curly">decrypt ? </pre>{" "}
                    <pre className="pre-assignment-curly">(</pre>{" "}
                    <pre className="pre-const-arrow"> 26 </pre>{" "}
                    <pre className="pre-assignment-curly">- shift</pre>{" "}
                    <pre className="pre-assignment-curly">) %</pre>{" "}
                    <pre className="pre-const-arrow"> 26 </pre>{" "}
                    <pre className="pre-assignment-curly"> : shift;</pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> const</pre>{" "}
                    <pre className="js-operations"> n </pre>{" "}
                    <pre className="pre-assignment-curly">= s</pre>{" "}
                    <pre className="pre-const-arrow"> 0 </pre>
                    <pre className="pre-assignment-curly">? s :</pre>
                    <pre className="pre-const-arrow"> 26 </pre>
                    <pre className="pre-assignment-curly">+ (s %</pre>{" "}
                    <pre className="pre-const-arrow"> 26</pre>
                    <pre className="pre-assignment-curly">);</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> return</pre>{" "}
                    <pre className="pre-assignment-curly">[...str]</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> .</pre>{" "}
                    <pre className="pre-variable">map</pre>{" "}
                    <pre className="pre-assignment-curly">((</pre>{" "}
                    <pre className="pre-assignment-curly">l, i</pre>{" "}
                    <pre className="pre-assignment-curly">)</pre>{" "}
                    <pre className="pre-const-arrow">
                      {" "}
                      {stringReturner("=>")}{" "}
                    </pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("{")}
                    </pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> const</pre>{" "}
                    <pre className="js-operations"> c</pre>{" "}
                    <pre className="pre-assignment-curly"> = </pre>{" "}
                    <pre className="js-operations">str</pre>{" "}
                    <pre className="pre-assignment-curly">.</pre>
                    <pre className="pre-variable">charCodeAt</pre>{" "}
                    <pre className="pre-assignment-curly">(i);</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> if</pre>{" "}
                    <pre className="pre-assignment-curly">
                      (c {stringReturner(">")}{" "}
                    </pre>{" "}
                    <pre className="pre-const-arrow">65 &&</pre>
                    <pre className="pre-assignment-curly">
                      {" "}
                      c {stringReturner("<")}{" "}
                    </pre>{" "}
                    <pre className="pre-const-arrow">90</pre>{" "}
                    <pre className="pre-assignment-curly">)</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> return </pre>{" "}
                    <pre className="pre-const-arrow">String</pre>{" "}
                    <pre className="pre-assignment-curly">.</pre>{" "}
                    <pre className="pre-variable">fromCharCode</pre>{" "}
                    <pre className="pre-assignment-curly">(((c - </pre>{" "}
                    <pre className="pre-const-arrow">65 </pre>{" "}
                    <pre className="pre-assignment-curly">+ n) %</pre>{" "}
                    <pre className="pre-const-arrow"> 26 </pre>
                    <pre className="pre-assignment-curly">) +</pre>{" "}
                    <pre className="pre-const-arrow"> 65</pre>{" "}
                    <pre className="pre-assignment-curly">);</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> if</pre>{" "}
                    <pre className="pre-assignment-curly">
                      (c {stringReturner(">")}{" "}
                    </pre>{" "}
                    <pre className="pre-const-arrow">97 && </pre>{" "}
                    <pre className="pre-assignment-curly">
                      c {stringReturner("<")}{" "}
                    </pre>{" "}
                    <pre className="pre-const-arrow">122</pre>{" "}
                    <pre className="pre-assignment-curly">)</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> return </pre>{" "}
                    <pre className="pre-const-arrow">String</pre>{" "}
                    <pre className="pre-assignment-curly">.</pre>{" "}
                    <pre className="pre-variable">fromCharCode</pre>{" "}
                    <pre className="pre-assignment-curly">(((c - </pre>{" "}
                    <pre className="pre-const-arrow">97 </pre>{" "}
                    <pre className="pre-assignment-curly">+ n) %</pre>{" "}
                    <pre className="pre-const-arrow"> 26 </pre>
                    <pre className="pre-assignment-curly">) +</pre>{" "}
                    <pre className="pre-const-arrow"> 97</pre>{" "}
                    <pre className="pre-assignment-curly">);</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> return</pre>{" "}
                    <pre className="pre-assignment-curly"> l;</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly">
                      {" "}
                      {stringReturner("})")}
                    </pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> .</pre>{" "}
                    <pre className="pre-variable">join</pre>
                    <pre className="pre-assignment-curly">(</pre>{" "}
                    <pre className="string-literal">''</pre>{" "}
                    <pre className="pre-assignment-curly">);</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly">
                      {" "}
                      {stringReturner("};")}
                    </pre>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>

      <div className={styles.code_container}>
        <AnimationOnScroll animateIn="animate__fadeIn animate__slower">
          <div className={`${styles.img_container}`}>
            <div className="ide-container-fibonacci">
              <div className="ide-header">
                <div
                  className="file-container"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  <SiJavascript className={`${mouse ? "opacity" : ""}`} />
                  <span className={`${mouse ? "opacity" : ""}`}>
                    fibonacci.js
                  </span>
                </div>
              </div>
              <div className="ide-body">
                <div className="ide-number">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                </div>
                <div className="ide-codearea">
                  <p>
                    <pre className="pre-const-arrow">const </pre>{" "}
                    <pre className="pre-variable">fibonacci </pre>{" "}
                    <pre className="pre-assignment-curly">= n </pre>{" "}
                    <pre className="pre-const-arrow">
                      {stringReturner("=>")}
                    </pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> Array</pre>{" "}
                    <pre className="pre-assignment-curly">.</pre>{" "}
                    <pre className="pre-variable">from</pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("({ length: n }).")}
                    </pre>{" "}
                    <pre className="pre-variable">reduce</pre>{" "}
                    <pre className="pre-assignment-curly">(</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> (</pre>{" "}
                    <pre className="pre-parameter">acc, val, i</pre>{" "}
                    <pre className="pre-assignment-curly">)</pre>{" "}
                    <pre className="pre-const-arrow">
                      {" "}
                      {stringReturner("=>")}{" "}
                    </pre>{" "}
                    <pre className="js-operations">acc</pre>{" "}
                    <pre className="pre-assignment-curly">.</pre>{" "}
                    <pre className="pre-variable">concat</pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("(i >")}{" "}
                    </pre>
                    <pre className="pre-const-arrow">1</pre>{" "}
                    <pre className="pre-assignment-curly"> ? acc[i - </pre>{" "}
                    <pre className="pre-const-arrow">1</pre>{" "}
                    <pre className="pre-assignment-curly">] + acc[i - </pre>{" "}
                    <pre className="pre-const-arrow">2</pre>{" "}
                    <pre className="pre-assignment-curly">] : i),</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> []</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> ) ;</pre>
                  </p>
                  <p>
                    <pre className="pre-variable">fibonacci</pre>{" "}
                    <pre className="pre-assignment-curly">(</pre>{" "}
                    <pre className="pre-const-arrow">6</pre>
                    <pre className="pre-assignment-curly">);</pre>{" "}
                    <pre className="pre-comment">
                      {stringReturner(" // [0, 1, 1, 2, 3, 5]")}
                    </pre>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
        <div className={`${styles.code_content}`}>
          <h2 className={`${styles.code_section_body}`} >
            Challenge with random{" "}
            <span>
              {" "}
              <FaRandom />
            </span>{" "}
            programmer
          </h2>
        </div>
      </div>
      <div className={styles.code_container}>
        <div className={`${styles.code_content}`}>
          <h2 className={`${styles.code_section_body}`}>
            Your Statistics showcases your achievements{" "}
            <span>
              {" "}
              <GiPodiumWinner />
            </span>{" "}
            to the world
          </h2>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn animate__slower">
          <div className={`${styles.img_container}`}>
            <div className="ide-container-heapsort">
              <div className="ide-header">
                <div
                  className="file-container"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  <SiJavascript className={`${mouse ? "opacity" : ""}`} />
                  <span className={`${mouse ? "opacity" : ""}`}>
                    heapsort.js
                  </span>
                </div>
              </div>
              <div className="ide-body">
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
                    <pre className="pre-const-arrow">const </pre>{" "}
                    <pre className="pre-variable">heapsort</pre>{" "}
                    <pre className="pre-assignment-curly"> = arr </pre>
                    <pre className="pre-const-arrow">
                      {stringReturner("=>")}{" "}
                    </pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("{")}
                    </pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> const </pre>{" "}
                    <pre className="js-operations">a </pre>{" "}
                    <pre className="pre-assignment-curly">= [...arr];</pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> let </pre>{" "}
                    <pre className="pre-assignment-curly">l = </pre>{" "}
                    <pre className="js-operations">a</pre>
                    <pre className="pre-assignment-curly">.</pre>{" "}
                    <pre className="pre-const-arrow">length</pre>{" "}
                    <pre className="pre-assignment-curly">;</pre>
                  </p>
                  <p></p>
                  <p>
                    <pre className="pre-const-arrow"> const </pre>{" "}
                    <pre className="pre-variable">heapify </pre>{" "}
                    <pre className="pre-assignment-curly">= (</pre>{" "}
                    <pre className="pre-parameter">a, i</pre>{" "}
                    <pre className="pre-assignment-curly">) </pre>{" "}
                    <pre className="pre-const-arrow">
                      {stringReturner("=>")}{" "}
                    </pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("{")}
                    </pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> const </pre>{" "}
                    <pre className="js-operations">left </pre>{" "}
                    <pre className="pre-assignment-curly">= </pre>{" "}
                    <pre className="pre-const-arrow">2 </pre>{" "}
                    <pre className="pre-assignment-curly">* i + </pre>{" "}
                    <pre className="pre-const-arrow">1</pre>{" "}
                    <pre className="pre-assignment-curly">;</pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> const </pre>{" "}
                    <pre className="js-operations">right </pre>{" "}
                    <pre className="pre-assignment-curly">= </pre>{" "}
                    <pre className="pre-const-arrow">2 </pre>{" "}
                    <pre className="pre-assignment-curly">* i + </pre>{" "}
                    <pre className="pre-const-arrow">2</pre>{" "}
                    <pre className="pre-assignment-curly">;</pre>
                  </p>
                  <p>
                    <pre className="pre-const-arrow"> let </pre>{" "}
                    <pre className="pre-assignment-curly">max = i;</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> if </pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("(left < l ")}
                    </pre>
                    <pre className="pre-const-arrow">&& </pre>
                    <pre className="pre-assignment-curly">
                      {stringReturner("a[left] > a[max]) max = left;")}
                    </pre>
                  </p>
                  <p>
                    <pre className="js-operations"> if </pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("(right < l ")}
                    </pre>
                    <pre className="pre-const-arrow">&& </pre>
                    <pre className="pre-assignment-curly">
                      {stringReturner("a[right] > a[max]) max = right;")}
                    </pre>
                  </p>
                  <p>
                    <pre className="js-operations"> if </pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("(max !== i) {")}
                    </pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly">
                      {" "}
                      [a[max], a[i]] = [a[i], a[max]];
                    </pre>
                  </p>
                  <p>
                    <pre className="pre-variable"> heapify </pre>{" "}
                    <pre className="pre-assignment-curly">(a, max);</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly">
                      {" "}
                      {stringReturner("}")}
                    </pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly">
                      {" "}
                      {stringReturner("};")}
                    </pre>
                  </p>
                  <p>
                    <pre className="js-operations"> for </pre>{" "}
                    <pre className="pre-assignment-curly">(</pre>{" "}
                    <pre className="pre-const-arrow">let </pre>{" "}
                    <pre className="pre-assignment-curly">i = </pre>{" "}
                    <pre className="pre-const-arrow">Math</pre>{" "}
                    <per className="pre-assignment-curly">.</per>{" "}
                    <pre className="pre-variable">floor</pre>{" "}
                    <pre className="pre-assignment-curly">(l / </pre>{" "}
                    <pre className="pre-const-arrow">2</pre>
                    <pre className="pre-assignment-curly">); </pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("i > ")}
                    </pre>{" "}
                    <pre className="pre-const-arrow">0</pre>{" "}
                    <pre className="pre-assignment-curly">; i -= </pre>{" "}
                    <pre className="pre-const-arrow">1</pre>{" "}
                    <pre className="pre-assignment-curly">) </pre>{" "}
                    <pre className="pre-variable">heapify</pre>{" "}
                    <pre className="pre-assignment-curly">(a, i);</pre>
                  </p>
                  <p>
                    <pre className="js-operations"> for </pre>{" "}
                    <pre className="pre-assignment-curly">(i = </pre>{" "}
                    <pre className="js-operations">a</pre>{" "}
                    <pre className="pre-assignment-curly">.</pre>{" "}
                    <pre className="pre-const-arrow">length </pre>
                    <pre>- </pre>
                    <pre className="pre-const-arrow">1</pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("; i >")}{" "}
                    </pre>
                    <pre className="pre-const-arrow">0</pre>{" "}
                    <pre className="pre-assignment-curly">
                      {stringReturner("; i--) {")}
                    </pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly"> [a[</pre>{" "}
                    <pre className="pre-const-arrow">0</pre>{" "}
                    <pre className="pre-assignment-curly">
                      ], a[i]] = [a[i], a[
                    </pre>{" "}
                    <pre className="pre-const-arrow">0</pre>{" "}
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
                    <pre className="pre-assignment-curly">
                      {" "}
                      {stringReturner("}")}
                    </pre>
                  </p>
                  <p>
                    <pre className="js-operations"> return </pre>
                    <pre className="pre-assignment-curly">a;</pre>
                  </p>
                  <p>
                    <pre className="pre-assignment-curly">
                      {stringReturner("};")}
                    </pre>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default CodeSamples;
