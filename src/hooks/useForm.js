import { useRef, useState } from "react"

export const useForm = ( initialForm ) => {

    const [ formState, setFormState ] = useState( initialForm )
    const fileInputRef = useRef(null)
    const [ file, setFile ] = useState()
  
  
    const onInputChange = ({ target }) => {
  
      const { name, value } = target;
  
      setFormState({
          ...formState,
          [name]: value,
      })
  
    }
  
    const onFileChange = ( e ) => {
      
      const selectedFile = e.target.files[0];
  
      setFile( selectedFile );
  
      setFormState({
        ...formState,
        imagen: selectedFile?.name || ''
      })
    
    }

    const onResetForm = () => {
        setFormState( initialForm )
    
        setFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';  // Resetear el input file
        }
      }

    return{
        ...formState,
        formState,
        file,
        fileInputRef,
        onInputChange,
        onFileChange,
        onResetForm,

    }
}
