import React from 'react';
import AddressBox from './AddressBox';
import ukIcon from '../../../assets/icons/uk.svg';
import canadaIcon from '../../../assets/icons/canada.svg';
import australiaIcon from '../../../assets/icons/australia.svg';
import './_headquarters.scss';

const addresses = [
  {
    icon: ukIcon,
    country: 'united kingdom',
    street: '68 Asfordby Rd',
    city: 'Alcaston',
    code: 'SY61YA',
    phone: '+44 1241 918425',
  },
  {
    icon: canadaIcon,
    country: 'canada',
    street: '1582 Eglinton Avenue',
    city: 'Toronto',
    code: 'Ontario M4P 1A6',
    phone: '+1 416 485 2997',
  },
  {
    icon: australiaIcon,
    country: 'australia',
    street: '36 Swanston Street',
    city: 'Kewell',
    code: 'Victoria',
    phone: '+1 416 485 2997',
  },
];

const Headquarters = () => {
  return (
    <section className="headquarters-section">
      <h1 className="headquarters-title">Our headquarters</h1>
      {addresses.map((address) => {
        return <AddressBox address={address} key={address.city} />;
      })}
    </section>
  );
};

export default Headquarters;
