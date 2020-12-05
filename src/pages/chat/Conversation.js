/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { readMessages } from '../../globalVariables'


export default function Conversation(props) {
    const [isActive, setActiveClass] = useState(false)
    const [unreadedMessages, markMessages] = useState(false)
    const [flag, setFlag] = useState(false)
    // const { writer, unreaded_messages } = props
    const userName = `${props.props.writer.writer.first_name} ${props.props.writer.writer.last_name}`
    const lastMessage = props.props.last_message.length > 22 ? `${props.props.last_message}...` : `${props.props.last_message}` 
    const dateSended = new Date(props.props.last_sended)
    const minutes = dateSended.getMinutes() < 10 ? `0${dateSended.getMinutes()}` : `${dateSended.getMinutes()}`
    const time = `${dateSended.getHours()}:${minutes}`

    const addActiveClass = () => {
        // e.target.classList.add('active')
        const allComponents = document.querySelectorAll('.conversation-wrapper')
        allComponents.forEach(obj => obj.classList.remove('active'))
        document.getElementById(props.id).classList.add('active')
    }

    const unreaded_messages = props.props.unreaded_messages
    
    const markMessagesReaded = () => {
        readMessages(props.id)
        markMessages(false)
    }

    useEffect(()=> {
        if(unreaded_messages) {
            markMessages(true)
        }
    }, [flag])
    
    return(
        <>
            <div id={props.id} className={
                isActive 
                ? 
                "conversation-wrapper active" 
                : 
                "conversation-wrapper"} 
                aria-hidden="true"
                onClick={() => { 
                    addActiveClass()
                    // Przesyłamy ID do komponentu nadrzędnego
                    props.messages(props.id)
                    markMessagesReaded()
                }}>
                {/* check for unreaded messages */}
                { unreadedMessages ? <div className="unreaded">!</div> : null}
                <div className="conversation">
                    <div className="img-wrapper">
                        <img src={ props.props.writer.mini_photo } alt="pisarz"/>
                    </div>
                    <div className="conversation-info">
                        <span>
                            <span className="name">{ userName }</span>
                            <span className="hour">{ time }</span>
                        </span>
                        <p>{ lastMessage }</p>
                    </div>
                </div>
            </div>
        </>
    )
}