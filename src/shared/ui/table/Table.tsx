import {TableHeader} from "./TableHeader.tsx";
import {TableRow} from "./TableRow.tsx";
export interface IColumnType<T> {
    key: string;
    title: string;
    width?: number;
    render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
}

export function Table<T>({ data, columns }: Props<T>): JSX.Element {
    return (
        <div className="tableWrapper">
            <table>
                <thead>
                <TableHeader columns={columns} />
                </thead>
                <tbody>
                <TableRow data={data} columns={columns} />
                </tbody>
            </table>
        </div>
    );
}