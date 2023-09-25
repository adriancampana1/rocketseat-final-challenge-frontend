import { useRef } from 'react';
import { Container } from './styles';

import { FiUpload } from 'react-icons/fi';

export const FileUpload = ({ onChange }) => {
    const fileInputRef = useRef(null);

    const handleInputChange = (event) => {
        const selectedFile = event.target.files[0];
        onChange(selectedFile);
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    };
    return (
        <Container>
            <input
                type="file"
                accept="image"
                name="image"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleInputChange}
            ></input>
            <button onClick={handleButtonClick}>
                <FiUpload></FiUpload> Escolher imagem
            </button>
        </Container>
    );
};
