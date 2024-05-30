import {IColumnType} from "./Table.tsx";
interface Props<T> {
    columns: IColumnType<T>[];
}

export function TableHeader<T>({ columns }: Props<T>): JSX.Element {
    return (
        <tr>
            {columns.map((column, columnIndex) => (
                <th
                    key={`table-head-cell-${columnIndex}`}
                    style={{ width: column.width }}
                >
                    {column.title}
                </th>
            ))}
        </tr>
    );
}