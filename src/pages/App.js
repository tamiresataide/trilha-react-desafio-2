import gitLogoWhite from '../assets/logo-white.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo'

import { Container } from './styles'

function App() {
  return (
    <Container>
      <img src={gitLogoWhite} width={72} height={72} alt='logo' />
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
