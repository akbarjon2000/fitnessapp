import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
export const SidebarStyle = styled.div`
  .custom-sidebar {
    background-color: ${COLORS.lightGrey};
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    width: 250px;
    z-index: 1040;
  }
   #components-layout-demo-responsive .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}
`