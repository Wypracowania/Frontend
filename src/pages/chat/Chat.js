import React, { useState, useEffect }  from 'react'
import 'styles/chat.scss'
import AuthenticationWrapper from '../authentication/Authentication'
// import Ricardo from '../assets/images/ricardo.jpg'
import { getUserConversations } from '../../globalVariables'
import Conversation from './Conversation'
import Messages from './Messages'
import { getUsername } from '../../authentication'


export default function Chat () {
    const [conversations, setConversations] = useState([])
    const [cLoaded, isCLoaded] = useState(false)
    const [messageID, setMessageId] = useState(0)

    useEffect(()=>{
        const username = getUsername()
        
        getUserConversations(username)
        .then(res => {
            setConversations(res)
            isCLoaded(true)
        })
    }, [cLoaded])

    const displayMessages = (Id) => {
        setMessageId(Id)
    }

    return(
        <AuthenticationWrapper>
        <div id="chat">
            <div className="conversations">
                <div className="conversations-wrapper"> 
                    <h2>Wiadomości</h2>
                    { cLoaded 
                        ? conversations.map(object => 
                            <Conversation 
                                key={object.id}
                                props={object}
                                id={object.id}
                                messages={displayMessages}
                            />)
                        : null
                    }
                </div>
            </div>
           { messageID ? <Messages key={messageID} id={messageID} /> : null }
        </div>
        </ AuthenticationWrapper>
    )
}