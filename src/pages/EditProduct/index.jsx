import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { FileUpload } from '../../components/FileUpload';
import { Input } from '../../components/Input';
import { CustomSelect } from '../../components/CustomSelect';
import { IngredientItem } from '../../components/IngredientItem';
import { Ingredients } from '../../components/Ingredients';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { FiChevronLeft } from 'react-icons/fi';

export const EditProduct = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');

    const navigate = useNavigate();

    const handleImageChange = (file) => {
        setSelectedImage(file);
    };

    function handleAddIngredient() {
        setIngredients((prevState) => [...prevState, newIngredient]);
        setNewIngredient('');
    }

    function handleRemoveIngredient(deleted) {
        setIngredients((prevState) =>
            prevState.filter((ingredient) => ingredient !== deleted)
        );
    }

    function backToHome() {
        navigate(-1);
    }
    return (
        <Container>
            <Header isAdmin></Header>
            <Content>
                <header>
                    <div className="button-text">
                        <FiChevronLeft></FiChevronLeft>
                        <a onClick={backToHome}>voltar</a>
                    </div>
                </header>
                <form>
                    <h1>Editar prato</h1>
                    <div className="col-3">
                        <div className="input-wrapper">
                            <label htmlFor="upload-image">
                                Imagem do prato
                            </label>
                            <FileUpload
                                onChange={handleImageChange}
                            ></FileUpload>
                            {selectedImage && (
                                <div className="added-image">
                                    <label>Imagem selecionada:</label>
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="imagem selecionada"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="name">Nome do prato</label>
                            <Input placeholder="Salada Caesar"></Input>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="categories">Categoria</label>
                            <CustomSelect></CustomSelect>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="input-wrapper">
                            <label htmlFor="ingredients">Ingredientes</label>
                            <div className="ingredients">
                                {ingredients.map((ingredient, index) => (
                                    <IngredientItem
                                        key={index}
                                        value={ingredient}
                                        onClick={() =>
                                            handleRemoveIngredient(ingredient)
                                        }
                                    ></IngredientItem>
                                ))}
                                <IngredientItem
                                    isNew
                                    placeholder="Novo ingrediente"
                                    onChange={(e) =>
                                        setNewIngredient(e.target.value)
                                    }
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                ></IngredientItem>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="price">Preço</label>
                            <Input placeholder="R$40,00"></Input>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="description">Descrição</label>
                        <Textarea>
                            A Salada César é uma opção refrescante para o verão.
                        </Textarea>
                    </div>
                    <div className="button-wrapper">
                        <Button title="Excluir prato"></Button>
                        <Button title="Salvar alterações" loading></Button>
                    </div>
                </form>
            </Content>
            <Footer></Footer>
        </Container>
    );
};
