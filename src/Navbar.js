import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">ToDoApp</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;