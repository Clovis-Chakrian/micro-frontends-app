import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { 
  PrimeReactProvider, 
} from 'primereact/api';
import { ContactsList } from './pages/ContactsList/ContactsList';

export default function Root(props) {
  return (
    <PrimeReactProvider>
      <ContactsList></ContactsList>
    </PrimeReactProvider>
  );
};