import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from '@material-ui/core/Backdrop'
import { Modal } from '@material-ui/core'

const Wrapper = styled.div`
  background-color: black;
  opacity: 0.7;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export interface LoaderProps {
  isLoading: boolean
}

const FullScreenLoader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <Modal open={isLoading} style={{height: '100%'}}>
      <Wrapper>
      <CircularProgress size={50} color="secondary" />
      </Wrapper>
      </Modal>
  )
}

export default FullScreenLoader
