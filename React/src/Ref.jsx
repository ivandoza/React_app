import { useEffect, useRef } from "react";

export function Ref() {

    const mountedRef = useRef(false)

    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current == true
            console.log('Mounting for the first time')
        } else {
            console.log('Mounting again')
        }
    })
}