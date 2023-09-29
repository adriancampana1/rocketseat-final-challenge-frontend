import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import { PiPencilSimpleDuotone } from 'react-icons/pi';

import { Stepper } from '../Stepper/';
import { Button } from '../Button';

import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export const Card = ({
    isAdmin = false,
    title,
    description,
    image,
    price,
    id,
}) => {
    const [favorited, setFavorited] = useState(false);
    const [productImage, setProductImage] = useState('');

    const navigate = useNavigate();

    function handleFavorited() {
        favorited ? setFavorited(false) : setFavorited(true);
    }

    function handleDetails() {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        const imageURL = `${api.defaults.baseURL}/files/${image}`;
        setProductImage(imageURL);
    }, [image]);

    return (
        <Container>
            {isAdmin ? (
                <PiPencilSimpleDuotone
                    className="favorite"
                    onClick={() => navigate(`/edit/${id}`)}
                ></PiPencilSimpleDuotone>
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
            <img src={productImage} onClick={handleDetails} />
            <h3 onClick={handleDetails}>
                {title} <FiChevronRight></FiChevronRight>
            </h3>
            <span className="description" onClick={handleDetails}>
                {description}
            </span>
            <p className="price" onClick={handleDetails}>
                {price}
            </p>
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
