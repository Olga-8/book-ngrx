import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const AddBook = createAction('[Book] Add Books', props<Book>());
export const AddBookSuccess = createAction('[Book] Add Books Success', props<Book>());
export const AddBookFailure = createAction('[Book] Add Books Failure', props<{error: any}>());

export const RemoveBook = createAction('[Book] Remove Book', props<{ id: string }>());

