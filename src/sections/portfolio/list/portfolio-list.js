import React from 'react';
import PortfolioItem from './portfolio-item';

import './portfolio-list.scss';

const PortfolioList = ({ list }) => {

    const openWork = () => {
        props.onWorkOpen();
    }

    return (
        <ol className="portfolio-list">
            { 
                list.map((item, index) => 
                    <PortfolioItem key={ index } 
                                   item={ item }
                                   onSelect={ openWork } />)
            }
        </ol>
    )
};

export default PortfolioList;