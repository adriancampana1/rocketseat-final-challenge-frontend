import { useState } from 'react';

import { Container } from './styles';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import { PiPencilSimpleDuotone } from 'react-icons/pi';

import { Stepper } from '../Stepper/';
import { Button } from '../Button';

import { useNavigate } from 'react-router-dom';

export const Card = ({ isAdmin = false, title, description, image, price }) => {
    const [favorited, setFavorited] = useState(false);
    const navigate = useNavigate();

    function handleFavorited() {
        favorited ? setFavorited(false) : setFavorited(true);
    }
    return (
        <Container onClick={() => navigate('/details')}>
            {isAdmin ? (
                <PiPencilSimpleDuotone className="favorite"></PiPencilSimpleDuotone>
            ) : (
                <>
                    <AiOutlineHeart
                        className={`favorite ${favorited ? 'invisible' : ''}`}
                        onClick={handleFavorited}
                    ></AiOutlineHeart>
                    <AiFillHeart
                        className={`favorite ${favorited ? '' : 'invisible'}`}
                        onClick={handleFavorited}
                    ></AiFillHeart>
                </>
            )}
            <img src={image} />
            <h3>
                {title} <FiChevronRight></FiChevronRight>
            </h3>
            <span className="description">{description}</span>
            <p className="price">{price}</p>
            {isAdmin ? (
                ''
            ) : (
                <div>
                    <Stepper></Stepper>
                    <Button title="incluir"></Button>
                </div>
            )}
        </Container>
    );
};
