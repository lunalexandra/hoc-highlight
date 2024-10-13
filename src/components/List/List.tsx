import { New } from "../New/New";
import { Popular } from "../../Popular/Popular";
import { Article } from "../Article/Article";
import { Video } from "../Video/Video";


interface ListItem {
    id?: string;
    type: string;
    title?: string;
    url?: string;
    views: number;
}

interface ListProps {
    list: ListItem[];
}

const NewVideo = New(Video);
const NewArticle = New(Article);
const PopularVideo = Popular(Video);
const PopularArticle = Popular(Article);

export function List({ list }: ListProps) {
    return (
        <>
            {list.map((item) => {
                const Component = item.views >= 100 
                    ? (item.type === 'video' ? NewVideo : NewArticle) 
                    : (item.type === 'video' ? PopularVideo : PopularArticle);

                return <Component key={item.id} {...item} />;
            })}
        </>
    );
}