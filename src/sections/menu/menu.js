import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { getTranslatedValue } from '../../selectors/localization.js';
import { menuItemsConfigure } from './menu-items-configure';

import './menu.scss';

class Menu extends React.Component {

	constructor() {
        super();
        
        this.state = {
            fixed: this.checkMenuFixed(),
            mobile: this.checkMenuMobile(),
            mobileMenuOpened: false,
            modalOpened: false,
            image: 'diplom.png'
        };
    }

    checkMenuFixed(){
        return window.pageYOffset > 300;
    }

    checkMenuMobile(){
        return window.innerWidth < 500;
    }

    onCloseModal = () => {
        this.setState({ modalOpened: false });
    };

    toggleMobileMenu = (e) => {
        e.preventDefault();
        this.setState((prevState, prevProps) => {
            return { mobileMenuOpened: !prevState.mobileMenuOpened }
        })
    }

    link(element, { href, download }){
        element.setAttribute('href', href);
        if(download)
            element.setAttribute('download', '');
        element.click();
    }

    componentWillMount(){
        this.list = menuItemsConfigure((message) => { this.link(this.serviceLink, message); },
                                       (message) => { this.props.onChangeLanguage(message); },
                                       (message) => { this.props.onChangePortfolioView(message); },
                                       (message) => { this.setState((prevState, prevProps) => message) }
        );
    }

    componentDidMount(){
        window.addEventListener('resize', () => {
            if(this.checkMenuMobile() !== this.state.mobile)
                this.setState((prevState, prevProps) => {
                    return { mobile: this.checkMenuMobile() };
                });
        });

        window.addEventListener('scroll', () => {
            if(this.checkMenuFixed() !== this.state.fixed){
                this.setState((prevState, prevProps) => {
                    return { fixed: this.checkMenuFixed() };
                });
            }
        });
    }

    render(){

        let classes = {
            mobile: this.state.mobile ? 'main-menu_mobile ' : '',
            fixed: this.state.fixed ? 'main-menu_fixed ' : '',
            mobileMenuOpened: this.state.mobileMenuOpened ? 'main-menu_mobile_opened' : '',
            viewModeItemClosed: (index) => { return (index > 11 && (!this.props.workOpen || !this.props.iframeLoaded || !this.props.iframeOnScreen) ? 'main-menu__item-holder_closed ' : '' )},
            active: (active, index) => { return( active((this.props.workOpen && index > 11) ? this.props.viewMode : this.props.language) ? 'active' : '' )}
        };

        return(
            <nav>
                <ul className={`main-menu ${classes.mobile} ${classes.mobileMenuOpened} ${classes.fixed}`}>

                    <li className="main-menu__item-holder_mobile-button">
                        <a className="main-menu__item-link_mobile-button" 
                           href=''
                           onClick={this.toggleMobileMenu}>
                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                        </a>
                    </li>

                    {
                        this.list.map(({ id, title, action, active }, index) => {

                            return(
                                <li className={`main-menu__item-holder ${classes.viewModeItemClosed(index)}`} key={ id }>
                                    <a className={ `main-menu__item-link ${ classes.active(active, index) }` }
                                       style={{ backgroundPosition: `${index * 5.9}% 0` }}
                                       href='' 
                                       onClick={ action }
                                       data-tip={ getTranslatedValue(title, this.props.language) }
                                    >
                                        { getTranslatedValue(title, this.props.language) }
                                    </a>
                                </li>
                            );
                        })
                    }

                </ul>

                <a className='service-link'
                   ref={ref => { this.serviceLink = ref; }}
                   target='_blank'
                   hidden>service invisible link</a>

                <Modal open={ this.state.modalOpened }
                       onClose={ this.onCloseModal } 
                       children={ <img src={ require(`../../images/${this.state.image}`) } alt={ this.state.image }/> }
                       little={ this.state.image === 'diplom.png' }
                       classNames={{ 'overlay': `modal-overlay modal-overlay_${this.state.image.replace('.png', '')}`,
                                     'modal': `modal-modal` }} />

            </nav>
        )
    }
};

const mapStateToProps = state => ({ 
    language: state.app.language,
    workOpen: state.portfolio.workOpen,
    viewMode: state.portfolio.viewMode,
    iframeLoaded: state.portfolio.iframeLoaded,
    iframeOnScreen: state.portfolio.iframeOnScreen
});

const mapDispathToProps = dispatch => ({ 
    onChangeLanguage: language => dispatch({ type: 'LANGUAGE_CHANGE', language: language }),
    onChangePortfolioView: view => dispatch({ type: 'MODE_CHANGE', view: view })
});

export default connect(mapStateToProps, mapDispathToProps)(Menu);