import { Fragment, useEffect } from 'react';
import { useParams, useRouteMatch, Route, Link } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

import Comments from '../components/comments/Comments';
import HighlitedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Quote = () => {
    const params = useParams(); // Route params
    const routeMatch = useRouteMatch();

    const id = params.id;
    const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(id);
    }, [sendRequest, id]);

    if(status === 'pending')
        return <div className='centered'>
            <LoadingSpinner />
        </div>;

    if(error)
        return <p className='centered focused'>{error}</p>;

    if(status === 'completed' && !data.text)
        return <p className='centered'>No quote found!</p>;

    return <Fragment>
        <HighlitedQuote
            author={data.author}
            text={data.text} />
        <Route path={routeMatch.path} exact>
            <div className='centered'>
                <Link className='btn--flat' to={`${routeMatch.url}/comments`}>Comments</Link>
            </div>
        </Route>
        <Route path={`${routeMatch.path}/comments`}>
            <Comments quoteId={id} />
        </Route>
    </Fragment>
}

export default Quote;