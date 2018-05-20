import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTranslatedValue } from '../../../selectors/localization.js';
import { HeaderSection } from '../../../components/header-section';
import VIEWS from '../views.json';
import inView from 'in-view';

import './portfolio-detail.scss';

class PortfolioDetail extends React.Component {

    constructor(){
        super();

        this.state = {
            iframeOnScreen: false
        }
    }

    closeWork = () => {
        localStorage.setItem("app_address", '');
        this.props.onWorkClose();
    }

    scaleIframe = () => {
        this.iframe.style.transform = `scale(${ this.iframeWrapper.offsetWidth * this.iframe.dataset.scale / this.iframe.dataset.width })`;
        this.iframe.classList.remove('work-in-frame_waiting');
    }

    getIframeRef = (node) => {
        this.iframe = node
    }

    getIframeWrapperRef = (node) => {
        this.iframeWrapper = node
    }

    checkIframeOnScreen = () => {
        let top = 0, bottom = 0;
        
        if(this.iframe){
            top = this.iframe.getBoundingClientRect().top;
            bottom = this.iframe.getBoundingClientRect().bottom;
        }

        return (top < document.documentElement.clientHeight && bottom > 0);
    }

    loadIframe = (link) => {
        var promise = new Promise((resolve, reject) => {
            this.iframe.onload = () => { resolve(); };
            this.iframe.src = link;
        })
        return promise;
    }

    updateIframeState = () => {
        if(this.checkIframeOnScreen() !== this.state.iframeOnScreen){
            this.setState({
                iframeOnScreen: this.checkIframeOnScreen()
            });
            this.props.onIframeOnScreen(this.checkIframeOnScreen());
        }
    }

    componentDidMount(){
        this.props.onWorkOpen();

        this.loadIframe(this.props.item.link)
            .then(() => {
                    this.scaleIframe();
                    this.props.onIframeLoad(this.checkIframeOnScreen());
                });

        window.addEventListener('scroll', this.updateIframeState);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.updateIframeState);
    }

    componentDidUpdate(){
        this.loadIframe(this.props.item.link)
            .then(() => {
                    this.scaleIframe();
                    this.props.onIframeLoad(this.checkIframeOnScreen());
                });
            
        inView('.appear')
            .on('enter', (e) => {
                e.classList.add('animated');
                e.classList.remove('appear');
            });
    }

    render(){

        let { title, link, desc, short } = this.props.item,
            { scale, width, height } = VIEWS[this.props.viewMode];

        return(

            <section className='portfolio-work__opened'>

                <HeaderSection>
                    <Link to="/" onClick={ this.closeWork }><i className="glyphicon glyphicon-menu-left"/></Link>
                    <span>{ getTranslatedValue(title, this.props.language) }</span>
                    <a href={ link } target='_blank'><i className="glyphicon glyphicon-new-window" /></a>
                </HeaderSection>
                
                <div className='portfolio-opened__description appear'>
                    <img className="portfolio-opened__print-version" src={ require(`../../../images/works/${this.props.name}.jpg`) } alt={ short } />
                    <p className='portfolio-opened__short-description'>{ getTranslatedValue(short, this.props.language) }</p>
                    <p className='portfolio-opened__full-description'>{ getTranslatedValue(desc, this.props.language) }</p>
                    <p className="portfolio-opened__print-version">{ link }</p>
                </div>

                <div className={ `work-in-frame__device-wrapper work-in-frame__device-wrapper_${ this.props.viewMode }` }
                     ref={ this.getIframeWrapperRef }>

                    <img className={ `work-in-frame__device-cover` }
                         src={ require(`../../../images/devices/${ this.props.viewMode }.png`) } 
                         alt={ `${ this.props.viewMode } device frame` }/>

                    <iframe className={ `work-in-frame work-in-frame_${ this.props.viewMode } work-in-frame_waiting`}
                            data-scale={ scale }
                            data-width={ width }
                            data-height={ height }
                            title={ short }
                            ref={ this.getIframeRef }
                            style={{ 
                                width: `${ width }px`,
                                height: `${ height }px`
                            }} />

                    <div className='work-in-frame__loading-icon'></div>

                    <Link to="/" onClick={ this.closeWork } className="work-in-frame__close-cross" data-tip="вернуться к списку работ"></Link>
                    <Link to="/" onClick={ this.closeWork } className="work-in-frame__close-mobile-button"  data-tip="вернуться к списку работ"></Link>

                </div>

            </section>
		)
    }
}

const mapStateToProps = (state) => ({
    viewMode: state.portfolio.viewMode,
    language: state.app.language
});

const mapDispatchToProps = (dispatch) => ({
    onWorkOpen: () => dispatch({ type: 'WORK_OPEN', open: true }),
    onWorkClose: () => dispatch({ type: 'WORK_CLOSE' }),
    onIframeLoad: (appear) => dispatch({ type: 'IFRAME_LOADED', loaded: true, appear: appear }),
    onIframeOnScreen: (appear) => dispatch({ type: 'IFRAME_ON_SCREEN', appear: appear })
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDetail);

