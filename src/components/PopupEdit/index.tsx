import { ModalForm } from "../ModalForm";
import './styles.css';

type PropsType = {
  id: number;
  title: string;
  content: string;
  trigger: boolean;
  setTrigger: (value: boolean) => void;
};

export const PopupEdit = ({id, title, content, trigger, setTrigger}: PropsType) => {
 
  return (trigger) ? (
    <div className='popup-edit'>
      <ModalForm idEdit={id} titleEdit={title} contentEdit={content} titleModal='Edit Item' labelButton='SAVE'>
        <button onClick={() => setTrigger(false)}>CLOSE</button>
      </ModalForm>
    </div>
  ) : null;
};