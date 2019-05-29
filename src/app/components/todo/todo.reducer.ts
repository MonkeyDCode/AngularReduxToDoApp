import { Acciones, AGREGAR_TODO, TOOGLE_TODO, EDITAR_TODO, BORRAR_TODO, TOOGLE_ALL_TODO, BORRAR_ALL_TODO } from './todo.actions';
import { Todo } from 'src/app/models/todo.model';


const todo1 = new Todo('Vencer a thanos');
const todo2 = new Todo('Salvar al mundo ');
const todo3 = new Todo('Iron man');

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer (state = estadoInicial, action: Acciones){

    switch  ( action.type) {
        case TOOGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return{
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });
        case TOOGLE_ALL_TODO:
            return state.map(todoEdit => {
                    return{
                        ...todoEdit,
                        completado: action.completado
                    };
            });
        case EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return{
                        ...todoEdit,
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });
        case BORRAR_TODO:
            return state.filter(todoEdit => todoEdit.id !== action.id);
        case BORRAR_ALL_TODO:
            return state.filter( todoEdit => !todoEdit.completado );
        case AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state , todo];
        default:
            return state;
    }
}
