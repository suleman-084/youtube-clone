import React from 'react'

    const commentsData = [
        
    {
        name: "suleman",
        text: "It look so great",
        replies: [],

    },
    {
        name: "suleman",
        text: "It look so great",
        replies: [  {
            name: "suleman",
            text: "It look so great",
            replies: [
                
                {
                    name: "suleman",
                    text: "It look so great",
                    replies: [
                        {
                            name: "suleman",
                            text: "It look so great",
                            replies: [
                                {
                                    name: "suleman",
                                    text: "It look so great",
                                    replies: [],
                            
                                },
                            ],
                    
                        },
                        
                    ],
        
                }, ],

        },  {
            name: "suleman",
            text: "It look so great",
            replies: [
                
            ],

        },  {
            name: "suleman",
            text: "It look so great",
            replies: [
                {
                    name: "suleman",
                    text: "It look so great",
                    replies: [
                        {
                            name: "suleman",
                            text: "It look so great",
                            replies: [],
                    
                        },
                    ],
        
                },
            ],

        },  {
            name: "suleman",
            text: "It look so great",
            replies: [
                {
                    name: "suleman",
                    text: "It look so great",
                    replies: [
                        {
                            name: "suleman",
                            text: "It look so great",
                            replies: [],
                    
                        },
                    ],
        
                },
            ],

        },],

    },
    {
        name: "suleman",
        text: "It look so great",
        replies: [{
            name: "suleman",
            text: "It look so great",
            replies: [],

        },{
            name: "suleman",
            text: "It look so great",
            replies: [],

        },],

    },
    {
        name: "suleman",
        text: "It look so great",
        replies: [],

    },
    {
        name: "suleman",
        text: "It look so great",
        replies: [{
            name: "suleman",
            text: "It look so great",
            replies: [],

        },{
            name: "suleman",
            text: "It look so great",
            replies: [],

        },],

    },
    {
        name: "suleman",
        text: "It look so great",
        replies: [],

    },
   
    
]


const Comments = ({data}) => {
    const {name, text, replies } = data;
  return (
    <div className='flex py-5 shadow=sm bg-gray-100 rounded-lg px-5 my-2'>
      <img className='w-12 h-12'  src='https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg' alt='user'/>
      <div className='px-3 '>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
   
  )
}

export {commentsData, Comments}
