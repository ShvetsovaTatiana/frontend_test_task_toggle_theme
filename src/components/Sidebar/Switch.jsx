import React from 'react';
import styled from 'styled-components';
import '../../index.scss';


const SwitchBox = styled.div`
  height: 63px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ isOpened }) => isOpened ? '20px' : '0px'};
  justify-content: ${({ isOpened }) => isOpened ? 'flex-start' : 'center'};

  animation-name: fadeInDown;
  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: translateY(-10px);

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
`;

const SwitchLable = styled.label`
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 34px;

  input {
  opacity: 0;
  width: 0;
  height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  ${SwitchLable} input:checked + & {
    background-color: var(--color-button-background-dark-active);

    &:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }  
`;

const SwitchText = styled.p`
  color: var(--color-text-light-default);
  font-size: 18px;
  visibility: ${({ isOpened }) => isOpened ? 'visible' : 'hidden'};
  height: ${({ isOpened }) => isOpened ? 'auto' : '0'};
  width: ${({ isOpened }) => isOpened ? 'auto' : '0'};
`;

const Switch = ({ isOpened, onThemeChange }) => {
  const [checked, setChecked] = React.useState(false);

  const switchText = checked ? '--color-text-light-default' : '--color-text-light-active';

  const handleChange = () => {
    setChecked(!checked);
    onThemeChange();
  };

  return (
    <SwitchBox isOpened={isOpened}>
      <SwitchLable>
        <input
          type="checkbox"
          id="theme-toggle"
          checked={checked}
          onChange={handleChange}
        />
        <Slider />
      </SwitchLable>
      <SwitchText
        isOpened={isOpened}
        style={{ color: `var(${switchText}, #0000b5)` }}>Theme</SwitchText>
    </SwitchBox>
  )
};

export default Switch;