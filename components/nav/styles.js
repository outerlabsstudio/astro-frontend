import styled from 'styled-components'
import { Logo, Z, media } from 'styles'

export const PageHeader = styled.header`
  position: fixed;
  z-index: ${Z.PAGE_HEADER};
  width: 100%;
  padding-bottom: 5vw;
`
export const NavWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3vw 0 2vw;
`
export const InvisWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 2vw);
  margin-top: 2vw;
  z-index: ${Z.INVIS_WRAPPER};
`
export const LogoWrapper = styled.div`
  position: relative;
  height: inherit;
  z-index: ${Z.LOGO};
`
export const MainLogo = styled(Logo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  li:last-child {
    margin-left: 16px;
  }
`
