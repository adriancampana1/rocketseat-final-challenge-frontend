import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

import { api } from '../../services/api';

export const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [category, setCategory] = useState();
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const [productData, setProductData] = useState(null);

    const navigate = useNavigate();
    const params = useParams();

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

    function handleSelectChange(category) {
        setCategory(category.value);
    }

    function handleTextareaChange(value) {
        setDescription(value);
    }

    function backToHome() {
        navigate(-1);
    }

    async function handleEditProduct() {
        const data = new FormData();

        if (selectedImage) {
            data.append('image', selectedImage);
            await api.patch(`products/image/${productData.id}`, data);
        }

        api.put(`/products/${productData.id}`, {
            title,
            description,
            price,
            category,
            ingredients,
        })
            .then(() => {
                alert('Produto editado com sucesso!');
                navigate('/');
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível editar o produto.');
                }
            });
    }

    async function handleRemoveProduct() {
        if (window.confirm('Você deseja remover este prato?')) {
            try {
                await api.delete(`/products/${productData.id}`);
                alert('Produto deletado com sucesso!');
                navigate('/');
            } catch (error) {
                console.error('Erro ao excluir o produto: ', error);
                alert('Erro ao excluir o produto. Tente novamente mais tarde!');
            }
        }
    }

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/products/${params.id}`);

            const productData = response.data;
            setProductData(productData);

            setTitle(productData.title);
            setCategory(productData.category);

            const ingredientTitles = productData.ingredients.map(
                (ingredient) => ingredient.title
            );
            setIngredients(ingredientTitles);
            setDescription(productData.description);
            setPrice(productData.price);
        }

        fetchData();
    }, []);

    return (
        <Container>
            <Header isAdmin></Header>
            {productData && (
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
                                            src={URL.createObjectURL(
                                                selectedImage
                                            )}
                                            alt="imagem selecionada"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="name">Nome do prato</label>
                                <Input
                                    placeholder={title}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                ></Input>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="categories">Categoria</label>
                                <CustomSelect
                                    value={category}
                                    selectedValueChange={handleSelectChange}
                                ></CustomSelect>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-wrapper">
                                <label htmlFor="ingredients">
                                    Ingredientes
                                </label>
                                <div className="ingredients">
                                    {ingredients &&
                                        ingredients.map((ingredient, index) => (
                                            <IngredientItem
                                                key={index}
                                                value={ingredient}
                                                onClick={() =>
                                                    handleRemoveIngredient(
                                                        ingredient
                                                    )
                                                }
                                            ></IngredientItem>
                                        ))}
                                    <IngredientItem
                                        isnew
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
                                    placeholder={price}
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                ></Input>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="description">Descrição</label>
                            <Textarea onTextareaChange={handleTextareaChange}>
                                {description}
                            </Textarea>
                        </div>
                        <div className="button-wrapper">
                            <Button
                                title="Excluir prato"
                                onClick={handleRemoveProduct}
                            ></Button>
                            <Button
                                title="Salvar alterações"
                                onClick={handleEditProduct}
                            ></Button>
                        </div>
                    </form>
                </Content>
            )}
            <Footer></Footer>
        </Container>
    );
};
