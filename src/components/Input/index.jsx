import { Container } from './styles';

export const Input = ({ label, icon: Icon, ...rest }) => {
    return (
        <Container>
            {label ? <label htmlFor="">{label}</label> : ''}
            <div className="input">
                {Icon && <Icon size={20}></Icon>}
                <input {...rest} />
            </div>
        </Container>
    );
};
