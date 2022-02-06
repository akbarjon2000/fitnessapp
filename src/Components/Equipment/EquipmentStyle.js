import styled from 'styled-components';
import { pxToRem } from '../../constants/pxToRem';

export const Container = styled.div`
.equipHeader{
    justify-content:space-between;
    margin-bottom:${pxToRem(40)};
}
.count{
    font-family: Manrope;
font-style: normal;
font-weight: bold;
font-size: 20px;
margin:0;
margin-left:${pxToRem(8)};
}
.addNewMem{
width: 151px;
height: 42px;
background: #5542F6;
border-radius: 4px;
}
.newMem{
font-family: Manrope;
font-style: normal;
font-weight: 600;
font-size: 14px;
color: #FBFAFC;
margin:0;
margin-left:${pxToRem(8)};
line-height: ${pxToRem(20)};
}
.categoryHeader{
    justify-content:space-between;
    border-bottom: 1px solid #EBEAED;
    padding-bottom:12px;
}
.square{
    background: #84818A;
    height: 13.5px;
width: 13.5px;
}
.category{
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 18px;
letter-spacing: 0px;
text-align: left;
color:#84818A;
${'' /* flex:1; */}
margin:0;
}
.items{
    width: 972px;
height: 80px;
border-bottom:1px solid #E5E5E5;
    ${'' /* justify-content:space-between; */}

}
.image{
    width:42px;
    height:42px;
    border-radius:50%;
    margin-left:26px;

}
.name{
    margin:0;
    margin-left:16px;

}
.text{
    font-family: Manrope;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #2E2C34;

}
.price{
    width:170px;
}
.quantity{
    width:190px;
}
.install{
    width:150px;
}
.weight{
    width:170px;
}
.actionIcon{
   width:100px;

    justify-content:flex-end;
}
`