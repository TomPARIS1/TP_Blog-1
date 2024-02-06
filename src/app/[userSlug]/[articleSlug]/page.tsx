"use client"

import {NextUIProvider} from "@nextui-org/react";
import {useEffect, useState} from "react";
import { usePathname } from 'next/navigation'
import axios from "axios";

export default function ArticlePage() {

    const [article, setArticle] = useState<any[]>([]);
    const pathname = usePathname()
    const getArticle = () => {
        axios.get(`https://dev.to/api/articles/${pathname}`)
            .then((response) => {
                console.log(response);
                setArticle(response.data);
            }).catch(error => console.log(error));
    };

    useEffect(() => getArticle(), []);

    console.log(article);

    return (
        <NextUIProvider>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <p>Current pathname: {pathname}</p>
                </div>
            </main>
        </NextUIProvider>
    );
}