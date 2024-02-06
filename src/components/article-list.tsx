"use client"
import {FC, memo, useMemo, useState} from "react";
import Link from "next/link";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

type Props = {
    articles: any[];
}

const ArticleList: FC<Props> = memo(function ({articles}) {

    return (
        <div className="gap-10 grid grid-cols-2 sm:grid-cols-4">
                {articles.map((article) => (
                    <section key={article.id}>
                        <Card className="py-4 min-h-80 max-h-80 justify-center">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src={article.cover_image}
                                    width={250}
                                />
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <h2 className="text-lg font-semibold tracking-tight">
                                    <Link href={{
                                        pathname:`/${article.user.username}/${article.slug}`,
                                    }} className="link" >{article.title}</Link>
                                </h2>
                                <p>{article.description}</p>
                            </CardBody>
                        </Card>


                    </section>
                ))}
        </div>
    );
});

ArticleList.displayName = "ProductList";
export {ArticleList};