import { Fragment, useState } from 'react';

import Output from './Output';
import Async from './Async';

const Greetings = () => {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    };

    return (
        <Fragment>
            <h1>Hello World!</h1>
            {changedText ? <Output>Changed!</Output> : <Output>Good to see you!</Output>}
            <button onClick={changedTextHandler}>Change</button>
            <Async/>
        </Fragment>
    );
}

export default Greetings;