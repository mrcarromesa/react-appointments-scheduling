import 'react-widgets/styles.css';

import { format } from 'date-fns';
import { Formik, FormikHelpers } from 'formik';
import { useCallback } from 'react';
import DropdownList from 'react-widgets/DropdownList';
import Button from 'src/components/Button';

import { types, watches } from './constants';
import styles from './styles.module.scss';

interface IEventInputsProps {
  typesSelected: string;
  watchSelected: string;
}

const SchedulesForm = () => {
  const formattedDate = format(new Date(), 'dd/MM/yyyy');

  const handleOnSubmit = useCallback(
    (
      { typesSelected, watchSelected }: IEventInputsProps,
      { resetForm }: FormikHelpers<IEventInputsProps>,
    ) => {
      console.log(typesSelected, watchSelected);
      // clear form
      resetForm();
    },
    [],
  );

  return (
    <div className={styles.container}>
      <header>
        <h1>Criar evento para {formattedDate}</h1>
        <small>Altere a data clicando no calendário abaixo</small>
      </header>
      <Formik
        onSubmit={handleOnSubmit}
        initialValues={{
          typesSelected: '',
          watchSelected: '',
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <span>Tipo:</span>
              <DropdownList
                defaultValue=""
                data={types}
                dataKey="id"
                textField="name"
                value={values.typesSelected}
                onChange={value => setFieldValue('typesSelected', value.id)}
              />
            </div>
            <div className={styles.formGroup}>
              <span>Turno:</span>
              <DropdownList
                defaultValue=""
                data={watches}
                dataKey="id"
                textField="name"
                value={values.watchSelected}
                onChange={value => setFieldValue('watchSelected', value.id)}
              />
            </div>
            <Button type="submit">Salvar</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SchedulesForm;
