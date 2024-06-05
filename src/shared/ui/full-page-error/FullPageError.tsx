import toast from "react-hot-toast";

type FullPageErrorProps = {
    error: Error;
};

export function FullPageError(props: FullPageErrorProps) {
    const { error } = props;

    return toast.error(`Something went wrong!\b${error?.message}`);
}