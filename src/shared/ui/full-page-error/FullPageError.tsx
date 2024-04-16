import {toast} from "react-toastify";

type FullPageErrorProps = {
    error: Error;
};

export function FullPageError(props: FullPageErrorProps) {
    const { error } = props;

    return toast.error(`Something went wrong!\b${error?.message}`);
}