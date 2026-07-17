"use client"
import React, {useState } from 'react'
import { MessageCircleQuestionMark } from 'lucide-react';

export default function ChatBot () {
    const[Open, setOpen]= useState(false);

    const[Message, setMessage]= useState([
        { sender: 'bot', text: "Hi! Do you have any questions regarding our services, fees, or how to book a consultation?" }
    ]);

    const [stage, setStage] = useState('yesno');

    const questions = [
        { question: "What services do you offer?", answer: "We offer retirement planning, investment advisory, tax planning, and estate planning." },
        { question: "What are your fees?", answer: "Fees depend on the service and portfolio size. Book a free consultation for exact pricing." },
        { question: "How do I book a consultation?", answer: "You can book through our 'Book a Call' page, or email enquiries@austfinancialadvisory.com.au" }
    ];

    function addMessage(sender, text) {
        setMessage(function (prevMessages) {
            return prevMessages.concat([{ sender: sender, text: text }]);
        });
    }

    function handleYes() {
        addMessage('user', 'Yes');    
        setStage('questions');
    }
    
    function handleNo() {
        addMessage('user', 'No');                                        
        addMessage('bot', 'Let us know if you need help. Thank you.');     
        setStage('done');                                                  
    }    

    function handleQuestionClick(item) {
        addMessage('user', item.question);   
        addMessage('bot', item.answer);      
        setStage('askmore');              
    }

    function handleAskMore() {
        setStage('questions');
    }
  return (
    <div className='fixed right-4 bottom-24 z-50 sm:right-6 sm:bottom-28 lg:right-10 lg:bottom-30'>
        <button aria-label={Open ? 'Close chat' : 'Open chat'} aria-expanded={Open} onClick={()=>setOpen(!Open)} className='grid size-14 place-items-center rounded-full bg-linear-to-r from-blue-600/50 to-sky-300/50 shadow-lg shadow-neutral-500/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:size-[70px]'>
            <MessageCircleQuestionMark className='size-7 sm:size-[30px]'/>
        </button>
        {Open&&(
            <div className='absolute right-0 bottom-17 z-50 flex max-h-[min(620px,calc(100dvh-8rem))] min-h-50 w-[calc(100vw-2rem)] max-w-80 flex-col items-stretch justify-start gap-3 overflow-y-auto rounded-xl border border-blue-100 bg-white p-4 shadow-[0_20px_60px_-24px_rgba(37,99,235,0.45)] sm:bottom-20 sm:p-5'>
                {Message.map((msg, index)=>(
                    <div
                    key={index}
                    className={msg.sender === 'bot'
                                ? 'max-w-[85%] min-w-0 self-start rounded-lg rounded-bl-sm bg-blue-200 p-3 text-sm leading-5 text-black shadow-sm [overflow-wrap:anywhere]'
                                : 'max-w-[85%] min-w-0 self-end rounded-lg rounded-br-sm bg-blue-600 p-3 text-sm leading-5 text-white shadow-sm [overflow-wrap:anywhere]'
                            }>
                        {msg.text}
                    </div>
                ))}
                {stage === 'yesno' && (
                    <div className='mt-2 flex w-full flex-row items-center justify-center gap-2 sm:gap-3'>
                        <button onClick={handleYes} className="min-h-10 min-w-0 flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            Yes
                        </button>
                        <button onClick={handleNo} className="min-h-10 min-w-0 flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            No
                        </button>
                    </div>
                )}

                {stage === 'questions' && (
                    <div className='mt-2 flex w-full flex-col gap-2'>
                        {questions.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleQuestionClick(item)}
                                className='min-h-10 rounded-lg bg-blue-600 px-3 py-2 text-left text-sm font-medium text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex-wrap'
                            >
                                {item.question}
                            </button>
                        ))}
                    </div>
                )}

                {stage === 'askmore' && (
                    <div className='mt-2 flex w-full justify-center'>
                        <button onClick={handleAskMore} className='min-h-10 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                            Ask More
                        </button>
                    </div>
                )}
            </div>
        )}
    </div>
  )
}
