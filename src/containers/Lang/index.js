import React from 'react';
import { Link } from 'react-router-dom';
import GradCover from '../../img/gradient';
import KRRF from '../../img/kr round flag.png';
import JPRF from '../../img/jp round flag.png';
import UURCF from '../../img/usukflag.png';

export default function Lang() {
  return (
    <div className="lang">
      <GradCover text="Select Your Country/Language.•나라 및 언어를 선택하십시오." />
      <Link to="/">
        <button className="button">
          <img src={UURCF} />
          <span>English-UK,US</span>
        </button>
      </Link>
      <Link to="/kr">
        <button className="button">
          <img src={KRRF} />
          한국•Korea
      </button>
      </Link>
      <button className="button" disabled>
        <img src={JPRF} />
        日本•Japan
      </button>
      <p style={{ color: '#FF0027', fontSize: 15, marginLeft: 615 }}>
        ※日本語の翻訳が正確ではないことができます。
      </p>
      <h4>
        {`현재 계신 국가에 맞는 콘텐츠를 확인하거나 DMJW'sFun을 이용하려면 해당
        국가 또는 지역을 선택하세요.`}
      </h4>
      <h4>
        {`Select your country or region to view content for your country or to use
        DMJW'sFun.`}
      </h4>
    </div>
  );
}
