import React from 'react';
import { connect } from 'react-redux';
import { PortfolioFilter } from './filters/portfolio-filter';
import PortfolioItem from './list/portfolio-item';
import { HeaderSection } from '../../components/header-section';
import { getTranslatedValue } from '../../selectors/localization.js';
import { sortPortfolioItemsByFilters } from '../../selectors/selectors.js';

import './portfolio.scss';

const Portfolio = (props) => {

    const changeFilter = (name, check) => {
        props.onChangeFilter(name, check);
    }

    const openWork = () => {
        props.onWorkOpen();
    }

    const Filters = () => { 
        return(
            <ul className="portfolio-filters">
                {
                    props.filters.map(item => 
                        <PortfolioFilter key={ item } 
                                         name={ item }
                                         check={ props.filtersActive[item] }
                                         onChangeFilter={ changeFilter } />)
                }
            </ul>
        );
    };

    const Items = () => {
        return(
            <ol className="portfolio-list">
                { 
                    sortPortfolioItemsByFilters(props.list, props.filtersActive).map((item, index) => 
                        <PortfolioItem key={ index } 
                                       item={ item }
                                       language={ props.language }
                                       onSelect={ openWork } />)
                }
            </ol>
        );
    }

    return (
        <section className="portfolio-section">

            <HeaderSection title={ getTranslatedValue(props.header, props.language) } />

            <Filters />

            <Items />

        </section>
    )
};

const mapStateToProps = state => ({
    filtersActive: state.portfolio.filters,
    language: state.app.language
});

const mapDispatchToProps = (dispatch) => ({
    onWorkOpen: () => dispatch({ type: 'WORK_OPEN', open: true }),
    onChangeFilter: (name, check) => dispatch({ type: 'FILTER_CHANGE', filter: name, check: check })
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);