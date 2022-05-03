import React, { useEffect, useState } from 'react'
import { updateThemeContentRequest } from '../../services/theme';
import ModalMaker from '../ModalMaker'

function EditModal({ inputs, sectionId, closeFunction = () => { }, closeAndRefresh=()=>{} }) {
    const [formFields, setFormFields] = useState({});
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        setInitialFormInputs();
    }, [inputs])
    const setInitialFormInputs = () => {
        if (inputs) {
            const form_inputs = {};
            inputs.map((item) => {
                form_inputs[item.name] = item.value;
            })
            setFormFields(prevState => ({ ...prevState, ...form_inputs }))
        }
    }
    const updateFormField = (input_name, value) => {
        let temp_form_fields = { ...formFields };
        temp_form_fields[input_name] = value;
        setFormFields(prevState => ({ ...prevState, ...temp_form_fields }))
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try{
            setProcessing(true)
            // alert(JSON.stringify(formFields)) // Quick debug Fields

            // send request on server
            const res = await updateThemeContentRequest(sectionId, formFields)
            console.log("Data Update",{res})

            // Close Modal and get updated data
            closeAndRefresh();
        }catch(e){
            throw e;
        }finally{
            setProcessing(false)
        }
        
        
    }
    return (
        <ModalMaker
            maxHeightAllocated={250}
            maxWidthAllocated={402}
            show={inputs?.length > 0}
            closeFunction={closeFunction}>
            <form className='edit-modal' onSubmit={(e) => handleSubmit(e)}>
                {inputs && inputs.map((item, index) => {
                    return <div className='form-group' key={index}>
                        <label htmlFor={`${item.name}`}>{item.label}</label>
                        <input
                            value={formFields[item.name]}
                            type={item.type}
                            onChange={e => updateFormField(item.name, e.target.value)}
                            id={`${item.name}`}
                            required />
                    </div>
                })}
                <button type='submit' className={`submit-btn ${processing?'disabled':''}`} disabled={processing}>Update</button>
            </form>
        </ModalMaker>
    )
}

export default EditModal