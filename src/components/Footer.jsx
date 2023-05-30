import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import contactMessage from '../data/contactMessage.json';
import JokeGenerator from './JokeGenerator';


export default function Footer () {

    const [isAtContactPage] = useState(true)


//    const displayContactMessage = isAtContactPage? 
//         contactMessage.messageOffContactPage 
//         : contactMessage.messageOnContactPage
    
    

    return (
    <div>

            <div>
                <JokeGenerator />
            
            </div>
       
            <div className='flex items-center justify-center px-8 py-8 lg:justify-between'>
                <div class="mr-12 hidden lg:block">
                    <p >My Portfolio 2023 ©</p>
                    <p >Created by Loreli - with love (& lots of caffeine!)</p>
                </div>
            
                <div className='social-media flex space-x-4'>
                    <div>
                        <SocialIcon url="https://www.linkedin.com/in/loreli-de-jesus-084b571a5/" bgColor="#FFF8F0" fgColor="black"/>
                    </div>
                    
                    <div>
                        <SocialIcon url="https://github.com/DJ-Lor" bgColor="#FFF8F0" fgColor="black" />
                    </div>

                    <div>
                        <SocialIcon url="https://wa.me/+61416563389" network="whatsapp" bgColor="#FFF8F0" fgColor="black"/>
                    </div>

                    <div>
                        <SocialIcon url="mailto:dejesus.loreli@gmail.com" bgColor="#FFF8F0" fgColor="black"/>
                    </div>
                </div>
            </div>
           
       

    </div>
    )

}






