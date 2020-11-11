import React from 'react'
import 'styles/chat.scss'
import AuthenticationWrapper from '../pages/authentication/Authentication'
import Ricardo from '../assets/images/ricardo.jpg'

export default function Chat () {
    return(
        <AuthenticationWrapper>
        <div id="chat">
            <div className="messages">
                <div className="messages-wrapper"> 
                    <h2>Wiadomości</h2>
                    <div className="message">
                        <div className="message-wrapper">
                            <div className="img-wrapper">
                                <img src={Ricardo} alt=""/>
                            </div>
                            <div className="message-info">
                                <span>
                                    <span className="name">Wsparcie klienta</span>
                                    <span className="hour">10:32 am</span>
                                </span>
                                <p>Witaj w naszej apce !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat">
                <div className="chat-message-wrap">
                    <div className="message-header">
                        <div>
                            <div className="img-wrapper">
                                <img src={Ricardo} alt=""/>
                            </div>
                            <p>Wsparcie klienta</p>
                        </div>
                        <span className="hour">10:32 am</span>
                    </div>
                    <div className="chat-message">Cześć, nazywam się Ricardo ! Chętnie odpowiem na wszystkie Twoje pytania</div>
                </div>
                <div className="input">
                    <textarea type="text" resize="none" placeholder="Tutaj wpisz tekst wiadomości"/>
                    <button type="button">
                        Wyślij
                    </button>
                </div>
            </div>
        </div>
        </ AuthenticationWrapper>
    )
}