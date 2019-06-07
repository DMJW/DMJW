import React from "react";

export default function SUPIA() {
  return (
    <div>
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
            ID, password, name, gender, birthday,
            country, picture(optianal)
          </li>
          <li>
            Phone number, for children aged 14 years old, carer information (protector's name, date of birth)
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
          ① 회원관리 <br />- Check personal identification, age identification, and personal information collection for children under 14 years of age, check consent from legal representatives, provide benefits, and advise
        </p>
        <p>
          ② Unified Service with DMJW's Account
          <br />- DMJW's provides the same usage experience and functionality across multiple devices connected by an account.
          <br />- DMJW's account-based access to a wide range of services
        </p>
        <p>
          ③ Improve existing services and develop new services
          <br />- Survey on customer satisfaction, research on product and service development, development of new services
        </p>
        <p>
          ※ You may refuse to agree to the use of personal information collection and utilization, but the above information is essential for the service provision. If you reject the consent, you cannot sign up for membership or use of the service.
          <br /> ※ Information requested during the service use process after membership is notified separately and agreed upon in the service use process.
        </p>
      </div>
    </div>
  );
}
