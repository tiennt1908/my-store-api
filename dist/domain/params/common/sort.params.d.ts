import { SortType } from 'src/domain/constants/type.constant';
export interface SortParams<T> {
    col: T;
    type: SortType;
}
