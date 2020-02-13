import React from "react"
import styled from "styled-components"

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  display: ${props => (props.isShown ? "" : "none")};
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
`

const ModalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10vh 0;
`

const Window = styled.div`
  width: 100%;
  max-width: ${props => props.windowWidth || "500px"};
  padding: 2em;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.2);
`

const Modal = ({ children, footer, ...rest }) => {
  return (
    <Overlay {...rest}>
      <ModalBox>
        <Window>
          <div>{children}</div>
        </Window>
      </ModalBox>
    </Overlay>
  )
}

export default Modal
