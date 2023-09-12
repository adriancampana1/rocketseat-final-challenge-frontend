import { Container } from './styles';

export const Button = ({ title, loading = false, icon: Icon, ...rest }) => {
    return (
        <Container type="button" disabled={loading} {...rest}>
            {Icon && <Icon size={20}></Icon>}
            {title}
        </Container>
    );
};
