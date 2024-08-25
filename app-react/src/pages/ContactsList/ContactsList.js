import './ContactsList.css';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { teste } from '@mfe/libs';

const tableHeader = (
  <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Contatos</span>
      <Button icon="pi pi-refresh" rounded raised onClick={() => teste('Teste as')} />
  </div>
);

export const ContactsList = () => {
  return (
    <main className='container'>
      <DataTable showGridlines header={tableHeader} tableStyle={{ minWidth: '50rem' }}>
        <Column header="Foto/Avatar" field="Code"></Column>
        <Column header="Nome" field="Name"></Column>
        <Column header="Email" field="Category"></Column>
        <Column header="Celular" field="Quantity"></Column>
        <Column header="Ações" field="Quantity"></Column>
      </DataTable>
    </main>
  );
}