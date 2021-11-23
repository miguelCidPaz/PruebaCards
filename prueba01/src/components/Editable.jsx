import { useState } from 'react'
import editable from '../res/edit.png'

const Editable = ({ props, myEditable }) => {
    //Por defecto p no devolvera editable
    const [value, setValue] = useState(props)

    //Al cambiar verdadero sera editable
    const isEditable = async () => {
        await value ? setValue(false) : setValue(true)
        myEditable(value)
    }

    return (
        <div className='icon'>
            <img src={editable} alt="#" onClick={isEditable} />
        </div>
    )
}

export default Editable