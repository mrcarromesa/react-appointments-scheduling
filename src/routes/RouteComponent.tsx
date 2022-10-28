import Container from '../containers/Container';

interface IRouteComponentProps {
  component: React.ComponentType;
}

const RouteComponent: React.FC<IRouteComponentProps> = ({
  component: Component,
  ...rest
}) => (
  <Container>
    <Component {...rest} />
  </Container>
);

export default RouteComponent;
