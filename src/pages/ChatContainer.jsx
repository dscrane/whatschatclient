import React from 'react';

const ChatContainer = () => {
  return (
    <div className='chatroom__display bg-secondary'>
      <div className='chatroom__container'>
        <div className='chatroom__heading'>
          {/*<h2 className='chatroom__title'>{chatRooms[chatRoomId].name}</h2>*/}
        </div>
        {/*<ChatDisplay messages={chatRooms[chatRoomId].messages} systemMessage={systemMessage} />*/}
        <div className='chatroom__input mb-2 mx-auto'>
          <form className='w-100' >
            <div className='row '>
              <div className='col-10'>
                <input
                  className='form-control w-100'
                  placeholder='Message...'
                  type='text'


                />
              </div>
              <div className='col-2'>
                <button className='btn btn-md btn-outline-secondary '>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatContainer;
