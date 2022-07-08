import { StoplightProject } from "@stoplight/elements-dev-portal";
import { useEffect, useState } from "react";

export default function Cards() {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true)
    }, [])
    return (
        <>
            {load && (
                <StoplightProject projectId="cHJqOjExMTUzNw" basePath="/cards" router="history"/>
            )}
        </>
    )
}