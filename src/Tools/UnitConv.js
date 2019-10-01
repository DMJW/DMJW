import React, { useState } from 'react';
import { css } from 'emotion';
import UCT from './img/UtconvT.png';

export default function unitConv() {
  const [convType, setConvType] = useState('none');
  const [typeShow, setTypeShow] = useState('hide');

  return (
    <div>
      <div>
        <h1><img src={UCT} width="35%"></img></h1>
      </div>
      <div
        className={`SMB ${css`
          @media (max-width: 950px) {
            display: none;
          }
        `}`}
        style={{
          width: '15%',
          color: '#ffffff'
        }}
      >
        <a href="/">Back To MAIN</a>
        <div
          style={{ backgroundColor: '#ffffff', height: 30, width: '100%' }}
        />
        <a href="/languages">
          <p style={{ fontSize: 17 }}>
            Select your country or region to change the language.
            <br />
            언어를 변경하려면 해당 국가 또는 지역을 선택하세요.
          </p>
        </a>
        <a href="/Fun/main">{`DMJW's Fun`}</a>
        <br />
        <a href="/tools/m">Tools</a>
        <br />
        <a href="http://www.DMJWWEB.com/about">
          {`About DMJW's ↗︎(Moving to another web)`}
        </a>
        <div
          style={{ backgroundColor: '#ffffff', height: 30, width: '100%' }}
        />
        <h3>{`Tools inside tools`}</h3>
        <p>Nothing Yet!</p>
        <a href="/dmjws/tools" target="_blank">Coming Soon! {` 'Double convert' `}</a>
      </div>
      <div>
        <h3 onClick={() => setConvType('show')}>Select.</h3>
        <select onClick={() => setTypeShow('show')}>
          <option>Conversion of</option>
          {/* <option onClick={() => setConvType('Area')}>Area</option>
          <option onClick={() => setConvType('Weight')}>Weight</option>
          <option onClick={() => setConvType('Temp')}>Temperature</option>
          <option onClick={() => setConvType('Length')}>Length</option>
          <option onClick={() => setConvType('Data')}>Data</option> */}
        </select>
        {typeShow === 'show' && (
          <div>
            <button onClick={() => setConvType('Area')}>Area</button>
            <button onClick={() => setConvType('Weight')}>Weight</button>
            <button onClick={() => setConvType('Temp')}>Temperature</button>
            <button onClick={() => setConvType('Length')}>Length</button>
            <button onClick={() => setConvType('Data')}>Data</button>
            <button onClick={() => setTypeShow('hide')}>←close</button>
          </div>
        )}
        {convType === 'none' && (
          <div>
            <select>
              <option>From this</option>
              <option>Select by clicking {`'Conversion of'`}</option>
            </select>
            <button style={{ fontSize: 30, backgroundColor: 'blue' }}>{`↔︎`}</button>
            <select>
              <option>To this</option>
            </select>
          </div>
        )}
        {convType === 'Data' && (
          <div>
            <select>
              <option>From this</option>
              <option>bit</option>
              <option>B</option>
              <option>KB</option>
              <option>MB</option>
              <option>GB</option>
              <option>TB</option>
              <option>PB</option>
              <option>EB</option>
            </select>
            <button style={{ fontSize: 30, backgroundColor: 'blue' }}>{`↔︎`}</button>
            <select>
              <option>To this</option>
              <option>bit</option>
              <option>B</option>
              <option>KB</option>
              <option>MB</option>
              <option>GB</option>
              <option>TB</option>
              <option>PB</option>
              <option>EB</option>
            </select>
          </div>
        )}
        {convType === 'Length' && (
          <div>
            <select>
              <option>From this</option>
              <option>mm</option>
              <option>cm</option>
              <option>m</option>
              <option>km</option>
              <option>in</option>
              <option>ft</option>
              <option>yd</option>
              <option>mile</option>
            </select>
            <button style={{ fontSize: 30, backgroundColor: 'blue' }}>{`↔︎`}</button>
            <select>
              <option>To this</option>
              <option>mm</option>
              <option>cm</option>
              <option>m</option>
              <option>km</option>
              <option>in</option>
              <option>ft</option>
              <option>yd</option>
              <option>mile</option>
            </select>
          </div>
        )}
        {convType === 'Temp' && (
          <div>
            <select>
              <option>From this</option>
              <option>℃</option>
              <option>℉</option>
            </select>
            <button style={{ fontSize: 30, backgroundColor: 'blue' }}>{`↔︎`}</button>
            <select>
              <option>To this</option>
              <option>℃</option>
              <option>℉</option>
            </select>
          </div>
        )}
        {convType === 'Weight' && (
          <div>
            <select>
              <option>From this</option>
              <option>mg</option>
              <option>g</option>
              <option>kg</option>
              <option>t</option>
              <option>kt</option>
              <option>gr</option>
              <option>oz</option>
              <option>lb</option>
            </select>
            <button style={{ fontSize: 30, backgroundColor: 'blue' }}>{`↔︎`}</button>
            <select>
              <option>To this</option>
              <option>mg</option>
              <option>g</option>
              <option>kg</option>
              <option>t</option>
              <option>kt</option>
              <option>gr</option>
              <option>oz</option>
              <option>lb</option>
            </select>
          </div>
        )}
        {convType === 'Area' && (
          <div>
            <select>
              <option>From this</option>
              <option>cm²</option>
              <option>m²</option>
              <option>a</option>
              <option>ha</option>
              <option>km²</option>
              <option>ft²</option>
              <option>yd²</option>
              <option>ac</option>
              <option>평(pyeong)</option>
            </select>
            <button style={{ fontSize: 30, backgroundColor: 'blue' }}>{`↔︎`}</button>
            <select>
              <option>To this</option>
              <option>cm²</option>
              <option>m²</option>
              <option>a</option>
              <option>ha</option>
              <option>km²</option>
              <option>ft²</option>
              <option>yd²</option>
              <option>ac</option>
              <option>평(pyeong)</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
