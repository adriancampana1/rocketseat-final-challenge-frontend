import { useState } from 'react';
import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { FileUpload } from '../../components/FileUpload';
import { Input } from '../../components/Input';
import { CustomSelect } from '../../components/CustomSelect';
import { CustomTextSelect } from '../../components/CustomTextSelect';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { FiChevronLeft } from 'react-icons/fi';

export const New = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (file) => {
        setSelectedImage(file);
    };
    return (
        <Container>
            <Header isAdmin></Header>
            <Content>
                <header>
                    <div className="button-text">
                        <FiChevronLeft></FiChevronLeft>
                        <a href="/">voltar</a>
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
                            <Input placeholder="Ex: Salada Ceasar"></Input>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="categories">Categoria</label>
                            <CustomSelect></CustomSelect>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="input-wrapper">
                            <label htmlFor="">Ingredientes</label>
                            <CustomTextSelect></CustomTextSelect>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="price">Preço</label>
                            <Input placeholder="R$0,00"></Input>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="description">Descrição</label>
                        <Textarea></Textarea>
                    </div>
                    <div className="button-wrapper">
                        <Button title="Salvar alterações"></Button>
                    </div>
                </form>
            </Content>
            <Footer></Footer>
        </Container>
    );
};
