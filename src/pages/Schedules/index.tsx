import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';

import styles from './styles.module.scss';

const Schedules = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <header>
        <h1>Agendamentos</h1>
        <Button onClick={() => navigate('/schedules/create')}>
          Novo Agendamento
        </Button>
      </header>
      <div className={styles.content}>
        <Calendar
          defaultActiveStartDate={new Date()}
          defaultView="month"
          value={new Date()}
          onChange={() => {}}
          className={styles.calendar}
          locale="pt-BR"
        />
      </div>
    </div>
  );
};

export default Schedules;
