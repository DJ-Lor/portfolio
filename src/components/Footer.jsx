import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import contactMessage from '../data/contactMessage.json';
import BrokenLine from '../typography/brokenLine';

export default function Footer () {

    const [isAtContactPage] = useState(true)


   const displayContactMessage = isAtContactPage? 
        contactMessage.messageOffContactPage 
        : contactMessage.messageOnContactPage
    
    

    return (
    <div>
        
        <h1>Contact</h1>

        <div>
            <BrokenLine />
        </div>


        <div className='display-contact-message'>
            <p>
                <a href="https://www.google.com">{displayContactMessage}</a> 
            </p>
        </div>

        <span>
            <div className='social-media'>
                <div>
                    <SocialIcon url="https://www.linkedin.com/in/loreli-de-jesus-084b571a5/" />
                </div>
                
                <div>
                    <SocialIcon url="https://github.com/DJ-Lor" />
                </div>

                <div>
                    <SocialIcon url="https://wa.me/+61416563389" network="whatsapp" />
                </div>

                <div>
                    <SocialIcon url="mailto:dejesus.loreli@gmail.com" />
                </div>
            </div>

            <div>
                <BrokenLine />
            </div>

        </span>

    </div>
    )

}