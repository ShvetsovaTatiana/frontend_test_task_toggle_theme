import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import Switch from './Switch';
import styled from 'styled-components';
import '../../index.scss';

const StyledSidebar = styled.aside`
  width: ${({ isOpened }) => isOpened ? '300px' : '120px'};
  padding: 30px;
  margin: 80px;
  background-color: ${props => props.theme.sidebarBackgroundDefault};
  color: ${props => props.theme.textDefault};
  border-radius: 25px;
  outline: 1px solid ${props => props.theme.buttonBackgroundActive};
  outline-offset: -5px;
  box-sizing: border-box;
  font-weight: bold;
  display: flex;
  flex-direction: column;

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  img {
    width: 39px;
    height: 39px;
  }

  .logoFormat {
    cursor: pointer;
    position: relative;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ isOpened }) => isOpened ? '5px' : '0px'};
    justify-content: ${({ isOpened }) => isOpened ? 'flex-start' : 'center'};
    color: ${props => props.theme.textLogoDefault};

    animation-name: fadeInDown;
    animation-duration: 0.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateX(-10px);
  }

  .logoText {
    font-size: 26px;
    visibility: ${({ isOpened }) => isOpened ? 'visible' : 'hidden'};
    height: ${({ isOpened }) => isOpened ? 'auto' : '0'};
    width: ${({ isOpened }) => isOpened ? 'auto' : '0'};
  }

  .arrow {
    position: absolute;
    right: ${({ isOpened }) => isOpened ? '-60px' : '-100px'};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    padding: 7px;
    color: ${props => props.theme.textHover};
    background-color: ${({ isOpened, theme }) => isOpened
        ? theme.buttonBackgroundActive
        : theme.buttonBackgroundDefault};
    transform: translateX(-50%);
    z-index: 1;
    transition: all 0.3s ease-in-out;

    &::before {
        content: "SHRINK";
        font-size: 16px;
        position: absolute;
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.2s ease-in-out;
        width: 100px;
        color: ${props => props.theme.textDefault};
        padding: 10px;
        left: 30px;
    }

    &:hover::before {
        opacity: ${({ isOpened }) => isOpened ? '1' : '0'};
        transform: translateY(0);
    }
  }

  .rotate-icon {
    transform: rotate(180deg);
  }

  .route_items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .route_item {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ isOpened }) => isOpened ? '15px' : '0px'};
    justify-content: ${({ isOpened }) => isOpened ? 'flex-start' : 'center'};
    border: 1px solid transparent;
    border-radius: 15px;
    padding: 10px;

    animation-name: fadeInDown;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(-10px);

    & svg {
        width: 33px;
        height: 33px;
    }

    &:hover {
        border-color: ${props => props.theme.buttonBackgroundActive};
        color: ${props => props.theme.textActive};
        background-color: ${props => props.theme.buttonBackgroundActive};
        transition: all 0.3s ease-in-out;
    }

    &::before {
        content: attr(data-tooltip);
        display: none;
        position: absolute;
        color: ${props => props.theme.textDefault};
        background-color: ${props => props.theme.textLogoDefault};
        padding: 10px 20px;
        border-radius: 15px;
        transform: translateY(-20px);
        opacity: ${({ isOpened }) => isOpened ? '0' : '1'};
        transition: all 0.3s ease-in-out;
        white-space: nowrap;
        z-index: 1;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        font-size: 22px;
    }

    ${({ isOpened }) => !isOpened && `
      &:hover::before {
        display: block;
        opacity: 1;
        top: 20px;
        left: 90%;
        transform: translateX(10px) translateY(-50%);
      }
    `}
  }

  .border_item {
    border: 1px solid ${props => props.theme.buttonBackgroundActive};
    border-radius: 15px;
    padding: 10px;
    color: ${props => props.theme.textActive};
    background-color: ${props => props.theme.buttonBackgroundActive};
  }
    
  .textMenu {
    font-size: 22px;
    visibility: ${({ isOpened }) => isOpened ? 'visible' : 'hidden'};
    height: ${({ isOpened }) => isOpened ? 'auto' : '0'};
    width: ${({ isOpened }) => isOpened ? 'auto' : '0'};
  }

  .bottom_items {
    margin-top: 250px;
    margin-bottom: 80px;
  }

  .bottom_item {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ isOpened }) => isOpened ? '15px' : '0px'};
    justify-content: ${({ isOpened }) => isOpened ? 'flex-start' : 'center'};
    border: 1px solid transparent;
    border-radius: 15px;
    padding: 10px;

    animation-name: fadeInUp;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(10px);

     & svg {
        width: 33px;
        height: 33px;
    }

    &:hover {
        border-color: ${props => props.theme.buttonBackgroundActive};
        color: ${props => props.theme.textActive};
        background-color: ${props => props.theme.buttonBackgroundActive};
        transition: all 0.3s ease-in-out;
    }
     &::before {
        content: attr(data-tooltip);
        display: none;
        position: absolute;
        color: ${props => props.theme.textDefault};
        background-color: ${props => props.theme.textLogoDefault};
        padding: 10px;
        border-radius: 15px;
        transform: translateY(-20px);
        opacity: ${({ isOpened }) => isOpened ? '0' : '1'};
        transition: all 0.3s ease-in-out;
        white-space: nowrap;
        z-index: 1;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        font-size: 22px;
    }

    ${({ isOpened }) => !isOpened && `
      &:hover::before {
        display: block;
        opacity: 1;
        top: 20px;
        left: 90%;
        transform: translateX(10px) translateY(-50%);
      }
    `}
  }
`;

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales', specialClass: 'border_item' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = ({ color, theme, isOpened, onThemeChange, onToggleSidebar }) => {
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        onToggleSidebar(!isOpened);
    };

    return (
        <StyledSidebar
            isOpened={isOpened}
            theme={theme}
            className={containerClassnames}>
            <Switch
                isOpened={isOpened}
                theme={theme}
                onThemeChange={onThemeChange}
            />
            <div className="logoFormat">
                <img src={logo} alt="TensorFlow logo" />
                <span className="logoText">TensorFlow</span>
                <div className="arrow" onClick={toggleSidebar}>
                    <FontAwesomeIcon
                        icon={['fas', 'fa-angle-right']}
                        className={isOpened ? 'rotate-icon' : ''}
                    />
                </div>
            </div>
            <div className="route_items">
                {
                    routes.map((route, index) => (
                        <div
                            style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                            className={`route_item ${route.specialClass || ''}`}
                            data-tooltip={route.title}
                            key={route.title}
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={route.icon} />
                            <span className="textMenu">{route.title}</span>
                        </div>
                    ))
                }
            </div>
            <div className="bottom_items">
                {
                    bottomRoutes.map((route, index) => (
                        <div
                            style={{ animationDelay: `${2.5 + (bottomRoutes.length - 1 - index) * 0.1}s` }}
                            className="bottom_item"
                            data-tooltip={route.title}
                            key={route.title}
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={route.icon} />
                            <span className="textMenu">{route.title}</span>
                        </div>
                    ))
                }
            </div>
        </StyledSidebar>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string.isRequired,
    theme: PropTypes.shape({
        sidebarBackgroundDefault: PropTypes.string.isRequired,
        sidebarBackgroundHover: PropTypes.string.isRequired,
        sidebarBackgroundActive: PropTypes.string.isRequired,
        textDefault: PropTypes.string.isRequired,
        textHover: PropTypes.string.isRequired,
        textActive: PropTypes.string.isRequired,
        textLogoDefault: PropTypes.string.isRequired,
        buttonBackgroundDefault: PropTypes.string.isRequired,
        buttonBackgroundActive: PropTypes.string.isRequired
    }).isRequired,
    isOpened: PropTypes.bool.isRequired,
    onThemeChange: PropTypes.func.isRequired,
    onToggleSidebar: PropTypes.func.isRequired
};

export default Sidebar;