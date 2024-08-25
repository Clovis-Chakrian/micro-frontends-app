import { Button } from 'primereact/button';
import * as singleSpa from 'single-spa';

const TableHeader = ({ refreshFunction }) => {
  return (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Contatos</span>
      <div className="flex flex-row align-items-center justify-content-center gap-3">
        <Button icon="pi pi-refresh" rounded raised onClick={refreshFunction} />
        <Button icon="pi pi-plus" rounded raised onClick={() => singleSpa.navigateToUrl('/create')} />
      </div>
    </div>
  );
}

export { TableHeader }
