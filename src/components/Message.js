import React from 'react'

export default function message(props) {
    const author = props.message.author.first_name

    const dateSended = new Date(props.message.created_at)
    const minutes = dateSended.getMinutes() < 10 ? `0${dateSended.getMinutes()}` : `${dateSended.getMinutes()}`
    const time = `${dateSended.getHours()}:${minutes}`

    return(
        <>
            { props.message.author.first_name 
                ?  
                <div className="chat-message-wrap writer-message">
                    <div className="chat-message-container">
                        <div>
                            <div className="message-header">
                                <div>
                                    <p>{author}</p>
                                </div>
                                <span className="hour">{ time }</span>
                            </div>
                            <div className="chat-message">
                                { props.message.text }
                            </div>
                        </div>
                    </div>
                </div> 
                : 
                <div className="chat-message-wrap customer-message">
                   <div className="chat-message-container">
                       <div>
                            <div className="message-header">
                                <div>
                                    <p>{ props.message.author.username }</p>
                                </div>
                                <span className="hour">{ time }</span>
                            </div>
                            <div className="chat-message">
                                { props.message.text }
                            </div>
                       </div>
                    </div>
                </div>
            }
        </>
        )
}