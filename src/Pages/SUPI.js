import React from 'react';

export default function SUPIA() {
  return (
    <div>
      <div>
        <h1>개인정보 수집 및 이용 안내</h1>
      </div>
      <div>
        <p>
          {`DMJW's(이하 ‘회사’라 합니다)는 최초 회원 가입 또는 서비스 이용 시
          이용자로부터 아래와 같은 개인정보를 수집하고 있습니다. 이용자는 본
          개인정보 수집•이용 동의서에 따른 동의 시, '필요한 최소한의 정보 외의
          개인정보' 수집•이용에 동의하지 않을 권리가 있습니다.`}
        </p>
        <h3>1. 수집하는 개인정보 항목</h3>
        <p>{`① 회원가입을 위해 필요한 개인정보`}</p>
        <ul>
          <li>
            ID(유저네임), 비밀번호, 성명, 성별, 생년월일(선택),
            국가정보(선택), 사진(선택)
          </li>
          <li>
            휴대폰 번호 또는 이메일, 만 14세 아동의 경우 보호자 정보(보호자의 성명,
            생년월일)
          </li>
        </ul>
        <p>{`② 각 서비스 이용을 위해 필요한 정보, 서비스 이용기록, 구매 관련 정보
        `}</p>
        <ul>
          <li>각 서비스 이용 기록 구매 관련 정보</li>
          <li>이용자가 업로드한 정보</li>
          <li>{`위치정보: 서비스를 제공하기 위하여 필수적인 경우(예를 들어, "Country Talk" 서비스 등)에만 별도 동의를 받아 수집됩니다.`}</li>
        </ul>
        <h3>2. 개인정보의 수집 및 이용목적</h3>
        <p>
          ① 회원관리 <br />- 본인 확인, 연령확인, 만 14세 미만 아동 개인정보
          수집 시 법정 대리인 동의여부 확인, 혜택 제공 및 안내
        </p>
        <p>
          ② {`DMJW's어카운트를 통한 통일된 서비스 제공`}
          <br />- {`DMJW's어카운트로`} 연결된 다양한 기기에서 동일한 사용환경 및
          기능 제공
          <br />- {`DMJW's어카운트`} 기반 다양한 서비스 이용
        </p>
        <p>
          ③ 기존서비스 개선, 신규서비스 개발
          <br />- 고객만족 조사, 상품•서비스 개발연구, 신규 서비스 개발
        </p>
        <p>
          ※ 귀하께서는 개인정보 수집‧이용에 대한 동의를 거부하실 수 있으나,
          이상의 정보는 서비스 제공에 필수적으로 필요한 정보이므로, 동의를
          거부하실 경우 회원가입, 서비스 이용 등을 하실 수 없습니다.
          <br /> ※ 회원가입 후 서비스 이용과정에서 필요에 따라 요청되는 정보는
          서비스 이용과정에서 별도로 안내하고 동의 받습니다.
        </p>
      </div>
      <h2>ENGLISH⬇️</h2>
      <div>
        <h1>Collection and use of personal information</h1>
      </div>
      <div>
        <p>
          {`DMJW's (hereinafter referred to as 'Company') collects the following personal information from users when they sign up for the first time or use the service. Users have the right to disagree with the collection and use of 'personal information other than the minimum required information' when they agree to the personal information collection and utilization agreement.`}
        </p>
        <h3>1. Informations to be collected</h3>
        <p>{`① Personal informations needed for Signing up`}</p>
        <ul>
          <li>
            ID, password, name, gender, birthday(optional), country(optional), picture(optianal)
          </li>
          <li>
            Phone number, for children aged 14 years old, carer information
            {`(protector's name, date of birth)`}
          </li>
        </ul>
        <p>{`② Information required to use each service, records of service use, and information related to purchase
        `}</p>
        <ul>
          <li>Information regarding the purchase of each service record</li>
          <li>Informations that the user uploaded</li>
          <li>{`Location information: Only when it is necessary to provide the service (e.g. "Country Talk" service), it is collected with separate consent.`}</li>
        </ul>
        <h3>2. Purpose of collecting and using personal information</h3>
        <p>
          ① Account Management <br />- Check personal identification, age identification,
          and personal information collection for children under 14 years of
          age, check consent from legal representatives, provide benefits, and
          advise
        </p>
        <p>
          ② Unified Service with {`DMJW's Account`}
          <br />- {`DMJW's`} provides the same usage experience and
          functionality across multiple devices connected by an account.
          <br />- {`DMJW's`} account-based access to a wide range of services
        </p>
        <p>
          ③ Improve existing services and develop new services
          <br />- Survey on customer satisfaction, research on product and
          service development, development of new services
        </p>
        <p>
          *🚫 You may refuse to agree to the use of personal information
          collection and utilization, but the above information is essential for
          the service provision. If you reject the consent, you cannot sign up
          for membership or use of the service.
          <br /> *❔ Information requested during the service use process after
          membership is notified separately and agreed upon in the service use
          process.
        </p>
      </div>
    </div>
  );
}
