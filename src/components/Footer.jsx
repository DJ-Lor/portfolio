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
    <div className="">
        
        <h1 className='text-blue-600'>Contact</h1>

     


        <div className='display-contact-message'>
            <p className='text-2xl'>
                <a href="https://www.google.com">{displayContactMessage}</a> 
            </p>
        </div>

        <span className=''>

            <div className='flex items-center justify-center border-b-2 border-purple p-6 lg:justify-between'>

                <div class="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
            
                <div className='social-media flex space-x-4'>
                    <div>
                        <SocialIcon url="https://www.linkedin.com/in/loreli-de-jesus-084b571a5/" bgColor="purple"/>
                    </div>
                    
                    <div>
                        <SocialIcon url="https://github.com/DJ-Lor" bgColor="purple" />
                    </div>

                    <div>
                        <SocialIcon url="https://wa.me/+61416563389" network="whatsapp" bgColor="purple"/>
                    </div>

                    <div>
                        <SocialIcon url="mailto:dejesus.loreli@gmail.com" bgColor="purple"/>
                    </div>
                </div>

            </div>
           
        </span>

    </div>
    )

}