import { Fragment, useState } from 'react';

const Greetings = () => {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    };

    return (
        <Fragment>
            <h1>Hello World!</h1>
            {changedText ? <p>Test</p> : <p>Test 2</p>}
            <button onClick={changedTextHandler}>Change</button>
        </Fragment>
    );
}

export default Greetings;