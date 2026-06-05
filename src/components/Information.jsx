import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import profile from '../data/profile';

import '../styles/components/information.sass';

const contactInfo = [
  {
    id: 'phone',
    title: 'Telefone',
    value: profile.phone,
    icon: <AiFillPhone id="phone-icon" />,
  },
  {
    id: 'email',
    title: 'E-mail',
    value: profile.email,
    icon: <AiOutlineMail id="email-icon" />,
  },
  {
    id: 'location',
    title: 'Localização',
    value: profile.location,
    icon: <AiFillEnvironment id="pin-icon" />,
  },
];

function Information() {
  return (
    <section id="information">
      {contactInfo.map((item) => (
        <div className="info-card" key={ item.id }>
          {item.icon}
          <div>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Information;
