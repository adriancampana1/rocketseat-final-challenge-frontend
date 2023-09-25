import { Container } from './styles';

export const Input = ({ label, type, icon: Icon, ...rest }) => {
    return (
        <Container>
            {label ? <label htmlFor="">{label}</label> : ''}
            <div className="input">
                {Icon && <Icon size={20}></Icon>}
                <input {...rest} type={type} />
            </div>
        </Container>
    );
};
