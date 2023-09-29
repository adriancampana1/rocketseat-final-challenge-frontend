import { useState } from 'react';
import { Container, Content } from './styles';
import { useNavigate } from 'react-router-dom';

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

import { api } from '../../services/api';

export const New = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState();

    const navigate = useNavigate();

    function handleImageChange(file) {
        setSelectedImage(file);
    }

    function handleAddIngredient() {
        setIngredients((prevState) => [...prevState, newIngredient]);
        setNewIngredient('');
    }

    function handleRemoveIngredient(deleted) {
        setIngredients((prevState) =>
            prevState.filter((ingredient) => ingredient !== deleted)
        );
    }

    function handleTextareaChange(value) {
        setDescription(value);
    }

    function handleSelectChange(category) {
        setCategory(category.value);
    }

    async function handleAddProduct() {
        if (!title || !price || !description || !category || !selectedImage) {
            alert('Insira todos os campos!');
        }

        const data = new FormData();
        data.append('title', title);
        data.append('description', description);
        data.append('price', price);
        data.append('category', category);
        data.append('ingredients', ingredients);
        data.append('image', selectedImage);
        await api.post('/products', data);

        alert('Produto criado com sucesso!');
        navigate('/');
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
                    <h1>Novo prato</h1>
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
                            <Input
                                placeholder="Ex: Salada Ceasar"
                                onChange={(e) => setTitle(e.target.value)}
                            ></Input>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="categories">Categorias</label>
                            <CustomSelect
                                selectedValueChange={handleSelectChange}
                            ></CustomSelect>
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
                                    isnew="true"
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
                            <Input
                                placeholder="R$0,00"
                                onChange={(e) => setPrice(e.target.value)}
                            ></Input>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label htmFor="description">Descrição</label>
                        <Textarea
                            onTextareaChange={handleTextareaChange}
                        ></Textarea>
                    </div>
                    <div className="button-wrapper">
                        <Button
                            title="Salvar alterações"
                            onClick={handleAddProduct}
                        ></Button>
                    </div>
                </form>
            </Content>
            <Footer></Footer>
        </Container>
    );
};
