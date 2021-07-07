import React from 'react'
import { Spinner } from "@chakra-ui/react"
import './Loading.css'
const Loading = () => {

    return (
        <div className='loading-div'>
            <Spinner color="white" size="xl" />
        </div>
    )
}

export default Loading
