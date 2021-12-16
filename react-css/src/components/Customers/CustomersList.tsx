import { FC } from 'react';

import Customer from './Customer';

import classes from './CustomersList.module.css';

import customer1 from '../../assets/images/customer-1.jpg';
import customer2 from '../../assets/images/customer-2.jpg';

const CUSTOMERS = [{
    id: 1,
    name: 'Mike Statham',
    subtitle: 'Founder of',
    url: ' tech-analysis.com',
    description: 'uHost helped me realize my project with a highly constrained budget in like no time.',
    image: customer1
}, {
    id: 2,
    name: 'John Mellow',
    subtitle: 'Hosts his private videos on uHost.',
    url: null,
    description: 'I worked as a blogger and always looked for an integrated hosting and file storage solution. I found it in uHost!',
    image: customer2
}];

const CustomersList: FC = () => {
    return (
        <div className={classes.customers}>
            {CUSTOMERS.map(customer => <Customer
                key={customer.id}
                name={customer.name}
                subtitle={customer.subtitle}
                url={customer.url}
                description={customer.description}
                image={customer.image} />)}
        </div>
    );
};

export default CustomersList;