"use client"
import {FC, memo, useMemo, useState} from "react";
import Link from "next/link";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

type Props = {
    article: any[];
}

const displayArticle: FC<Props> = memo(function ({article}) {

    return (
        <div className="gap-10 grid grid-cols-2 sm:grid-cols-4">

        </div>
    );
});

displayArticle.displayName = "ProductList";
export {displayArticle};