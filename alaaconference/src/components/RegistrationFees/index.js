import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import './RegistrationFees.css';
import {EOIButton, RegisterButton} from '@site/src/components/EOIButton';

export const PaymentGatewayURL = 'https://pay.flinders.edu.au/BGL024';
// export const PaymentGatewayURL = '/registration_closed';

const FeeInfoList = [
  {
    title: 'Early Career Academics Day (3 July 2024)',
    description: (
      <>
        <p>
          If you are not an early career academic you 
          may still register for the ECA day but you must also register for 
          the Conference.
        </p>
      </>
    ),
  },
  {
    title: 'ALAA Conference (4 & 5 July 2024)',
    description: (
      <>
      <table className='registrationFeeTable'>
          <tr>
              <th><del>Early Bird registration</del></th>
              <td><del>$250.00</del></td>
          </tr>
          <tr>
              <th>Regular Registration</th>
              <td>$300.00</td>
          </tr>
      </table>
      <p>
      <strong>REGISTRATIONS CLOSE on 20 June 2024</strong>
      </p>
      </>
    ),
  },
  {
    title: 'Gala Dinner',
    description: (
      <>
      <table className='registrationFeeTable'>
          <tr>
              <th>Gala Dinner</th>
              <td>$140.00</td>
          </tr>
      </table>
      <p>
        The Gala dinner will be held on the evening of <strong>4&nbsp;July 2024</strong> at the
        Stamford Plaza Hotel.
      </p>
      <p>
        If you have not yet registered for the 
        Gala Dinner please register below.
      </p>
      <p>
        You are welcome to bring a partner to the Gala Dinner but you will need to register your partner separately.
      </p>
      </>
    ),
  },
];

const ButtonInfoList = [
  {
    instructions: (
      <RegisterButton registerURL='https://docassemble2.flinders.edu.au/interview?i=docassemble.2024ALAAConference:data/questions/eca.yml' buttonText='ECA Day Registration' />
    ),
  },
  {
    instructions: (
      <RegisterButton registerURL={PaymentGatewayURL} buttonText='Conference and Gala Dinner Registration' />
    )
  }
];

// Used to set up the display of the registration fee information
function FeeInfo({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
      <div className='text--justified padding-horiz--md'>
        {description}
      </div>
    </div>
  );
}

// Used to set up the display of the buttons
function ButtonInfo({instructions}) {
  return (
    <div className={clsx('col col--6')}>
      <div className='text--center padding-horiz--md'>
        {instructions}
      </div>
    </div>
  );
}

export function RegistrationFees() {
  return (
    <section className={styles.RFfeatures}>
      <div className="container">
        <div className="RFHeading">
          <h1>Registration</h1>
        </div>
        <div className="row">
          {FeeInfoList.map((props, idx) => (
            <FeeInfo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Returns the registration buttons
export function RegistrationInstructions() {
  return (
    <section className={styles.RFfeatures}>
      <div className="container">
        <div className="row">
          {ButtonInfoList.map((props, idx) => (
            <ButtonInfo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
