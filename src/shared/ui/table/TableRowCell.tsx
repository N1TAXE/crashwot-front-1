import {IColumnType} from "./Table.tsx";
import get from "lodash.get";
interface Props<T> {
    item: T;
    column: IColumnType<T>;
}

export function TableRowCell<T>({ item, column }: Props<T>): JSX.Element {
    const value = get(item, column.key);
    return (
        <td>{column.render ? column.render(column, item) : value}</td>
    );
}