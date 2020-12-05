import React, { useEffect, useState } from 'react'
import { getConversationMessages, sendMessage } from '../../globalVariables'
import Message from '../../components/Message'
import { getUsername } from '../../authentication'

export default function Messages(props) {
    const [messages, setMessages] = useState([])
    const [loaded, isLoaded] = useState(false)
    const [messageText, setText] = useState('')



    useEffect(()=> {
        getConversationMessages(props.id)
        .then(res => {
            setMessages(res)
            isLoaded(true)
        })
        
        const checkForNewMessages = setInterval(()=>{
            getConversationMessages(props.id)
            .then(res => {
                setMessages(res)
            })
        }, 10000)
        
        return () => clearInterval(checkForNewMessages);
    }, [loaded])

    const mesage = {
        text: "xddd",
        username: "pisarz1"
    }

    function handleSendMessage() {
        const body = {
            text: messageText,
            username: getUsername()
        }
        setText('')
        sendMessage(props.id, body)
        .then(res => {
            setMessages(res)
        })
    }

    return(
        <div className="chat">
            {
                loaded ? 
                messages.map(message => 
                    < Message 
                        key={message.id} 
                        message={message} 
                    />
                ) : null
            }
            <div className="input">
                <textarea 
                    value={ messageText }
                    type="text" 
                    resize="none" 
                    onChange={(e)=>{setText(e.target.value)}} 
                    placeholder="Tutaj wpisz tekst wiadomości"/>
                <button 
                    type="button"
                    onClick={() => handleSendMessage()}
                >
                    Wyślij
                </button>
            </div>
        </div>
    )
}


