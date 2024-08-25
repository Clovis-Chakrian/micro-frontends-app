import './ContactsList.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { teste, httpClient } from '@mfe/libs';
import { TableHeader } from './TableHeader';
import { useEffect, useState } from 'react';
import { Avatar } from 'primereact/avatar';
import * as singleSpa from 'single-spa';

export const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  async function getContacts() {
    try {
      const response = await httpClient.get('/Contact');

      if (typeof (response.data) == 'string') return;

      setContacts(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getContacts();
  }, [])

  return (
    <main className='container'>
      <DataTable value={contacts} key='id' showGridlines header={<TableHeader refreshFunction={getContacts} />} tableStyle={{ minWidth: '50rem' }}>
        <Column header="Foto/Avatar" field="" body={(contact) =>
        (
          <Avatar size='large' label={`${contact?.name.split('')[0]}${contact?.lastName.split('')[0]}`} style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape='circle' />
        )
        }></Column>
        <Column header="Nome" field="name" body={(contact) =>
        (
          <p>{contact?.name} {contact?.lastName}</p>
        )
        }>
        </Column>
        <Column header="Email" field="email"></Column>
        <Column header="Celular" field="phone"></Column>
        <Column header="Ações" body={(contact) =>
        (
          <Button icon="pi pi-pencil" text rounded aria-label="Atualizar" onClick={() => singleSpa.navigateToUrl(`/update/${contact?.id}`)} />
        )
        }></Column>
      </DataTable>
    </main>
  );
}