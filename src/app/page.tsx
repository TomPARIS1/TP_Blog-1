"use client"

import Image from "next/image";
import axios from "axios";
import {useEffect, useState} from "react";
import {ArticleList} from "@/components/article-list";
import {NextUIProvider} from "@nextui-org/react";


export default function Home() {
    const [article, setArticle] = useState<any[]>([]);

    const getArticle = () => {
        axios.get('https://dev.to/api/articles')
            .then((response) => {
                console.log(response);
                setArticle(response.data);
            }).catch(error => console.log(error));
    };

    useEffect(() => getArticle(), []);

    return (
        <NextUIProvider>
            <h1 className="flex justify-center text-4xl font-bold p-10">BLOG</h1>
            <ArticleList articles={article}/>
        </NextUIProvider>
    );
}
