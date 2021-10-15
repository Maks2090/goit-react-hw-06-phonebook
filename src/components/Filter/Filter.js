import {  useDispatch } from "react-redux";
import css from '../Filter/Filter.module.css'
import * as actions from "../../redux/actions";

function Filter() {
    const dispatch = useDispatch();
   
    const filterList = (e) => dispatch(actions.filterChange(e.target.value));
    return (
        <div>
            <p className={css.text}>Find contacts by name</p>
            <input
                className={css.input}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                onChange={filterList}
                
            />
        </div>
    );
}



export default Filter;