import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { pxToRem } from '../../constants/pxToRem';

export const Container = styled.div`
    height:100vh;
background-color:${COLORS.lightGrey} !important;
 
  .logo{
  background-color:${COLORS.lightGrey};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Manrope';
  font-weight: 800;
  font-size:${pxToRem(24)};
  margin-top:${pxToRem(25)};
  margin-left:${pxToRem(16)};
  gap:${pxToRem(14)};
  margin-bottom:${pxToRem(37)};


}
  .menu{
  background-color:${COLORS.lightGrey};
  padding-left:${pxToRem(12)};
}
  .menu__item{
  cursor: pointer;
  padding-left:${pxToRem(14)};
  margin: 10px 0px;
  width: ${pxToRem(226)};
  height:${pxToRem(48)};
  border-radius: 4px;
&:hover{
    background: rgba(85, 66, 246, 0.1);
  }
}
  .text{
  margin: 0;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #2E2C34;
}

`