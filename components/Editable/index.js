import React, { useEffect, useState } from 'react'
import EditModal from '../EditModal/EditModal';

function Editable({ children, sectionId , updateData, inputs=[] }) {
    const [modalOpen, setModalOpen] = useState(null);
    
    const updateInputs = () => {
        setModalOpen(inputs)
    }
    return (
        <div className='editable-component' style={{minHeight:'40px', minWidth:'70px' }} >
            {children}
            <span className='edit-btn' onClick={() => updateInputs()}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#14C831" />
                    <path d="M9.18717 14.792C9.21322 14.792 9.23926 14.7893 9.2653 14.7854L11.4554 14.4013C11.4814 14.3961 11.5062 14.3844 11.5244 14.3649L17.0439 8.84534C17.056 8.83329 17.0656 8.81898 17.0721 8.80323C17.0787 8.78748 17.082 8.77059 17.082 8.75354C17.082 8.73649 17.0787 8.7196 17.0721 8.70385C17.0656 8.6881 17.056 8.67379 17.0439 8.66174L14.8799 6.49638C14.8551 6.47164 14.8226 6.45862 14.7874 6.45862C14.7523 6.45862 14.7197 6.47164 14.695 6.49638L9.17546 12.0159C9.15592 12.0354 9.14421 12.0589 9.139 12.0849L8.75488 14.275C8.74222 14.3448 8.74674 14.4166 8.76807 14.4842C8.7894 14.5518 8.82688 14.6132 8.87728 14.663C8.96322 14.7464 9.07129 14.792 9.18717 14.792V14.792ZM10.0648 12.5211L14.7874 7.79976L15.7419 8.75419L11.0192 13.4755L9.86165 13.68L10.0648 12.5211V12.5211ZM17.29 15.8857H7.70671C7.47624 15.8857 7.29004 16.0719 7.29004 16.3024V16.7711C7.29004 16.8284 7.33691 16.8753 7.39421 16.8753H17.6025C17.6598 16.8753 17.7067 16.8284 17.7067 16.7711V16.3024C17.7067 16.0719 17.5205 15.8857 17.29 15.8857Z" fill="white" />
                </svg>
            </span>
            <EditModal
                inputs={modalOpen}
                sectionId={sectionId}
                closeFunction={()=>{
                    setModalOpen(null)
                }}
                closeAndRefresh={()=>{
                    updateData()
                    setModalOpen(null);
                }}
            />
        </div>
    )
}

export default Editable