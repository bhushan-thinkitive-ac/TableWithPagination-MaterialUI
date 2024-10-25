import MemberList from './Components/MemberList';
import { Container } from '@mui/material';
import { membersData } from './Components/membersData';

function App() {
  return (
    <Container>
      <MemberList membersData={membersData} />
    </Container>
  );
}

export default App;
